import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react';

const ProjectItem = (props) => {
  return (
    <div className="group project-item w-[95%] max-w-[550px] mx-auto">
      {/* <p className="text-2xl tracking-widest uppercase mb-4 text-center group-hover:text-[#67E8F9]">
        {props.title}
      </p> */}
      {/* hover:bg-gradient-to-r from-[#0891B2]/80 to-[#67E8F9]/80 */}
      {/* group-hover:shadow-[#67E8F9] */}
      <div className="relative flex items-center justify-center cursor-pointer h-auto w-full shadow-custom2 group-hover:shadow-custom4 group-hover:bg-gradient-to-r from-[#0891B2] via-[#67E8F9] to-[#0891B2]  shadow-[#ffffff] p-3 py-8 md:py-12 project-item-container">
        <>
          <img
            className=""
            src={props.backgroundImg}
            alt="/"
          />
        </>
        {/* <div className="absolute">
          <p className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] mx-auto  hidden group-hover:block text-white text-2xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
            Click for more Info
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectItem