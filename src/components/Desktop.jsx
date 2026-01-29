import React, { useState } from 'react';
import Navigation from './Navigation';
import AsciiArt from './AsciiArt';
import RandomPhrase from './RandomPhrase';
import Home from './Home';
import Redes from './Redes';
import Projects from './Projects';

const Desktop = () => {
    const [activeSection, setActiveSection] = useState('home');

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <Home />;
            case 'projects':
                return <Projects />;
            case 'resume':
                return (
                    <div style={{ textAlign: 'center', color: 'var(--win-gray-dark)', marginTop: '2rem' }}>
                        <p>Currículo em construção...</p>
                    </div>
                );
            case 'contact':
                return <Redes />;
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

                {/* Footer */}
                <footer style={{
                    textAlign: 'center',
                    padding: '2rem 0 1rem 0',
                    marginTop: 'auto',
                    color: 'blue', // Updated to blue as requested
                    fontSize: '0.85rem',
                    opacity: 0.7
                }}>
                    <p style={{ margin: 0 }}>Pensado por Matheus José da Silva</p>
                    <p style={{ margin: 0 }}>Guarapuava, 2026</p>
                </footer>
            </main>
        </>
    );
};

export default Desktop;
