import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Hourglass, Anchor } from 'react95';

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
        // Use explicit URL resolution to avoid Safari pattern matching errors
        const apiUrl = new URL('/api/lastfm', window.location.origin).href;

        fetch(apiUrl)
            .then(async res => {
                const contentType = res.headers.get("content-type");
                const isJson = contentType && contentType.includes("application/json");

                if (!res.ok) {
                    let errMsg = `Erro ${res.status}`;
                    if (isJson) {
                        const data = await res.json();
                        if (data.error) errMsg = data.error;
                    } else {
                        const text = await res.text();
                        errMsg += `: ${text.slice(0, 50)}`;
                    }
                    throw new Error(errMsg);
                }

                if (!isJson) {
                    const text = await res.text();
                    throw new Error(`Esperado JSON, recebido: ${text.slice(0, 50)}`);
                }

                return res.json();
            })
            .then(data => {
                setTracks(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Last.fm API failed Details:", {
                    name: err.name,
                    message: err.message
                });
                setError(`${err.name}: ${err.message}`);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}><Hourglass size={32} /></div>;

    if (error) return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Erro ao carregar músicas.</p>
            <p style={{ fontSize: '0.8em', color: '#ff4444', marginTop: '5px' }}>{error}</p>
            <p style={{ fontSize: '0.8em' }}>(Verifique as chaves de API no Cloudflare)</p>
        </div>
    );

    const displayedTracks = tracks.slice(0, 5);

    return (
        <div style={{ paddingBottom: '10px', background: 'transparent' }}>
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
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem' }}>
                <Anchor href="https://www.last.fm/user/matheusdanoite" target="_blank" style={{ textDecoration: 'none' }}>
                    matheusdanoite no Last.fm
                </Anchor>
            </div>
        </div>
    );
};

export default MusicWindow;
