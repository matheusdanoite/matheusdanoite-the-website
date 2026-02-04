import React, { forwardRef } from 'react';

const BioContent = forwardRef((props, ref) => {
    return (
        <div ref={ref} style={{ padding: '1rem', width: '100%' }}>
            <h3 style={{ marginTop: 0 }}>Sobre mim</h3>
            <p>
                [Escreva aqui sobre você...]
            </p>
            <br />
            <p>
                Olá! Sou Matheus José, um desenvolvedor apaixonado por criar experiências digitais únicas.
                Este portfólio é uma janela para o meu mundo, misturando nostalgia e tecnologia moderna.
            </p>
        </div>
    );
});

export default BioContent;
