import React, { useState, useRef } from 'react';
import Profile3D from './Profile3D';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; // Keeping column for initial mobile-friendly layout
  gap: 2rem;
  width: 100%;
  max-width: 800px; // Constraint to keep things centered initially
  margin: 0 auto;
  align-items: center;
  position: relative; // Context for absolute if needed, but we rely on transforms
`;

const DraggableWindow = ({ id, title, children, onClose, onFocus, style, windowStyle, startPosition }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".window-header"
            onMouseDown={() => onFocus(id)}
            defaultPosition={startPosition || { x: 0, y: 0 }}
        >
            <div ref={nodeRef} style={{ ...style, zIndex: style.zIndex, position: 'relative' }}>
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
    const [windows, setWindows] = useState({
        model: {
            id: 'model',
            title: 'viewer_3d.exe',
            isOpen: true,
            zIndex: 1,
            content: <Profile3D />
        },
        about: {
            id: 'about',
            title: 'sobre_mim.txt',
            isOpen: true,
            zIndex: 0,
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
            )
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
            {/* 3D Model Window */}
            {windows.model.isOpen && (
                <DraggableWindow
                    id="model"
                    title={windows.model.title}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                    style={{ zIndex: windows.model.zIndex, marginBottom: '20px' }}
                    windowStyle={{ width: '100%', maxWidth: '500px' }} // Slightly wider for 3D
                >
                    {windows.model.content}
                </DraggableWindow>
            )}

            {/* Bio Window */}
            {windows.about.isOpen && (
                <DraggableWindow
                    id="about"
                    title={windows.about.title}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                    style={{ zIndex: windows.about.zIndex }}
                >
                    {windows.about.content}
                </DraggableWindow>
            )}

            {!windows.model.isOpen && !windows.about.isOpen && (
                <div style={{ textAlign: 'center', marginTop: '20px', color: 'gray' }}>
                    <p>Todas as janelas foram fechadas.</p>
                    <Button onClick={() => window.location.reload()}>Reiniciar Sistema</Button>
                </div>
            )}
        </Wrapper>
    );
};

export default Home;
