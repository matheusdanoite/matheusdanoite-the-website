import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { WhiteBox, BoxTitle, NavLink } from './OrkutLayout';
import { fetchJsonFromStorage, getStorageUrl } from '../../utils/storageLoader';
import FirebaseMedia from '../FirebaseMedia';
import { resolveOrkutImage } from '../../utils/orkutImageLoader';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
  padding: 15px;
`;

const GridItem = styled.div`
  text-align: center;
  font-size: 11px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ItemImg = styled(FirebaseMedia)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  transition: transform 0.2s;
  background-color: #f0f0f0;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemName = styled.div`
  color: #06c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`;



const ITEMS_PER_PAGE = 48;

export const FriendsList = () => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const observer = useRef();

    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && visibleCount < ORKUT_FRIENDS.length) {
                setVisibleCount(prev => prev + ITEMS_PER_PAGE);
            }
        });
        if (node) observer.current.observe(node);
    }, [visibleCount]);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchJsonFromStorage('orkut/friends.json').then(data => setItems(data || []));
    }, []);

    return (
        <WhiteBox>
            <BoxTitle>meus amigos ({items.length})</BoxTitle>
            <Grid>
                {items.slice(0, visibleCount).map((friend, index) => (
                    <GridItem
                        key={friend.id}
                        ref={index === visibleCount - 1 ? lastElementRef : null}
                    >
                        <ItemImg
                            path={resolveOrkutImage(friend.photo)}
                            alt={friend.name}
                        // onError handled by FirebaseMedia placeholder or logic? 
                        // FirebaseMedia doesn't support onError prop directly passed to styled, 
                        // but supports it on StyledImg.
                        // The previous onError used a google static URL.
                        // We can handle fallback in resolveOrkutImage or just let it fail to placeholder.
                        />
                        <ItemName>{friend.name}</ItemName>
                    </GridItem>
                ))}
            </Grid>
            {visibleCount < items.length && (
                <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                    carregando mais amigos...
                </div>
            )}
        </WhiteBox>
    );
};

export const CommunitiesList = () => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const observer = useRef();

    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && visibleCount < ORKUT_COMMUNITIES.length) {
                setVisibleCount(prev => prev + ITEMS_PER_PAGE);
            }
        });
        if (node) observer.current.observe(node);
    }, [visibleCount]);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchJsonFromStorage('orkut/communities.json').then(data => setItems(data || []));
    }, []);

    return (
        <WhiteBox>
            <BoxTitle>minhas comunidades ({items.length})</BoxTitle>
            <Grid>
                {items.slice(0, visibleCount).map((comm, index) => (
                    <GridItem
                        key={comm.id}
                        ref={index === visibleCount - 1 ? lastElementRef : null}
                    >
                        <ItemImg path={resolveOrkutImage(comm.photo)} alt={comm.name} />
                        <ItemName>{comm.name}</ItemName>
                    </GridItem>
                ))}
            </Grid>
            {visibleCount < items.length && (
                <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                    carregando mais comunidades...
                </div>
            )}
        </WhiteBox>
    );
};
