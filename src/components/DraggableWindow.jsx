import React, { useRef } from 'react';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import Draggable from 'react-draggable';

const DraggableWindow = ({ id, title, children, onClose, onFocus, onDrag, onStop, position, style, windowStyle, defaultPosition, isMobile }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".window-header"
            onMouseDown={() => onFocus(id)}
            defaultPosition={defaultPosition}
            position={position}
            onDrag={onDrag}
            onStop={onStop}
            disabled={isMobile}
        >
            <div ref={nodeRef} style={{ ...(style || {}), zIndex: style?.zIndex }}>
                <Window style={{
                    width: '100%',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    ...windowStyle
                }} className="window">
                    <WindowHeader className="window-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'grab', flexShrink: 0 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {title}
                        </span>
                        <Button onClick={() => onClose(id)} size='sm' style={{ width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent style={{ padding: 0, flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {children}
                    </WindowContent>
                </Window>
            </div>
        </Draggable>
    );
};

export default DraggableWindow;
