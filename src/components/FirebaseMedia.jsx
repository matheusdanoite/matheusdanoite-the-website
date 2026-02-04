import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStorageUrl } from '../utils/storageLoader';

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.3s;
`;

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.3s;
`;

const FirebaseMedia = ({ path, type = 'image', alt, className, controls, autoPlay, loop, muted, ...props }) => {
    const [src, setSrc] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let active = true;

        const loadsrc = async () => {
            setLoading(true);
            setError(false);
            try {
                const url = await getStorageUrl(path);
                if (active) {
                    if (url) {
                        setSrc(url);
                    } else {
                        setError(true);
                    }
                    // Image/Video onload will handle loading state
                }
            } catch (e) {
                console.error("Error loading media:", path, e);
                if (active) setError(true);
            }
        };

        if (path) {
            loadsrc();
        }

        return () => { active = false; };
    }, [path]);

    const handleLoad = () => setLoading(false);
    const handleError = () => {
        setLoading(false);
        setError(true);
    };

    if (!path) return <Placeholder className={className} />;

    if (error && !src) return <Placeholder className={className}>Erro</Placeholder>;

    return (
        <>
            {loading && <Placeholder className={className} />}
            {type === 'video' ? (
                <StyledVideo
                    src={src}
                    className={className}
                    $loaded={!loading}
                    onLoadedData={handleLoad}
                    onError={handleError}
                    controls={controls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline
                    {...props}
                />
            ) : (
                <StyledImg
                    src={src}
                    alt={alt || "Media"}
                    className={className}
                    $loaded={!loading}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            )}
        </>
    );
};

export default FirebaseMedia;
