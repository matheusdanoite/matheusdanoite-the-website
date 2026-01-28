import React from 'react';
import { AppBar, Toolbar, Button } from 'react95';

const Navigation = ({ onNavigate, activeSection }) => {
    const links = [
        { id: 'projects', name: 'Projetos' },
        { id: 'resume', name: 'Currículo' },
        { id: 'contact', name: 'Contato' }
    ];

    return (
        <AppBar fixed={true} style={{ top: 0, zIndex: 999, height: '40px' }}>
            <Toolbar style={{ justifyContent: 'space-between', minHeight: '40px', padding: '0 8px', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                <Button
                    onClick={() => onNavigate('home')}
                    variant="menu"
                    size="sm"
                    active={activeSection === 'home'}
                    style={{ fontWeight: 'bold' }}
                >
                    Matheus Jose
                </Button>
                <div style={{ display: 'flex', gap: '4px' }}>
                    {links.map((link) => (
                        <Button
                            key={link.id}
                            onClick={() => onNavigate(link.id)}
                            active={activeSection === link.id}
                            variant="default"
                            size="sm"
                            style={{ fontWeight: activeSection === link.id ? 'bold' : 'normal' }}
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
