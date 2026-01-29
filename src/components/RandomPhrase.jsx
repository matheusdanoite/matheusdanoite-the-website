import React, { useState, useEffect } from 'react';

const RandomPhrase = () => {
    // Database of phrases (to be populated)
    const phrases = [
        "Ketchup Hemmer",
        "É isso aí",
        "Eu prefiro ser essa metamorfose ambulante",
        "¯\\_(ツ)_/¯",
        "Ouça Shinichi Osawa",
        "K-pop é top",
        "Gosto de longas caminhadas pela madrugada",
        "Selo SM de qualidade",
        "matheusdanet",
        "Aberto 24h",
        "Tenho um fã."

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
            {phrase}
        </div>
    );
};

export default RandomPhrase;
