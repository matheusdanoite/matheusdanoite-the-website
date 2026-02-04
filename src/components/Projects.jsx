import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import Draggable from 'react-draggable';

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 20px;
`;

const ProjectIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border: 1px solid transparent;

    &:hover {
        border: 1px dotted ${({ theme }) => theme.borderDark};
        background-color: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.canvasTextInvert};
        
        img {
            filter: none;
        }
    }
`;

const IconImage = styled.img`
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    image-rendering: pixelated;
`;

const ProjectLabel = styled.span`
    font-size: 1rem;
    line-height: 1.2;
    word-break: break-word;
`;

const ProjectContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const ProjectImage = styled.img`
    width: 100%;
    max-width: 100%; /* Responsive image */
    height: auto;
    border: 2px solid ${({ theme }) => theme.borderDark};
    align-self: center;
`;

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const nodeRef = useRef(null);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        { id: 1, name: 'Hangul Hangover', icon: 'https://win98icons.alexmeub.com/icons/png/console_prompt-0.png' },
        { id: 2, name: 'Projeto 2.bat', icon: 'https://win98icons.alexmeub.com/icons/png/executable-0.png' },
        { id: 3, name: 'Projeto 3.msi', icon: 'https://win98icons.alexmeub.com/icons/png/installer_file_gear-0.png' },
    ];

    const renderProjectContent = (id) => {
        switch (id) {
            case 1:
                return (
                    <ProjectContentWrapper style={{ maxHeight: isMobile ? 'calc(90vh - 100px)' : '60vh', overflowY: 'auto', paddingRight: '10px' }}>
                        <p style={{ fontWeight: 'bold' }}>Um estudo sobre tipografia e café.</p>
                        <ProjectImage src="https://placehold.co/600x400/png?text=Hangul+Foto+1" alt="Hangul Preview" />
                        <p>
                            Hangul Hangover é um projeto que explora a intersecção entre a estética do alfabeto coreano e a cultura do café noturno.
                            Desenvolvido com foco em legibilidade e atmosfera.
                        </p>
                        <ProjectImage src="https://placehold.co/600x400/png?text=Hangul+Foto+2" alt="Hangul Preview 2" />
                        <p>
                            Mais detalhes sobre o processo criativo, ferramentas utilizadas e o resultado final.
                            A tipografia foi desenhada para funcionar bem em ambientes com pouca luz, lembrando displays CRT antigos.
                        </p>
                    </ProjectContentWrapper>
                );
            case 2:
                // Placeholder for Project 2
                return (
                    <ProjectContentWrapper>
                        <p>Detalhes do Projeto 2 virão em breve.</p>
                    </ProjectContentWrapper>
                );
            case 3:
                // Placeholder for Project 3
                return (
                    <ProjectContentWrapper>
                        <p>Detalhes do Projeto 3 virão em breve.</p>
                    </ProjectContentWrapper>
                );
            default:
                return <p>Conteúdo em desenvolvimento...</p>;
        }
    };

    const getProjectTitle = (id) => {
        const proj = projects.find(p => p.id === id);
        return proj ? proj.name : 'Projeto';
    };

    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Icons Grid */}
            <GridContainer>
                {projects.map((project) => (
                    <ProjectIcon key={project.id} onClick={() => setActiveProject(project.id)}>
                        <IconImage src={project.icon} alt={project.name} />
                        <ProjectLabel>{project.name}</ProjectLabel>
                    </ProjectIcon>
                ))}
            </GridContainer>

            {/* Draggable Window (Overlay) */}
            {activeProject && (
                isMobile ? (
                    // Mobile: Fixed Overlay BELOW Nav Bar
                    <div style={{
                        position: 'fixed',
                        top: '50px', // Exact height of Navigation Bar
                        left: 0,
                        width: '100vw',
                        height: 'calc(100vh - 50px)', // Fill remaining height
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'flex-start', // Start from top to respect margin
                        justifyContent: 'center',
                        paddingTop: '20px', // Extra margin from valid area
                        pointerEvents: 'auto'
                    }}>
                        <Window style={{ width: '90%', maxWidth: '600px', maxHeight: '90%', display: 'flex', flexDirection: 'column' }} className="window">
                            <WindowHeader className="window-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {getProjectTitle(activeProject)}
                                </span>
                                <Button onClick={() => setActiveProject(null)} size='sm' square>
                                    <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                                </Button>
                            </WindowHeader>
                            <WindowContent style={{ overflowY: 'auto' }}>
                                {renderProjectContent(activeProject)}
                            </WindowContent>
                        </Window>
                    </div>
                ) : (
                    // Desktop: Draggable & Responsive
                    <Draggable
                        nodeRef={nodeRef}
                        handle=".window-header"
                        defaultPosition={{ x: 0, y: 0 }}
                    >
                        <div
                            ref={nodeRef}
                            style={{
                                position: 'absolute',
                                zIndex: 1000,
                                top: '50px', // Push down slightly to clear nav visually if not dragged
                                left: 0,
                                right: 0, // left+right+margin:auto centers absolute elements
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '60vw',
                                minWidth: '320px',
                                maxWidth: '800px',
                            }}
                        >
                            <Window style={{ width: '100%' }} className="window">
                                <WindowHeader className="window-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'grab' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {getProjectTitle(activeProject)}
                                    </span>
                                    <Button onClick={() => setActiveProject(null)} size='sm' square>
                                        <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                                    </Button>
                                </WindowHeader>
                                <WindowContent>
                                    {renderProjectContent(activeProject)}
                                </WindowContent>
                            </Window>
                        </div>
                    </Draggable>
                )
            )}
        </div>
    );
};

export default Projects;
