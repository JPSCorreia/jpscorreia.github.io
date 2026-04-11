/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {SiTypescript, SiReact, SiFramer} from 'react-icons/si'
import Scroller from './Scroller'

const Main = () => {

  return (
    <div
      id="home"
      className="w-[90%] max-w-screen m-auto min-h-screen pt-20 text-center flex home-page flex-col"
    >
      <div className="max-w-[1240px] w-full flex-1 mx-auto flex flex-col justify-center items-center text-zone">
        <div id="home-container-1" className="flex flex-col main h-[100%] home-intro mt-24 sm:mt-36 justify-center">
          <div className="flex flex-col">
            <div
              className="text-start text-[#67E8F9] text-lg md:text-2xl whitespace-nowrap space-mono mb-4"
              id="home-text-1"
              data-aos="fade-up"
              data-aos-anchor="#home"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              Hi, my name is{' '}
            </div>
            <div
              className="text-2xl sm:text-4xl lg:text-5xl tracking-wider home-text mt-3 text-start text-[#ffffff]"
              id="home-text-2"
              data-aos="fade-in"
              data-aos-anchor="#home"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              João Correia
              <span className="home-text text-gray-200">,</span>
            </div>
            <h1
              className="mt-2 text-start text-2xl sm:text-4xl lg:text-5xl home-text tracking-wider"
              id="home-text-3"
              data-aos="fade-in"
              data-aos-anchor="#home"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              I build things for the web.
            </h1>
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-down"
            data-aos-anchor="#home"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div id="home-text-5" className="py-2 text-start flex flex-col md:flex-row text-[#67E8F9] mt-4">
              <div className="flex flex-col">
                <span id="home-text-4" className="flex items-center whitespace-nowrap leading-loose tracking-wide text-lg md:text-2xl space-mono ">
                  Freelance Frontend Developer
                </span>
                <div className="flex flex-col md:flex-row mt-3 gap-2 md:gap-0 home-skills-container">
                  <span className="flex items-center leading-loose tracking-wide text-lg md:text-2xl space-mono text-gray-200">
                    <SiTypescript className="mr-3" color="#3178c6" size={32} />
                    TypeScript
                    <span className="hidden md:inline mx-3 ">-</span>
                  </span>
                  <span className="flex items-center leading-loose tracking-wide text-lg md:text-2xl space-mono text-gray-200">
                    <SiReact className="mr-3" color="#61dafb" size={32} />
                    React.js
                    <span className="hidden md:inline mx-3 ">-</span>
                  </span>
                  <span className="flex items-center justify-start leading-loose tracking-wide text-lg md:text-2xl space-mono text-gray-200">
                    <SiFramer className="mr-3" color="#ffffff" size={32} />
                    Framer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroller class="page-scroller" scrollerID="main-scroller" link="#about" text="scroll down" AOSAnchor="#navbar" AOSOffset="70" AOSAnchorPlacement="top-center" AOSAnimation="fade-up" />
    </div>
  );
}

export default Main