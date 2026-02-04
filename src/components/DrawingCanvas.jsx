import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import { Button } from 'react95';
import CanvasDraw from 'react-canvas-draw';

const ToolsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const DrawingCanvas = forwardRef((props, ref) => {
    const [brushColor, setBrushColor] = useState("#000000");
    const [brushRadius, setBrushRadius] = useState(2);

    const handleClear = () => {
        if (ref && ref.current) {
            ref.current.clear();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, width: '100%' }}>
            <ToolsRow>
                <label>Cor:</label>
                <div style={{ position: 'relative', width: '35px', height: '30px' }}>
                    <Button
                        style={{ width: '100%', height: '100%', padding: '4px' }}
                    >
                        <div style={{ width: '100%', height: '100%', background: brushColor, border: '1px solid #8e8e8e' }}></div>
                    </Button>
                    <input
                        type="color"
                        value={brushColor}
                        onChange={(e) => {
                            setBrushColor(e.target.value);
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <Button
                    size="sm"
                    onClick={handleClear}
                    title="Explodir (Limpar Tudo)"
                    style={{ minWidth: '35px' }}
                >
                    💣
                </Button>
                <div style={{ width: '1px', height: '20px', background: '#ccc', margin: '0 5px' }}></div>
                <label>Pincel:</label>
                <Button size="sm" active={brushRadius === 2 ? 'true' : undefined} onClick={() => setBrushRadius(2)}>P</Button>
                <Button size="sm" active={brushRadius === 5 ? 'true' : undefined} onClick={() => setBrushRadius(5)}>M</Button>
                <Button size="sm" active={brushRadius === 10 ? 'true' : undefined} onClick={() => setBrushRadius(10)}>G</Button>
            </ToolsRow>

            {/* Scaled Canvas Container */}
            <div style={{
                width: '304px', // 300px canvas + 2px border * 2
                height: '304px', // 300px canvas + 2px border * 2
                margin: '0 auto',
                border: '2px solid #8e8e8e',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0 // Prevent shrinking in flex container
            }}>
                <CanvasDraw
                    ref={ref}
                    brushColor={brushColor}
                    brushRadius={brushRadius}
                    lazyRadius={0}
                    canvasWidth={300}
                    canvasHeight={300}
                    hideGrid={true}
                    style={{ background: 'white', width: '300px', height: '300px' }}
                />
            </div>
        </div>
    );
});

export default DrawingCanvas;
