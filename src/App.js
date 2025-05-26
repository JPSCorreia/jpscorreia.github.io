import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ParticleContainer from './components/ParticleContainer';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ProjectType from './components/ProjectType';
import TLDRedditBackground from './assets/projects/tldreddit-full.png';
import EmporiumBackground from './assets/projects/emporium-full.png';
import LifeCoachBackground from './assets/projects/lifecoach-full.png';
import BioramaBackground from './assets/projects/biorama-full.png';
import {
    SiJest,
    SiReactrouter,
    SiRedux,
    SiReact,
    SiExpress,
    SiAuth0,
    SiNodedotjs,
    SiPostgresql,
    SiOpenai,
    SiAnthropic,
    SiLaravel,
    SiPhp,
    SiPython,
    SiFlask,
    SiSqlalchemy,
    SiMobx,
    SiInertia,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { DiSass } from 'react-icons/di';
import { IoLogoReddit } from 'react-icons/io';

function App() {
    const [loaded, setLoaded] = useState(false);
    const [loadedTwo, setLoadedTwo] = useState(false);
    const particlesLoaded = (container) => {
        setLoaded(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoadedTwo(true);
        }, 1000);
    }, []);

    function useScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    }
    useScrollToTop();

    return (
        <div className="flex flex-col" id="App">
            <ParticleContainer particlesLoaded={particlesLoaded} />

            {loaded && loadedTwo ? (
                <>
                    <Navbar className="max-w-screen" />
                    <div className="total-container">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route
                                exact
                                path="/emporium"
                                element={
                                    <ProjectType
                                        backgroundImageURL={EmporiumBackground}
                                        navLinkToBack="/lifecoach"
                                        navLinkToNext="/tldreddit"
                                        AOSAnchor="#emporium"
                                        projectId="emporium"
                                        projectTitle="Emporium"
                                        iconArray={[
                                            {
                                                icon: (
                                                    <SiReact
                                                        color="#61dafb"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'React.js',
                                            },
                                            {
                                                icon: (
                                                    <SiRedux
                                                        color="#764abc"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Redux',
                                            },
                                            {
                                                icon: (
                                                    <SiNodedotjs
                                                        color="#43853d"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Node.js',
                                            },
                                            {
                                                icon: (
                                                    <SiExpress
                                                        color="#ffffff"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Express.js',
                                            },
                                            {
                                                icon: (
                                                    <SiPostgresql
                                                        color="#31648d"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'PostgreSQL',
                                            },
                                            {
                                                icon: (
                                                    <SiAuth0
                                                        color="#ff541a"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Auth0',
                                            },
                                        ]}
                                        projectParagraphOne="Emporium is a PERN stack e-commerce Single Page Application. Users can register and login to the application, browse or search for products, place an order, make a purchase and finally leave a review for the products they bought. You can also add and edit different delivery addresses and switch between a light and dark color theme."
                                        projectParagraphTwo="This application was built using React, bootstrapped with create-react-app and is hosted on Vercel. User registration and login are handled by Auth0, state management by Redux and routing by react-router. UI was built with ChakraUI using formik and yup for form management and validation. Backend is handled by an Express.js server using middleware libraries for server protection like helmet and hpp. Database is powered by PostgreSQL."
                                        githubLink="https://github.com/JPSCorreia/emporium-shop-frontend"
                                        exampleLink="https://emporium-shop.vercel.app/"
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/tldreddit"
                                element={
                                    <ProjectType
                                        backgroundImageURL={TLDRedditBackground}
                                        navLinkToBack="/emporium"
                                        navLinkToNext="/biorama"
                                        AOSAnchor="#tldreddit"
                                        projectId="tldreddit"
                                        projectTitle="TLDReddit"
                                        iconArray={[
                                            {
                                                icon: (
                                                    <SiReact
                                                        color="#61dafb"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'React.js',
                                            },
                                            {
                                                icon: (
                                                    <SiRedux
                                                        color="#764abc"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Redux',
                                            },
                                            {
                                                icon: (
                                                    <SiReactrouter
                                                        color="#ca031b"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'React Router',
                                            },
                                            {
                                                icon: (
                                                    <IoLogoReddit
                                                        color="#ff4017"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Reddit API',
                                            },
                                            {
                                                icon: (
                                                    <DiSass
                                                        color="#c76594"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Sass',
                                            },
                                            {
                                                icon: (
                                                    <SiJest
                                                        color="#c03c14"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Jest',
                                            },
                                        ]}
                                        projectParagraphOne="TLDReddit is an alternative way to browse reddit as a Single Page Application. Users are able browse any subreddit they want, they can expand any thread and comment they want and preview all types of media without ever needing to reload the page. They can route to any subreddit and comment page by writting in the browser's address bar."
                                        projectParagraphTwo="This application was built using React, bootstrapped with create-react-app and is hosted on Netlify. Routing was handled by react-router and state management by Redux. Data fetching was handled by Redux Toolkit asynchronous thunks API and accessing Reddit's data through their JSON API. Jest was used as the testing framework and the UI was built using Sass with no use of a component library."
                                        githubLink="https://github.com/JPSCorreia/TLDReddit"
                                        exampleLink="https://serene-sinoussi-2933f8.netlify.app/"
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/biorama"
                                element={
                                    <ProjectType
                                        backgroundImageURL={BioramaBackground}
                                        navLinkToBack="/tldreddit"
                                        navLinkToNext="/lifecoach"
                                        AOSAnchor="#biorama"
                                        projectId="biorama"
                                        projectTitle="Biorama"
                                        iconArray={[
                                            {
                                                icon: (
                                                    <SiReact
                                                        color="#61dafb"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'React.js',
                                            },
                                            {
                                                icon: (
                                                    <SiMobx
                                                        color="#ff4017"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'MobX',
                                            },
                                            {
                                                icon: (
                                                    <SiLaravel
                                                        color="#f53400"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Laravel',
                                            },
                                            {
                                                icon: (
                                                    <SiPhp
                                                        color="#777bb3"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'PHP',
                                            },
                                            {
                                                icon: (
                                                    <SiInertia
                                                        color="#8365eb"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Inertia.js',
                                            },
                                            {
                                                icon: (
                                                    <GrMysql
                                                        color="#00758f"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'MySQL',
                                            },
                                        ]}
                                        projectParagraphOne="Biorama is a web-based platform that facilitates the promotion and sale of sustainable, locally sourced products, focusing on supporting small farmers and regional businesses in Portugal. Users can explore product listings, stores, vendors, search by category, make orders, manage their profiles, register as vendors and setup their own stores to sell their products."
                                        projectParagraphTwo="Boostrapped with Vite using a modern stack of React.js, Inertia.js, and Laravel. The interface was built using MaterialUI, ensuring a consistent design and modern user experience. Interactive map was built with Leaflet using data from OpenStreetMap, state management was handled by Mobx, form/schema validation using formik and yup, authentication via Laravel Breeze and database using MySQL."
                                        githubLink="https://github.com/JPSCorreia/Biorama"
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/lifecoach"
                                element={
                                    <ProjectType
                                        backgroundImageURL={LifeCoachBackground}
                                        navLinkToBack="/biorama"
                                        navLinkToNext="/emporium"
                                        AOSAnchor="#lifecoach"
                                        projectId="lifecoach"
                                        projectTitle="Life Coach"
                                        iconArray={[
                                            {
                                                icon: (
                                                    <SiPython
                                                        color="#3776ab"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Python',
                                            },
                                            {
                                                icon: (
                                                    <SiFlask
                                                        color="#ffffff"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Flask',
                                            },
                                            {
                                                icon: (
                                                    <SiSqlalchemy
                                                        color="#c92424"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'SQLAlchemy',
                                            },
                                            {
                                                icon: (
                                                    <SiReact
                                                        color="#61DAFB"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'React.js',
                                            },
                                            {
                                                icon: (
                                                    <SiOpenai
                                                        color="#ffffff"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'OpenAI',
                                            },
                                            {
                                                icon: (
                                                    <SiAnthropic
                                                        color="#ffffff"
                                                        size={24}
                                                    />
                                                ),
                                                name: 'Anthropic',
                                            },
                                        ]}
                                        projectParagraphOne="Life Coach is an AI-powered assistant that uses Large Language Model technology to interact with users in natural language and assist in organizing their personal and professional lives. It is designed to help with daily life tasks, goals, events, and also proactively engage with them based on their needs."
                                        projectParagraphTwo="Developed in Python using Flask with SQLAlchemy, the user can register and log in to the application and have a conversation with Life Coach. LifeCoach supports automated CRUD operations just by analyzing data models and descriptions, uses React.js as a client, a MSSQL Server for data storage and can use different LLM service providers such as OpenAI, Anthropic and Google."
                                    />
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default App;
