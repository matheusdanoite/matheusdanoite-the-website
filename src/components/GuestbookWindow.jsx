import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, TextField, WindowContent, Cutout, Tabs, Tab, TabBody } from 'react95';
import CanvasDraw from 'react-canvas-draw';
import { db, isFirebaseSetup } from '../firebase';
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';

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

const ToolsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const GuestbookWindow = () => {
    const [activeTab, setActiveTab] = useState(1); // Default to Mensagens (1)
    const [inputType, setInputType] = useState('text');

    // Drawing State
    const [brushColor, setBrushColor] = useState("#000000");
    const [brushRadius, setBrushRadius] = useState(2);

    // Form State
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Data State
    const [messages, setMessages] = useState([]);
    const canvasRef = useRef(null);

    // Fetch Messages
    useEffect(() => {
        if (!isFirebaseSetup || !db) return;

        const q = query(
            collection(db, 'guestbook'),
            orderBy('createdAt', 'desc'),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, []);

    const handleClearCanvas = () => {
        if (canvasRef.current) {
            canvasRef.current.clear();
        }
    };

    const handleSubmit = async () => {
        if (!name.trim()) {
            alert('Por favor, insira seu nome ou nick.');
            return;
        }

        if (!isFirebaseSetup) {
            alert('Erro: Banco de dados não configurado.');
            return;
        }

        setIsSubmitting(true);

        try {
            let content = message;
            let type = 'text';

            if (inputType === 'text') {
                if (!message.trim()) {
                    setIsSubmitting(false);
                    alert('Por favor, escreva uma mensagem.');
                    return;
                }
            } else if (inputType === 'draw') {
                if (canvasRef.current) {
                    content = canvasRef.current.getDataURL();
                    type = 'drawing';
                }
            }

            await addDoc(collection(db, 'guestbook'), {
                name: name.trim(),
                content: content,
                type: type,
                createdAt: serverTimestamp()
            });

            // Reset Form and switch to Read tab
            setName('');
            setMessage('');
            if (inputType === 'draw') handleClearCanvas();
            setActiveTab(1);

        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Erro ao enviar mensagem.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isFirebaseSetup) {
        return (
            <WindowContent>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>⚠️ Configuração do Firebase ausente.</p>
                </div>
            </WindowContent>
        );
    }

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tab value={0}>Assinar</Tab>
                <Tab value={1}>Mensagens</Tab>
            </Tabs>

            <TabBody style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 10 }}>
                {activeTab === 0 && (
                    <GuestbookWrapper>
                        {/* Compact Header: Name + Toggle Buttons */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem' }}>Nick:</label>
                                <TextField
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Seu nome..."
                                    style={{ width: '140px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <Button active={inputType === 'text'} onClick={() => setInputType('text')} size="sm">📝</Button>
                                <Button active={inputType === 'draw'} onClick={() => setInputType('draw')} size="sm">🎨</Button>
                            </div>
                        </div>

                        {inputType === 'text' ? (
                            <Cutout style={{ padding: '10px', background: 'white', flex: 1 }}>
                                <textarea
                                    style={{ width: '100%', height: '100%', border: 'none', resize: 'none', outline: 'none', fontFamily: 'ms_sans_serif', fontSize: '1rem' }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Deixe sua mensagem..."
                                />
                            </Cutout>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, overflow: 'hidden' }}>
                                <ToolsRow>
                                    <label>Cor:</label>
                                    <input
                                        type="color"
                                        value={brushColor}
                                        onChange={(e) => setBrushColor(e.target.value)}
                                        style={{ width: '30px', height: '30px', padding: 0, border: 'none', cursor: 'pointer' }}
                                    />
                                    <label style={{ marginLeft: '10px' }}>Pincel:</label>
                                    <Button size="sm" active={brushRadius === 2} onClick={() => setBrushRadius(2)}>P</Button>
                                    <Button size="sm" active={brushRadius === 5} onClick={() => setBrushRadius(5)}>M</Button>
                                    <Button size="sm" active={brushRadius === 10} onClick={() => setBrushRadius(10)}>G</Button>
                                </ToolsRow>

                                {/* Scaled Canvas Container */}
                                <div style={{
                                    width: '100%',
                                    height: '340px', // Visual restriction
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    overflow: 'hidden',
                                    background: '#efefef',
                                    border: '2px solid #8e8e8e',
                                }}>
                                    <div style={{ transform: 'scale(0.65)', transformOrigin: 'top center' }}>
                                        <CanvasDraw
                                            ref={canvasRef}
                                            brushColor={brushColor}
                                            brushRadius={brushRadius}
                                            lazyRadius={0}
                                            canvasWidth={500}
                                            canvasHeight={500}
                                            gridColor="rgba(0,0,0,0.1)"
                                            style={{ background: 'white' }}
                                        />
                                    </div>
                                </div>
                                <Button onClick={handleClearCanvas} size="sm" style={{ marginTop: '5px' }}>Limpar Tela</Button>
                            </div>
                        )}

                        <div style={{ textAlign: 'right', marginTop: 'auto', paddingTop: '10px' }}>
                            <Button onClick={handleSubmit} disabled={isSubmitting} primary>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </Button>
                        </div>
                    </GuestbookWrapper>
                )}

                {activeTab === 1 && (
                    <Cutout style={{ flex: 1, padding: '0', background: 'white' }}>
                        <MessageList>
                            {messages.length === 0 ? (
                                <p style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                                    Nenhuma mensagem ainda.
                                </p>
                            ) : (
                                messages.map((msg) => (
                                    <MessageItem key={msg.id}>
                                        <AuthorHeader>
                                            {msg.name}
                                            <Timestamp>
                                                {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleDateString() : 'Agora'}
                                            </Timestamp>
                                        </AuthorHeader>
                                        {msg.type === 'drawing' ? (
                                            <DrawingPreview src={msg.content} alt="Desenho" />
                                        ) : (
                                            <p style={{ margin: 0 }}>{msg.content}</p>
                                        )}
                                    </MessageItem>
                                ))
                            )}
                        </MessageList>
                    </Cutout>
                )}
            </TabBody>
        </div>
    );
};

export default GuestbookWindow;
