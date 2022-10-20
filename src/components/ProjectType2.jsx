import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';
import { HashLink } from 'react-router-hash-link';
import ProjectTechnologies from './ProjectTechnologies';
import SideScroller from './SideScroller';
import ProjectImage from './ProjectImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectType = (props) => {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in',
      duration: 0,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div id={props.projectId} className="w-full items-center flex flex-col project-type">
      <div
        className="w-screen h-[20vh] lg:h-[25vh] relative shadow-lg shadow-[#67E8F9] " /*top-20 */
      >
        <ProjectImage backgroundImageURL={props.backgroundImageURL} AOSAnchor={props.AOSAnchor} />
        <div className="absolute lg:top-left-0 w-full lg:top-20 h-[20vh] lg:h-[calc(25vh-80px)] bg-[#121212]/70 z-10"></div>
        <HashLink to="/#projects">
          <div className="absolute top-[94%] z-10 p-6 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className='flex flex-row items-baseline mb-2'>
            <p
              className="text-xl tracking-widest uppercase header-text-top text-[#67E8F9] hover:underline underline-offset-4 "
              // data-aos="fade-right"
              // data-aos-duration="400"
              // data-aos-offset="200"
            >
              Projects
            </p>
            {/* <SideScroller iconSize={32} navLinkToBack={props.navLinkToNext} toLeft={false} classProp={'flex-row ml-4 flex 2xl:hidden z-auto cursor-pointer hover:text-[#67E8F9]'} /> */}
            </div>
          </div>
        </HashLink>
      </div>
      <SideScroller AOSAnchor={props.AOSAnchor} AOSAnimation={'fade-right'} iconSize={48} navLinkToBack={props.navLinkToBack} toLeft={true} classProp={'flex-row hidden 2xl:flex absolute top-[50%] left-[1%] cursor-pointer hover:text-[#67E8F9]'} />
      <SideScroller AOSAnchor={props.AOSAnchor} AOSAnimation={'fade-left'} iconSize={48} navLinkToBack={props.navLinkToNext} toLeft={false} classProp={'flex-row hidden 2xl:flex absolute top-[50%] right-[1%] cursor-pointer hover:text-[#67E8F9]'} />
      <div className="max-w-[1240px] mx-auto px-6 pt-6 flex flex-col project-type-contain"> {/* lg:grid-cols-5 */}
        <div className='flex flex-col project-type-container justify-top'>
          <div className=''>
            <div className='flex flex-row mb-4 items-center'>
            <h2
              className=""
              data-aos="fade-right"
              data-aos-anchor={props.AOSAnchor}
              data-aos-duration="400"
            >
              {props.projectTitle}
              
            </h2>
            </div>
            <p
              className='mb-4'
              data-aos="fade-right"
              data-aos-anchor={props.AOSAnchor}
              data-aos-duration="400"
            >
              {props.projectParagraphOne}
            </p>
            <p
              data-aos="fade-right"
              data-aos-anchor={props.AOSAnchor}
              data-aos-duration="400"
            >
              {props.projectParagraphTwo}
            </p>
          </div>
          <div className='flex flex-col justify-between '>
            <ProjectTechnologies AOSAnchor={props.AOSAnchor} iconArray={props.iconArray} />
            <div
              className="flex flex-row w-[70%]"
              data-aos="fade-up"
              data-aos-anchor={props.AOSAnchor}
              data-aos-duration="400"
            >
              <a href={props.exampleLink} target="_blank" rel="noreferrer noopener">
                <Button
                  leftIcon={<IoPlay />}
                  color="#ffffff"
                  variant="outline"
                  className="flex flex-center text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 w-[7rem]"
                  size="lg"
                >
                  Demo
                </Button>
              </a>
              <a href={props.githubLink} target="_blank" rel="noreferrer noopener">
                <Button
                  leftIcon={<FaGithub />}
                  color="#ffffff"
                  variant="outline"
                  className="flex flex-center ml-2 text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 w-[7rem] "
                  size="lg"
                >
                  Code
                </Button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectType


