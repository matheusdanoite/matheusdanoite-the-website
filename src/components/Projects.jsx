import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'react95';
import DraggableWindow from './DraggableWindow';

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
    padding: 1rem;
`;

const ProjectImage = styled.img`
    width: 100%;
    max-width: 100%; /* Responsive image */
    height: auto;
    border: 2px solid ${({ theme }) => theme.borderDark};
    align-self: center;
`;

const Projects = ({ onNavigate }) => {
    const [activeProject, setActiveProject] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [dynamicHeight, setDynamicHeight] = useState(400); // Base height
    const windowRef = useRef(null);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to measure window height when activeProject changes
    React.useEffect(() => {
        if (activeProject && windowRef.current) {
            const updateHeight = () => {
                const height = windowRef.current.offsetHeight;
                setDynamicHeight(Math.max(400, height + 150)); // Buffer for top/bottom
            };

            // Initial measure
            updateHeight();

            // Watch for size changes (e.g. image loading)
            const resizeObserver = new ResizeObserver(updateHeight);
            resizeObserver.observe(windowRef.current);

            return () => resizeObserver.disconnect();
        } else {
            setDynamicHeight(400); // Reset to default minHeight
        }
    }, [activeProject]);

    React.useEffect(() => {
        if (activeProject && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeProject, isMobile]);

    const projects = [
        { id: 1, name: 'Hangul Hangover', icon: 'https://win98icons.alexmeub.com/icons/png/console_prompt-0.png' },
        { id: 2, name: 'Legado Digital', icon: 'https://win98icons.alexmeub.com/icons/png/executable-0.png' },
        { id: 3, name: 'Projeto 3.msi', icon: 'https://win98icons.alexmeub.com/icons/png/installer_file_gear-0.png' },
    ];

    const renderProjectContent = (id) => {
        switch (id) {
            case 1:
                return (
                    <ProjectContentWrapper>
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
                        <p>Arquivos preservados do passado. Estes são backups estáticos dos meus perfis no Orkut e Twitter.</p>
                        <p>Navegue como se estivesse anos atrás.</p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <Button onClick={() => onNavigate('orkut')} size="lg" style={{ fontWeight: 'bold' }}>
                                Acessar Orkut (2014)
                            </Button>
                            <Button onClick={() => onNavigate('twitter')} size="lg" style={{ fontWeight: 'bold' }}>
                                Acessar Twitter
                            </Button>
                            <Button onClick={() => onNavigate('instagram')} size="lg" style={{ fontWeight: 'bold' }}>
                                Acessar Instagram
                            </Button>
                        </div>
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
        <div style={{ position: 'relative', width: '100%', minHeight: `${dynamicHeight}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'min-height 0.3s ease' }}>
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
                        top: '40px',
                        left: 0,
                        width: '100vw',
                        height: 'calc(100vh - 40px)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        overflowY: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        paddingBottom: '150px'
                    }}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setActiveProject(null);
                        }}
                    >
                        <DraggableWindow
                            id={`project-${activeProject}`}
                            title={getProjectTitle(activeProject)}
                            onClose={() => setActiveProject(null)}
                            onFocus={() => { }}
                            isMobile={true}
                            style={{
                                width: '90%',
                                maxWidth: '600px',
                                marginTop: '20px',
                                marginBottom: '20px',
                                position: 'relative'
                            }}
                            windowStyle={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                                {renderProjectContent(activeProject)}
                            </div>
                        </DraggableWindow>
                    </div>
                ) : (
                    // Desktop: Draggable & Responsive
                    <DraggableWindow
                        id={`project-${activeProject}`}
                        title={getProjectTitle(activeProject)}
                        onClose={() => setActiveProject(null)}
                        onFocus={() => { }} // Single active project, no Z-index management needed yet
                        isMobile={false}
                        style={{
                            position: 'absolute',
                            zIndex: 1000,
                            top: '0px',
                            left: '15vw',
                            width: '100vw',
                            minWidth: '320px',
                            maxWidth: '1000px',
                        }}
                        windowStyle={{ width: '100%', maxWidth: '100%' }}
                    >
                        <div ref={windowRef} style={{ padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            {renderProjectContent(activeProject)}
                        </div>
                    </DraggableWindow>
                )
            )}
        </div>
    );
};

export default Projects;
