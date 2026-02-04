import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { WhiteBox, BoxTitle, NavLink } from './OrkutLayout';
import { resolveOrkutImage } from '../../utils/orkutImageLoader';
import { fetchJsonFromStorage } from '../../utils/storageLoader';
import FirebaseMedia from '../FirebaseMedia';

const ReplyItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
  animation: fadeIn 0.4s ease-out;
  
  &:last-child {
    border-bottom: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const AuthorSidebar = styled.div`
  width: 120px;
  text-align: center;
`;

const AuthorName = styled.div`
  font-weight: bold;
  color: #06c;
  font-size: 11px;
  margin-top: 5px;
  word-break: break-word;
`;

const AuthorImg = styled(FirebaseMedia)`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`;

const ReplyContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ReplyHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const ReplyDate = styled.div`
  font-size: 11px;
  color: #666;
`;

const ReplyBody = styled.div`
  line-height: 1.5;
  font-size: 13px;
  word-break: break-word;
  
  /* Handle legacy Orkut HTML styles */
  div { margin-bottom: 10px; }
  span { display: inline; }
  center { text-align: center; display: block; }
  img { max-width: 100%; height: auto; margin: 10px 0; }
  blockquote {
    border-left: 3px solid #ccc;
    margin: 10px 0;
    padding-left: 10px;
    color: #666;
  }
`;

const ITEMS_PER_PAGE = 20;

const TopicDetail = ({ topic, onBack }) => {
    const [allReplies, setAllReplies] = useState([]);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [loading, setLoading] = useState(true);
    const observer = useRef();

    useEffect(() => {
        const loadReplies = async () => {
            try {
                // Topic ID based fetch
                const data = await fetchJsonFromStorage(`orkut/topics_data/topic_${topic.id}.json`);
                setAllReplies(data ? data.TOPIC_REPLIES || data : []);
                setLoading(false);
            } catch (error) {
                console.error('Failed to load topic replies:', error);
                setLoading(false);
            }
        };

        loadReplies();
    }, [topic.id]);

    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && visibleCount < allReplies.length) {
                setVisibleCount(prev => prev + ITEMS_PER_PAGE);
            }
        });
        if (node) observer.current.observe(node);
    }, [visibleCount, allReplies.length]);

    const visibleReplies = allReplies.slice(0, visibleCount);

    if (loading) {
        return (
            <WhiteBox>
                <BoxTitle>{topic.title}</BoxTitle>
                <div style={{ padding: '20px', textAlign: 'center' }}>carregando tópicos...</div>
            </WhiteBox>
        );
    }

    return (
        <WhiteBox>
            <BoxTitle>
                <div>{topic.title}</div>
                <div style={{ fontSize: '11px', color: '#666', fontWeight: 'normal', marginTop: '2px' }}>
                    {topic.community}
                </div>
            </BoxTitle>

            <div style={{ padding: '0' }}>
                {visibleReplies.map((reply, index) => (
                    <ReplyItem
                        key={index}
                        ref={index === visibleReplies.length - 1 ? lastElementRef : null}
                    >
                        <AuthorSidebar>
                            <AuthorImg
                                path={resolveOrkutImage('user_thumb_medium')} // Placeholder based on design
                                alt={reply.author}
                            // fallback logic handled inside FirebaseMedia if path fails
                            />
                            <AuthorName>{reply.author}</AuthorName>
                        </AuthorSidebar>
                        <ReplyContent>
                            <ReplyHeader>
                                <ReplyDate>{reply.date}</ReplyDate>
                            </ReplyHeader>
                            <ReplyBody dangerouslySetInnerHTML={{ __html: reply.content }} />
                        </ReplyContent>
                    </ReplyItem>
                ))}

                {visibleCount < allReplies.length && (
                    <div style={{ textAlign: 'center', padding: '20px', color: '#999', fontSize: '11px' }}>
                        pegando mais respostas...
                    </div>
                )}
            </div>
        </WhiteBox>
    );
};

export default TopicDetail;
