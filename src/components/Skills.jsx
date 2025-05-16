import React from 'react'
import {SiCss3, SiExpress, SiHtml5, SiRedux, SiJavascript, SiNodedotjs, SiReact, SiPostgresql} from 'react-icons/si'
import RotatingGlobe from './RotatingGlobe.jsx'
import Scroller from './Scroller';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/actions'

const Skills = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const reactHighlightData = useSelector((state) => state.reactHighlightData)
  const reactHighlight = useSelector((state) => state.reactHighlightData)
  const htmlHighlight = useSelector((state) => state.htmlHighlightData)
  const cssHighlight = useSelector((state) => state.cssHighlightData)
  const javascriptHighlight = useSelector((state) => state.javascriptHighlightData)
  const expressHighlight = useSelector((state) => state.expressHighlightData)
  const nodeHighlight = useSelector((state) => state.nodeHighlightData)
  const postgresHighlight = useSelector((state) => state.postgresHighlightData)
  const reduxHighlight = useSelector((state) => state.reduxHighlightData)
  const dispatch = useDispatch();

  return (
    <div
      id="skills"
      className="w-[90%] m-auto h-[90vh] lg:h-screen items-center flex flex-col" // w-[90%] m-auto md:h-screen p-2 flex flex-col justify-between md:pt-16 pt-12 mt-24
    >
      <div
        className="max-w-[1240px] h-full w-full mx-auto flex flex-col items-center mt-20 justify-top md:justify-center"
        id="skills-container"
        data-aos="fade-left"
        data-aos-anchor="#skills"
        data-aos-duration="400"
      >
        <div className="flex flex-col w-full">
          <p
            className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top text-end"
          >
            Skills
          </p>
          <h2
            className="mt-1 text-gray-200 text-end tracking-wide text-2xl md:text-3xl space-mono font-normal skills-top-text-2"
          >
            What I Can Do
          </h2>

          <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col items-center main-with-globe">
            <div
              className="rotating-globe width-[20vw] height-[20vh]"
            >
              <RotatingGlobe />
            </div>
            <div
              className="text-md md:text-2xl mt-2 space-mono tracking-wide skills-text md:mt-12"
              data-aos="fade-left"
              data-aos-anchor="#skills"
              data-aos-duration="400"
            >
              Experienced with developing in: 
            </div>
            <div
              className="flex flex-row mt-3 md:mt-8 md:flex-row skill-icons-container"
              data-aos="fade-left"
              data-aos-anchor="#skills"
              data-aos-duration="400"
            >
              <div className="flex flex-col mr-1">
                <div className="md:py-2 text-start text-gray-200 flex flex-col md:flex-col mx-auto md:mr-12">
                  <span onMouseEnter={() => { dispatch(actions.htmlOpacity(2)); dispatch(actions.htmlScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.htmlOpacity(0.6)); dispatch(actions.htmlScale([20,20,20]))}} className={htmlHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer space-mono text-md md:text-2xl" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer space-mono text-md md:text-2xl"}>
                    <SiHtml5
                      className="mr-2"
                      color="#dd4b25"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    HTML5
                  </span>
                  <span onMouseEnter={() => { dispatch(actions.cssOpacity(2)); dispatch(actions.cssScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.cssOpacity(0.6)); dispatch(actions.cssScale([20,20,20]))}} className={cssHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer space-mono text-md md:text-2xl md:mt-2" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer only://#region space-mono text-md md:text-2xl md:mt-2" }>
                    <SiCss3
                      className="mr-2"
                      color="#2762e9"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    CSS3
                  </span>
                  <span onMouseEnter={() => { dispatch(actions.javascriptOpacity(2)); dispatch(actions.javascriptScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.javascriptOpacity(0.6)); dispatch(actions.javascriptScale([20,20,20]))}} className={javascriptHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center justify-start mr-3 leading-loose tracking-wide space-mono text-md md:text-2xl md:mt-2" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer only://#region space-mono text-md md:text-2xl md:mt-2" }>
                    <SiJavascript
                      className="mr-2"
                      color="#efd81f"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Javascript
                  </span>
                  <span onMouseEnter={() => { dispatch(actions.nodeOpacity(2)); dispatch(actions.nodeScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.nodeOpacity(0.6)); dispatch(actions.nodeScale([20,20,20]))}} className={nodeHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center justify-start mr-3 leading-loose tracking-wide space-mono text-md md:text-2xl md:mt-2" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer only://#region space-mono text-md md:text-2xl md:mt-2" }>
                    <SiNodedotjs
                      className="mr-2"
                      color="#43853d"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Node.js
                  </span>
                </div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="md:py-2 text-start text-gray-200 flex flex-col md:flex-col mx-auto">
                  <span onMouseEnter={() => { dispatch(actions.reactOpacity(2)); dispatch(actions.reactScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.reactOpacity(0.6)); dispatch(actions.reactScale([20,20,20]))}} className={reactHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide space-mono text-md md:text-2xl" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer space-mono text-md md:text-2xl" }>
                    <SiReact
                      className="mr-2"
                      color="#61dafb"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    React.js
                  </span>
                  <span onMouseEnter={() => { dispatch(actions.reduxOpacity(2)); dispatch(actions.reduxScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.reduxOpacity(0.6)); dispatch(actions.reduxScale([20,20,20]))}} className={reduxHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide space-mono text-md md:text-2xl md:mt-2" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer only://#region space-mono text-md md:text-2xl md:mt-2" }>
                    <SiRedux
                      className="mr-2"
                      color="#764abc"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Redux
                  </span>
                  <span onMouseEnter={() => { dispatch(actions.expressOpacity(2)); dispatch(actions.expressScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.expressOpacity(0.6)); dispatch(actions.expressScale([20,20,20]))}} className={expressHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide space-mono text-md md:text-2xl md:mt-2" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer only://#region space-mono text-md md:text-2xl md:mt-2" }>
                    <SiExpress
                      className="mr-2"
                      color="#ffffff"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Express.js
                  </span>
                  <span onMouseEnter={() => { dispatch(actions.postgresOpacity(2)); dispatch(actions.postgresScale([23,23,23]))}} onMouseLeave={ () => { dispatch(actions.postgresOpacity(0.6)); dispatch(actions.postgresScale([20,20,20]))}} className={postgresHighlight? "flex text-[#67E8F9] hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide space-mono text-md md:text-2xl md:mt-2" : "flex hover:text-[#67E8F9] items-center mr-3 leading-loose tracking-wide cursor-pointer only://#region space-mono text-md md:text-2xl md:mt-2" }>
                    <SiPostgresql
                      className="mr-2"
                      color="#31648d"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroller scrollerID="skills-scroller" class="page-scroller" link="#projects" text="projects" AOSAnimation="fade-up" AOSAnchor="#after-about" AOSOffset="-50" AOSAnchorPlacement="bottom-bottom"/>
    </div>
  );
}

export default Skills

