import React from 'react';
import styled from 'styled-components';
import { Button } from 'react95';
import DraggableWindow from './DraggableWindow';

const MsgWindowContent = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: ${({ theme }) => theme.material}; /* System Gray */
    font-size: 0.9rem;
`;

const VoteContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
`;

const MessageWindow = ({ msg, onClose, onFocus, isMobile, index, totalMessages, onVote }) => {
    return (
        <DraggableWindow
            id={msg.id}
            title={msg.name}
            onClose={onClose}
            onFocus={() => { }} // Messages don't need complex focus logic for now or it's handled by parent
            isMobile={isMobile}
            style={{
                zIndex: 10 + (totalMessages - index),
                position: 'relative', // Flow layout
                marginBottom: '20px'
            }}
            windowStyle={{ width: '320px', maxWidth: '320px', height: 'auto' }}
        >
            <MsgWindowContent>
                {msg.type === 'drawing' ? (
                    <div style={{ background: 'white', border: '1px solid #8e8e8e', padding: '5px' }}>
                        <img src={msg.content} alt="Drawing" style={{ width: '100%', display: 'block' }} />
                    </div>
                ) : (
                    <div
                        style={{
                            margin: 0,
                            fontSize: '15px',
                            lineHeight: '1.4',
                            wordBreak: 'break-word',
                            fontFamily: (!msg.font || msg.font === 'default') ? "'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive" : "'W95FA', 'ms_sans_serif', sans-serif",
                            WebkitFontSmoothing: (!msg.font || msg.font === 'default') ? 'auto' : 'none',
                            MozOsxFontSmoothing: (!msg.font || msg.font === 'default') ? 'auto' : 'grayscale',
                            fontSmooth: (!msg.font || msg.font === 'default') ? 'auto' : 'never',
                            textRendering: (!msg.font || msg.font === 'default') ? 'auto' : 'aliased'
                        }}
                        dangerouslySetInnerHTML={{ __html: msg.content }}
                    />
                )}

                <VoteContainer>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button size="sm" onClick={() => onVote(msg.id, 'likes')}>
                            Joinha
                        </Button>
                        <span style={{ fontSize: '0.8rem', marginTop: '2px' }}>{msg.likes || 0}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button size="sm" onClick={() => onVote(msg.id, 'dislikes')}>
                            Paia
                        </Button>
                        <span style={{ fontSize: '0.8rem', marginTop: '2px' }}>{msg.dislikes || 0}</span>
                    </div>
                </VoteContainer>
            </MsgWindowContent>
        </DraggableWindow>
    );
};

export default MessageWindow;
