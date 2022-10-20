import React from 'react'
import ProjectItem from './ProjectItem'
import tldreddit from '../assets/projects/TLDReddit-logo3.png'
import emporium from '../assets/projects/emporium-logo4.png'
import github from '../assets/projects/github-projects-logo.png';
import { NavLink } from 'react-router-dom';
import Scroller from './Scroller';

const Projects = () => {

  return (
    <div
      id="projects"
      className="w-[90%] m-auto h-screen items-center flex flex-col"
    >
      <div
        className="max-w-[1240px] w-full h-full mx-auto flex flex-col items-center md:justify-center"
        id="projects-container"
      >
        <div className="flex flex-col w-full">
          <p
            className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top projects-top-text"
            data-aos="fade-right"
            data-aos-anchor="#projects"
            data-aos-duration="400"
          >
            Projects
          </p>
          <h2
            className="py-2 tracking-wide text-2xl md:text-3xl space-mono font-normal mb-4 projects-top-text-2"
            data-aos="fade-right"
            data-aos-anchor="#projects"
            data-aos-duration="400"
          >
            What I've Built
          </h2>
          <div
            className="grid grid-cols-1 gap-12 md:gap-24 mt-8 md:mt-16 projects-bottom-container"
            data-aos="fade-right"
            data-aos-anchor="#projects"
            data-aos-duration="400"
          >
            <NavLink to={'/emporium'}>
              <ProjectItem
                title="Emporium"
                projectType="Full Stack Project"
                backgroundImg={emporium}
                projectUrl="emporium"
              />
            </NavLink>
            <NavLink to={'/tldreddit'}>
              <ProjectItem
                title="TLDReddit"
                projectType="React Project"
                backgroundImg={tldreddit}
                projectUrl="tldreddit"
              />
            </NavLink>
            <a
              href="https://github.com/JPSCorreia"
              target="_blank"
              rel="noreferrer"
            >
              <ProjectItem
                title="GitHub Projects"
                projectType="GitHub Projects"
                backgroundImg={github}
                projectUrl="github"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="contact-top"></div>
      <Scroller scrollerID="projects-scroller" link="#contact" text="contact" AOSAnimation="fade-up" AOSAnchor="#after-skills" AOSOffset="-50" AOSAnchorPlacement="bottom-bottom"/>
    </div>
  );
}

export default Projects