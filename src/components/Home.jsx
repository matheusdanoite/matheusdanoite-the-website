import React, { useState, useRef, useEffect } from 'react';
import Profile3D from './Profile3D';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import GuestbookWindow from './GuestbookWindow';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  // Mobile Layout (Default)
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 50px;

  // Desktop Layout
  @media (min-width: 769px) {
    display: block; // Allow absolute positioning children relative to this
    min-height: 150vh; // Reduced to fit tighter stack
    padding-top: 20px;
  }
`;
// ... (DraggableWindow component remains same) ...

// ... (Inside Home return) ...


const DraggableWindow = ({ id, title, children, onClose, onFocus, style, windowStyle, defaultPosition, isMobile }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".window-header"
            onMouseDown={() => onFocus(id)}
            defaultPosition={defaultPosition}
            disabled={isMobile}
        >
            <div ref={nodeRef} style={{ ...style, zIndex: style.zIndex }}>
                <Window style={{ width: '100%', maxWidth: '600px', ...windowStyle }} className="window">
                    <WindowHeader className="window-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'grab' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {title}
                        </span>
                        <Button onClick={() => onClose(id)} size='sm' square>
                            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent style={{ padding: 0 }}>
                        {children}
                    </WindowContent>
                </Window>
            </div>
        </Draggable>
    );
};

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [windows, setWindows] = useState({
        about: {
            id: 'about',
            title: 'bio',
            isOpen: true,
            zIndex: 1, // Starts on top? Or user wants specific order? Let's keep 1
            content: (
                <div style={{ padding: '1rem' }}>
                    <h3 style={{ marginTop: 0 }}>Sobre mim</h3>
                    <p>
                        [Escreva aqui sobre você...]
                    </p>
                    <br />
                    <p>
                        Olá! Sou Matheus José, um desenvolvedor apaixonado por criar experiências digitais únicas.
                        Este portfólio é uma janela para o meu mundo, misturando nostalgia e tecnologia moderna.
                    </p>
                </div>
            ),
            desktopPosition: { top: '20px', left: '50%' } // Centered
        },
        model: {
            id: 'model',
            title: 'eu',
            isOpen: true,
            zIndex: 0,
            content: <Profile3D />,
            desktopPosition: { top: '350px', left: '50%' } // Below Bio
        },
        guestbook: {
            id: 'guestbook',
            title: 'depoimentos',
            isOpen: true,
            zIndex: 0,
            content: <GuestbookWindow />,
            desktopPosition: { top: '900px', left: '50%' } // Below Model
        }
    });

    const closeWindow = (id) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false }
        }));
    };

    const focusWindow = (id) => {
        setWindows(prev => {
            const newWindows = { ...prev };
            const maxZ = Math.max(...Object.values(newWindows).map(w => w.zIndex)) + 1;
            newWindows[id] = { ...newWindows[id], zIndex: maxZ };
            return newWindows;
        });
    };

    return (
        <Wrapper>
            {/* Bio Window (Top) */}
            {windows.about.isOpen && (
                <DraggableWindow
                    id="about"
                    title={windows.about.title}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                    isMobile={isMobile}
                    style={{
                        zIndex: windows.about.zIndex,
                        position: isMobile ? 'relative' : 'absolute',
                        left: 0, right: 0, margin: '0 auto', width: 'fit-content',
                        top: isMobile ? 0 : '20px',
                    }}
                >
                    {windows.about.content}
                </DraggableWindow>
            )}

            {/* 3D Model Window (Middle) */}
            {windows.model.isOpen && (
                <DraggableWindow
                    id="model"
                    title={windows.model.title}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                    isMobile={isMobile}
                    style={{
                        zIndex: windows.model.zIndex,
                        position: isMobile ? 'relative' : 'absolute',
                        left: 0, right: 0, margin: '0 auto', width: 'fit-content',
                        top: isMobile ? 0 : '290px', // Adjusted for visual balance
                    }}
                    windowStyle={{ width: '100%', maxWidth: '500px' }}
                >
                    {windows.model.content}
                </DraggableWindow>
            )}

            {/* Guestbook Window (Bottom) */}
            {windows.guestbook.isOpen && (
                <DraggableWindow
                    id="guestbook"
                    title={windows.guestbook.title}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                    isMobile={isMobile}
                    style={{
                        zIndex: windows.guestbook.zIndex,
                        position: isMobile ? 'relative' : 'absolute',
                        left: 0, right: 0, margin: '0 auto', width: 'fit-content',
                        top: isMobile ? 0 : '780px', // Adjusted to match top gap
                    }}
                    windowStyle={{ width: '100%', maxWidth: '600px', height: '620px' }}
                >
                    {windows.guestbook.content}
                </DraggableWindow>
            )}

            {!windows.model.isOpen && !windows.about.isOpen && !windows.guestbook.isOpen && (
                <div style={{ textAlign: 'center', marginTop: '100px', color: 'gray', width: '100%' }}>
                    <p>Todas as janelas foram fechadas.</p>
                    <Button onClick={() => window.location.reload()}>Reiniciar Sistema</Button>
                </div>
            )}
        </Wrapper>
    );
};

export default Home;
