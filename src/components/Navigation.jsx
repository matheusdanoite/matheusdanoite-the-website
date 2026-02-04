import React from 'react';
import { AppBar, Toolbar, Button } from 'react95';

const Navigation = ({ onNavigate, activeSection }) => {
    const links = [
        { id: 'projects', name: 'Projetos' },
        { id: 'resume', name: 'Escritos' },
        { id: 'contact', name: 'Redes' }
    ];

    return (
        <AppBar style={{ position: 'fixed', top: 0, zIndex: 2001, height: '40px' }}>
            <Toolbar style={{ justifyContent: 'space-between', height: '36px', padding: '0 8px', width: '100%', maxWidth: '950px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                    <Button
                        onClick={() => onNavigate('home')}
                        active={activeSection === 'home'}
                        size="sm"
                        style={{
                            fontWeight: activeSection === 'home' ? 'bold' : 'normal',
                            paddingTop: '2px',
                            paddingBottom: '2px'
                        }}
                    >
                        Matheus José
                    </Button>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                    {links.map((link) => (
                        <Button
                            key={link.id}
                            onClick={() => onNavigate(link.id)}
                            active={activeSection === link.id}
                            size="sm"
                            style={{
                                fontWeight: activeSection === link.id ? 'bold' : 'normal',
                                paddingTop: '2px',
                                paddingBottom: '2px'
                            }}
                        >
                            {link.name}
                        </Button>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
