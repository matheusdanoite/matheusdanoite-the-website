import React, { useState, useEffect } from 'react';

const RandomPhrase = () => {
    // Database of phrases (to be populated)
    const phrases = [
        "Bem vindo à minha página pessoal.",
        "Design é a minha paixão.",
        "Construindo o futuro, um pixel de cada vez.",
        "Carregando ideias..."
    ];

    const [phrase, setPhrase] = useState(phrases[0]);

    useEffect(() => {
        // Logic to pick a random phrase can be enhanced here
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setPhrase(phrases[randomIndex]);
    }, []);

    return (
        <div style={{
            textAlign: 'center',
            fontFamily: 'var(--font-ui)',
            color: 'var(--win-blue)',
            marginTop: '1rem',
            fontStyle: 'italic',
            minHeight: '1.5em'
        }}>
            "{phrase}"
        </div>
    );
};

export default RandomPhrase;
