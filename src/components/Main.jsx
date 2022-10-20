/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {SiExpress, SiReact, SiPostgresql} from 'react-icons/si'
// import RotatingGlobe from './RotatingGlobe.jsx'
import Scroller from './Scroller'



const Main = () => {


  return (
    <div
      id="home"
      className="w-[90%] max-w-screen m-auto h-screen text-center flex home-page flex-col"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center text-zone">
        <div className="flex flex-col main h-[100%] home-intro mt-24 sm:mt-36 justify-center">
          <div className="flex flex-col">
            <div
              className="text-start text-[#67E8F9] text-lg md:text-2xl whitespace-nowrap space-mono mb-4"
              data-aos="fade-up"
              data-aos-anchor="#home"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              Hi, my name is{' '}
            </div>
            <div
              className=" text-5xl lg:text-6xl tracking-wider home-text mt-3 text-start text-[#ffffff]"
              data-aos="fade-in"
              data-aos-anchor="#home"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              João Correia
              <span className="home-text text-gray-200">,</span>
            </div>
            <h1
              className="mt-2 text-start text-5xl lg:text-6xl whitespace-nowrap home-text tracking-wider"
              data-aos="fade-in"
              data-aos-anchor="#home"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              Web Developer.
            </h1>
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-down"
            data-aos-anchor="#home"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="py-2 text-start flex flex-col md:flex-row text-[#67E8F9] mt-4">
              <div className="flex flex-col">
                <span className="flex items-center whitespace-nowrap leading-loose tracking-wide text-lg md:text-2xl space-mono ">
                  Full Stack Developer
                  {/* <span className="hidden md:inline ml-3 text-gray-200">-</span> */}
                </span>
                <div className="flex flex-col md:flex-row mt-3">
                  <span className="flex items-center leading-loose tracking-wide text-lg md:text-2xl space-mono text-gray-200">
                    <SiReact className="mr-3" color="#61dafb" size={32} />
                    React.js
                    <span className="hidden md:inline mx-3 ">-</span>
                  </span>
                  <span className="flex items-center leading-loose tracking-wide text-lg md:text-2xl space-mono text-gray-200">
                    <SiExpress className="mr-3" color="#ffffff" size={32} />
                    Express.js
                    <span className="hidden md:inline mx-3 ">-</span>
                  </span>
                  <span className="flex items-center justify-start leading-loose tracking-wide text-lg md:text-2xl space-mono text-gray-200">
                    <SiPostgresql className="mr-3" color="#31648d" size={32} />
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <FaLinkedinIn size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <FaGithub size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <AiOutlineMail size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <BsFillPersonLinesFill size={30}/>
            </div>
          </div> */}
        </div>
      </div>

      <Scroller scrollerID="main-scroller" link="#about" text="scroll down" AOSAnchor="#navbar" AOSOffset="70" AOSAnchorPlacement="top-center" AOSAnimation="fade-up" />
    </div>
  );
}

export default Main