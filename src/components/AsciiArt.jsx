import React from 'react';

const AsciiArt = () => {
    const matheus = `
  __  __       _   _                     
 |  \\/  | __ _| |_| |__   ___ _   _ ___  
 | |\\/| |/ _\` | __| '_ \\ / _ \\ | | / __| 
 | |  | | (_| | |_| | | |  __/ |_| \\__ \\ 
 |_|  |_|\\__,_|\\__|_| |_|\\___|\\__,_|___/ 
`;

    const jose = `
      _               _   
     | | ___  ___  __/_/  
  _  | |/ _ \\/ __|/ _ \\   
 | |_| | (_) \\__ \\  __/   
  \\___/ \\___/|___/\\___|   
`;

    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '3vw', // Responsive gap between names
            padding: '0 10px'
        }}>
            <pre style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--nick-green)',
                textShadow: '2px 2px 0px var(--win-black)',
                fontWeight: 'bold',
                fontSize: 'clamp(8px, 2vw, 16px)',
                lineHeight: '1.2',
                margin: '0',
                whiteSpace: 'pre'
            }}>
                {matheus}
            </pre>
            <pre style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--nick-green)',
                textShadow: '2px 2px 0px var(--win-black)',
                fontWeight: 'bold',
                fontSize: 'clamp(8px, 2vw, 16px)',
                lineHeight: '1.2',
                margin: '0',
                whiteSpace: 'pre'
            }}>
                {jose}
            </pre>
        </div>
    );
};

export default AsciiArt;
