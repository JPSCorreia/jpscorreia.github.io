import React from 'react'
import { SiJest, SiReactrouter, SiRedux, SiReact } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { IoLogoReddit } from 'react-icons/io'

const TLDRedditTechnologies = () => {
  return (
    <div
      className="col-span-4 lg:col-span-1 shadow-[#67E8F9] mb-4"
      data-aos="fade-left"
      data-aos-anchor="#tldreddit"
      data-aos-duration="400"
    >
      <div className="">
        <p className="text-start text-xl font-bold mt-4 mb-2">Technologies</p>
        <div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiReact color="#61dafb" size={24} />
            </div>
            <div className="m-2">
              <h3>React</h3>
            </div>
          </div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiRedux color="#764abc" size={24} />
            </div>
            <div className="m-2">
              <h3>Redux</h3>
            </div>
          </div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiReactrouter color="#ca031b" size={24} />
            </div>
            <div className="m-2">
              <h3>React Router</h3>
            </div>
          </div>
                    <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <IoLogoReddit color="#ff4017" size={24} />
            </div>
            <div className="m-2">
              <h3>Reddit API</h3>
            </div>
          </div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <DiSass color="#c76594" size={24} />
            </div>
            <div className="m-2">
              <h3>Sass</h3>
            </div>
          </div>

          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiJest color="#c03c14" size={24} />
            </div>
            <div className="m-2">
              <h3>Jest</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TLDRedditTechnologies