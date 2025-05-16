import Main from './Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import {useEffect, useLayoutEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
    AOS.init({
      easing: 'ease-in',
      duration: 0,
      mirror: true,
    });
  }, []);
  
  useLayoutEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView();
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);
  
  return (
    <main className="maincontainer flex flex-col max-w-screen">
      <Main />
      <div id="after-main" className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <About />
      <div id="after-about" className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Skills />
      <div id="after-skills" className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Projects />
      <div id="after-projects" className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Contact />
    </main>
  );
}

export default Home