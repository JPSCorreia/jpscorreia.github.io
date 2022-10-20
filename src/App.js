import Navbar from './components/Navbar'
import Home from "./components/Home";
import React from 'react'
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ParticleContainer from './components/ParticleContainer';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ProjectType from './components/ProjectType';
import ProjectType2 from './components/ProjectType2';
import TLDRedditLogo from "./assets/projects/tldreddit-full.png"
import EmporiumLogo from './assets/projects/emporium-full.png';
import { SiJest, SiReactrouter, SiRedux, SiReact, SiExpress, SiAuth0, SiNodedotjs, SiPostgresql } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { IoLogoReddit } from 'react-icons/io'

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
    <div className='flex flex-col' id='App'>
      <ParticleContainer particlesLoaded={particlesLoaded} />
      
      {(loaded && loadedTwo)? ( 
        <>
          <Navbar className="max-w-screen" />
          <div className='total-container'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/emporium"
                element={
                  <ProjectType
                    backgroundImageURL={EmporiumLogo}
                    navLinkToBack="/tldreddit"
                    navLinkToNext="/tldreddit"
                    AOSAnchor="#emporium"
                    projectId="emporium"
                    projectTitle="Emporium"
                    iconArray={[
                      {
                        icon: <SiReact color="#61dafb" size={24} />,
                        name: 'React'
                      },
                      {
                        icon: <SiRedux color="#764abc" size={24} />,
                        name: 'Redux'
                      },
                      {
                        icon: <SiNodedotjs color="#43853d" size={24} />,
                        name: 'Node.js'
                      },
                      {
                        icon: <SiExpress color="#ffffff" size={24} />,
                        name: 'Express.js'
                      },
                      {
                        icon: <SiPostgresql color="#31648d" size={24} />,
                        name: 'PostgreSQL'
                      },
                      {
                        icon: <SiAuth0 color="#ff541a" size={24} />,
                        name: 'Auth0'
                      }
                    ]
                    }
                    projectParagraphOne="Emporium is a PERN stack e-commerce Single Page Application. Users can register and login to the application, browse or search for products, place an order, make a purchase and finally leave a review for the products they bought. You can also add and edit different delivery addresses and switch between a light and dark color theme."
                    projectParagraphTwo="This application was built using React, bootstrapped with create-react-app and is hosted on Heroku. User registration and login are handled by Auth0, state management by Redux and routing by react-router. UI was built with ChakraUI using formik and yup for form management and validation. Backend API is handled by an Express.js server using various middleware libraries for server protection like helmet and hpp. Database is powered by PostgreSQL."
                    githubLink="https://github.com/JPSCorreia/emporium-shop-frontend"
                    exampleLink="https://emporium-shop.herokuapp.com/"
                  />
                }
              />
              <Route
                exact
                path="/tldreddit"
                element={
                  <ProjectType
                    backgroundImageURL={TLDRedditLogo}
                    navLinkToBack="/emporium"
                    navLinkToNext="/emporium"
                    AOSAnchor="#tldreddit"
                    projectId="tldreddit"
                    projectTitle="TLDReddit"
                    iconArray={[
                      {
                        icon: <SiReact color="#61dafb" size={24} />,
                        name: 'React'
                      },
                      {
                        icon: <SiRedux color="#764abc" size={24} />,
                        name: 'Redux'
                      },
                      {
                        icon: <SiReactrouter color="#ca031b" size={24} />,
                        name: 'React Router'
                      },
                      {
                        icon: <IoLogoReddit color="#ff4017" size={24} />,
                        name: 'Reddit API'
                      },
                      {
                        icon: <DiSass color="#c76594" size={24} />,
                        name: 'Sass'
                      },
                      {
                        icon: <SiJest color="#c03c14" size={24} />,
                        name: 'Jest'
                      }
                    ]
                    }
                    projectParagraphOne="TLDReddit is an alternative way to browse reddit as a Single Page Application. Users are able browse any subreddit they want, they can expand any thread and comment they want and preview all types of media without ever needing to reload the page. They can route to any subreddit and comment page by writting in the browser's address bar."
                    projectParagraphTwo="This application was built using React, bootstrapped with create-react-app and is hosted on Netlify. Routing was handled by react-router and state management by Redux. Data fetching was handled by Redux Toolkit asynchronous thunks API and accessing Reddit's data through their JSON API. Jest was used as the testing framework and the UI was built using Sass with no use of a component library."
                    githubLink="https://github.com/JPSCorreia/TLDReddit"
                    exampleLink="https://serene-sinoussi-2933f8.netlify.app/"
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div> */}
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