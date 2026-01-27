import React, { useState } from 'react';
import Navigation from './Navigation';
import AsciiArt from './AsciiArt';
import RandomPhrase from './RandomPhrase';
import Home from './Home';

const Desktop = () => {
    const [activeSection, setActiveSection] = useState('home');

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <Home />;
            case 'projects':
                return (
                    <div style={{ textAlign: 'center', color: 'var(--win-gray-dark)', marginTop: '2rem' }}>
                        <p>Seção de Projetos em construção...</p>
                    </div>
                );
            case 'resume':
                return (
                    <div style={{ textAlign: 'center', color: 'var(--win-gray-dark)', marginTop: '2rem' }}>
                        <p>Currículo em construção...</p>
                    </div>
                );
            case 'contact':
                return (
                    <div style={{ textAlign: 'center', color: 'var(--win-gray-dark)', marginTop: '2rem' }}>
                        <p>Formulário de Contato em construção...</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {/* Navigation Bar (Fixed Top) */}
            <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

            <main style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                paddingTop: '50px', // Compensate for fixed AppBar
                paddingBottom: '50px',
                gap: '10px'
            }}>
                {/* Header / Hero Area */}
                <AsciiArt />
                <RandomPhrase />

                {/* Main Content Area (Dynamic) */}
                <div style={{ marginTop: '20px' }}>
                    {renderContent()}
                </div>
            </main>
        </>
    );
};

export default Desktop;
