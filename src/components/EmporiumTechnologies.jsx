import React from 'react'
import {
  SiExpress,
  SiAuth0,
  SiRedux,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
} from 'react-icons/si';

const EmporiumTechnologies = (props) => {
  return (
    <div
      className="col-span-4 lg:col-span-1 shadow-[#67E8F9] mb-4"
      data-aos="fade-left"
      data-aos-anchor={props.AOSAnchor}
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
              <SiNodedotjs color="#43853d" size={24} />
            </div>
            <div className="m-2">
              <h3>Node.js</h3>
            </div>
          </div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiExpress color="#ffffff" size={24} />
            </div>
            <div className="m-2">
              <h3>Express.js</h3>
            </div>
          </div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiPostgresql color="#31648d" size={24} />
            </div>
            <div className="m-2">
              <h3>PostgreSQL</h3>
            </div>
          </div>
          <div className="flex flex-row flex-start justify-start">
            <div className="flex items-center">
              <SiAuth0 color="#ff541a" size={24} />
            </div>
            <div className="m-2">
              <h3>Auth0</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmporiumTechnologies