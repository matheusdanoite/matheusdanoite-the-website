import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Hourglass } from 'react95';

const TrackList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const TrackItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between; // Push image left, text right
    padding: 8px;
    border-bottom: 2px solid transparent; // spacer
    
    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.canvasTextInvert};
    }
`;

const CoverImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border: 2px solid ${({ theme }) => theme.borderDark};
`;

const TrackInfo = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-end; // Align text to the right
    text-align: right;
`;

const TrackName = styled.span`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%; // Ensure ellipsis works if needed, though right-align might fight with this. Flex-end usually enough.
`;

const ArtistName = styled.span`
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

const MusicWindow = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Defines the API URL. In production (GitHub Pages), this MUST be the full URL of your Netlify site.
        // Example: https://meu-portfolio.netlify.app/.netlify/functions/lastfm
        const API_BASE = import.meta.env.VITE_NETLIFY_URL || '';
        const FUNCTION_URL = `${API_BASE}/.netlify/functions/lastfm`;

        fetch(FUNCTION_URL)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setTracks(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}><Hourglass size={32} /></div>;

    if (error) return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Erro ao carregar músicas.</p>
            <p style={{ fontSize: '0.8em' }}>(Verifique as chaves de API no Netlify)</p>
        </div>
    );

    const displayedTracks = tracks.slice(0, 5);

    return (
        <div style={{ height: 'auto', paddingBottom: '10px', background: 'transparent' }}>
            <TrackList>
                {displayedTracks.map((track, index) => (
                    <TrackItem key={index}>
                        {track.image && <CoverImage src={track.image} alt="Capa" />}
                        <TrackInfo>
                            <TrackName>
                                {track.name}
                            </TrackName>
                            <ArtistName>
                                {track.artist}
                            </ArtistName>
                        </TrackInfo>
                    </TrackItem>
                ))}
            </TrackList>
        </div>
    );
};

export default MusicWindow;
