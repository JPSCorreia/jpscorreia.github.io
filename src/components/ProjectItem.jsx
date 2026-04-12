import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const cardProps = {
    variant: 'unstyled',
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    padding: '0.75rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0px 2px 8px 2px #ffffff',
    transition: 'box-shadow 0.2s ease-in',
    _hover: {
        boxShadow: '0px 0px 12px 8px #67E8F9',
    },
    sx: {
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(8,145,178,0.3), rgba(103,232,249,0.3), rgba(8,145,178,0.3))',
            opacity: 0,
            transition: 'opacity 0.2s ease-in',
            pointerEvents: 'none',
        },
        '&:hover::before': {
            opacity: 1,
        },
    },
};

const ProjectItem = (props) => {
    return (
        <div className="project-item min-w-[100%] mx-auto">
            {props.isNavlink ? (
                <NavLink to={props.navlink}>
                    <Button
                        {...cardProps}
                        minH={{ base: '70px', md: '120px' }}
                        overflow="hidden"
                        className="project-card-inner"
                    >
                        <img
                            className={props.imgClassName || "max-h-[50px] max-w-[250px] md:max-h-[100%] md:max-w-[100%]"}
                            style={{ position: 'relative', zIndex: 1 }}
                            src={props.backgroundImg}
                            alt="/"
                        />
                    </Button>
                </NavLink>
            ) : (
                <a href="https://github.com/JPSCorreia" target="_blank" rel="noreferrer">
                    <Button
                        {...cardProps}
                        py={{ base: '1rem', md: '2.5rem' }}
                        className="project-card-inner"
                    >
                        <img src={props.backgroundImg} alt="/" style={{ position: 'relative', zIndex: 1 }} />
                    </Button>
                </a>
            )}
        </div>
    );
};

export default ProjectItem;
