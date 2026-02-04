import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, TextField, Select } from 'react95';
import DrawingCanvas from './DrawingCanvas';
import { db, isFirebaseSetup } from '../firebase';
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { fontMappings, transformText, normalizeText } from '../utils/fancyFonts';

const GuestbookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  
  /* Custom Scrollbar for Webkit */
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #dfdfdf;
  }
  &::-webkit-scrollbar-thumb {
    background: #8e8e8e;
    border: 2px solid #dfdfdf;
  }
`;

const MessageItem = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  background: #fff;
  border: 1px dotted #8e8e8e;
`;

const AuthorHeader = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: #000080; /* Win Regular Blue */
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

const Timestamp = styled.span`
  color: #8e8e8e;
  font-size: 0.75rem;
  font-weight: normal;
`;

const DrawingPreview = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #000;
  background: white;
  margin-top: 5px;
`;



const GuestbookWindow = ({ onAddMessage }) => {
    const [activeTab, setActiveTab] = useState(1); // Default to Mensagens (1)
    const [inputType, setInputType] = useState('text');
    const [selectedFont, setSelectedFont] = useState('default');



    // Form State
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const canvasRef = useRef(null);

    const handleClearCanvas = () => {
        if (canvasRef.current) {
            canvasRef.current.clear();
        }
    };

    const handleMessageChange = (e) => {
        // Normalize whatever is typed so we store the "raw" text in state
        const rawText = normalizeText(e.target.value);

        // Enforce 300 char limit (check raw length or fancy length? User said 300 chars, usually means codepoints)
        // Since we are using fancy fonts, rawText should be the source of truth for length.
        if (rawText.length <= 300) {
            setMessage(rawText);
        }
    };

    const handleFontChange = (value) => {
        setSelectedFont(value);
    };

    const handleSubmit = async () => {
        if (!name.trim()) {
            alert('Por favor, insira seu nome ou nick.');
            return;
        }

        let content = '';
        let type = 'text';

        if (inputType === 'text') {
            content = transformText(message, selectedFont);

            if (!content || !content.trim()) {
                alert('Por favor, escreva uma mensagem.');
                return;
            }
        } else if (inputType === 'draw') {
            if (canvasRef.current) {
                content = canvasRef.current.getDataURL();
                type = 'drawing';
            }
        }

        if (!isFirebaseSetup) {
            // Demo Mode: Add locally without alert
            const newMsg = {
                id: Date.now().toString(),
                name: name,
                content: content,
                type: type,
                font: selectedFont,
                createdAt: { seconds: Date.now() / 1000 }
            };

            setTimeout(() => {
                if (onAddMessage) onAddMessage(newMsg);

                setName('');
                setMessage('');
                if (inputType === 'draw') handleClearCanvas();
                setActiveTab(1);
                setIsSubmitting(false);
            }, 500);
            return;
        }

        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'guestbook'), {
                name: name.trim(),
                content: content,
                type: type,
                font: selectedFont,
                createdAt: serverTimestamp()
            });

            // Reset Form and switch to Read tab
            setName('');
            setMessage('');
            if (inputType === 'draw') handleClearCanvas();
            setActiveTab(1);

        } catch (error) {
            console.error("Error adding document: ", error);
            // Silent error or UI feedback preferred over alert
        } finally {
            setIsSubmitting(false);
        }
    };

    /* 
    // UNCOMMENT FOR PRODUCTION: Block UI if no Firebase
    if (!isFirebaseSetup) {
        return (
            <WindowContent>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>⚠️ Configuração do Firebase ausente.</p>
                </div>
            </WindowContent>
        );
    }
    */

    return (
        <GuestbookWrapper style={{ height: '100%', padding: '2px' }}>
            {/* Name Input - Full Width */}
            <div style={{ marginBottom: '5px' }}>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome..."
                    style={{ width: '100%' }}
                />
            </div>

            {inputType === 'text' ? (
                <>
                    {/* Formatting Toolbar - Wacky Fonts Only */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                        <Select
                            width={'100%'}
                            options={[
                                { value: 'default', label: 'Comic Sans' },
                                ...fontMappings.map(f => ({ value: f.name, label: f.name }))
                            ]}
                            onChange={(value) => handleFontChange(value.value)}
                            value={selectedFont}
                            placeholder="Escolha um estilo..."
                            menuMaxHeight={150}
                            style={{
                                fontWeight: 'light',
                                fontFamily: "'W95FA', 'ms_sans_serif', sans-serif",
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale',
                            }}
                        />
                    </div>

                    <TextField
                        multiline
                        rows={6}
                        value={transformText(message, selectedFont)}
                        onChange={handleMessageChange}
                        placeholder="Escreva sua mensagem..."
                        style={{
                            width: '100%',
                            fontFamily: selectedFont === 'default' ? "'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive" : "'W95FA', 'ms_sans_serif', sans-serif",
                            fontSize: '14px',
                            WebkitFontSmoothing: selectedFont === 'default' ? 'auto' : 'none',
                            MozOsxFontSmoothing: selectedFont === 'default' ? 'auto' : 'grayscale',
                            fontSmooth: selectedFont === 'default' ? 'auto' : 'never',
                            textRendering: selectedFont === 'default' ? 'auto' : 'aliased'
                        }}
                    />
                    <div style={{
                        marginTop: '2px',
                        fontSize: '0.8rem',
                        color: 'black',
                        textAlign: 'right'
                    }}>
                        {message.length}/300
                    </div>
                </>
            ) : (
                <DrawingCanvas ref={canvasRef} />
            )}

            <div style={{ flex: 1 }}></div>

            {/* Bottom Actions: Mode Toggles (Left) + Submit (Right) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px' }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <Button active={inputType === 'text'} onClick={() => setInputType('text')}>Escrita</Button>
                    <Button active={inputType === 'draw'} onClick={() => setInputType('draw')}>Desenho</Button>
                </div>
                <Button onClick={handleSubmit} disabled={isSubmitting} primary={!isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
            </div>
        </GuestbookWrapper>
    );
};

export default GuestbookWindow;
