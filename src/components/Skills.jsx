import React, { useState, useEffect } from 'react'
import {SiCss3, SiFramer, SiJavascript, SiRedux, SiTypescript, SiNodedotjs, SiReact, SiTailwindcss} from 'react-icons/si'
import RotatingGlobe from './RotatingGlobe.jsx'
import Scroller from './Scroller';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/actions'
import { spinToAngle, globeControl } from '../features/globeControl'

const TECH_INFO = {
  'TypeScript': { color: '#3178c6', keywords: 'Static typing · Interfaces · Generics' },
  'React.js':   { color: '#00ccff', keywords: 'Hooks · Context · Reactivity · Components' },
  'CSS3':       { color: '#2762e9', keywords: 'Flexbox · Grid · Animations · SCSS' },
  'Javascript': { color: '#efd81f', keywords: 'ES6+ · DOM Manipulation · Event handling' },
  'Framer':     { color: '#ffffff', keywords: 'UI · Interactions · Animations' },
  'Redux':      { color: '#764abc', keywords: 'State management · RTK · Thunks' },
  'Tailwind':   { color: '#44a8b3', keywords: 'Utility-first · Responsive · Custom design' },
  'Node.js':    { color: '#a7cc64', keywords: 'REST APIs · Middleware' },
};

const Skills = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [visible, setVisible] = useState(false);
  const [tooltipTop, setTooltipTop] = useState(50);

  useEffect(() => {
    globeControl.onSelect = (name) => {
      setTooltipTop(globeControl.centerY);
      setSelectedTech(name);
      setVisible(false);
      requestAnimationFrame(() => setVisible(true));
    };
    return () => { globeControl.onSelect = null; };
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isShortScreen     = useMediaQuery({ query: '(max-height: 900px)' });
  const isShortWideScreen = useMediaQuery({ query: '(max-height: 900px) and (min-width: 1024px)' });
  const isMediumHeight    = useMediaQuery({ query: '(max-height: 1200px) and (min-height: 901px) and (min-width: 1025px)' });

  const tooltipNameSize = isShortScreen ? '1.3rem' : isMobile ? '1.1rem' : isTablet ? '1.5rem' : isMediumHeight ? '2rem' : '2.85rem';
  const tooltipKeySize  = isShortScreen ? '0.62rem' : isMobile ? '0.58rem' : isTablet ? '0.72rem' : isMediumHeight ? '0.9rem' : '1.25rem';

  const typescriptHighlight = useSelector((state) => state.typescriptHighlightData)
  const cssHighlight        = useSelector((state) => state.cssHighlightData)
  const reactHighlight      = useSelector((state) => state.reactHighlightData)
  const javascriptHighlight = useSelector((state) => state.javascriptHighlightData)
  const framerHighlight     = useSelector((state) => state.framerHighlightData)
  const nodeHighlight       = useSelector((state) => state.nodeHighlightData)
  const tailwindHighlight   = useSelector((state) => state.tailwindHighlightData)
  const reduxHighlight      = useSelector((state) => state.reduxHighlightData)
  const dispatch = useDispatch();

  const iconSize = (isTabletOrMobile || isShortScreen) ? 20 : 28;

  const techClass = (highlight) =>
    `flex items-center leading-loose tracking-wide cursor-pointer space-mono text-sm md:text-xl md:mt-2 hover:text-[#67E8F9] ${
      highlight ? 'text-[#67E8F9]' : 'text-gray-200'
    }`;

  const tooltip = selectedTech && TECH_INFO[selectedTech] && (
    <div
      className="absolute inset-x-0 z-20 pointer-events-none flex justify-center"
      style={{ top: `${tooltipTop}%`, transform: 'translateY(-50%)' }}
    >
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease', textAlign: 'center', fontFamily: "'Space Mono', monospace" }}>
        <div style={{
          color: TECH_INFO[selectedTech].color,
          fontSize: tooltipNameSize,
          fontWeight: 'bold',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '8px',
          textShadow: [
            `-1px -1px 0 rgba(255,255,255,0.85)`,
            ` 1px -1px 0 rgba(255,255,255,0.85)`,
            `-1px  1px 0 rgba(255,255,255,0.85)`,
            ` 1px  1px 0 rgba(255,255,255,0.85)`,
            ` 0 0 16px ${TECH_INFO[selectedTech].color}`,
            ` 0 0 32px ${TECH_INFO[selectedTech].color}66`,
          ].join(','),
        }}>
          {selectedTech}
        </div>
        <div style={{
          color: '#e2e8f0',
          fontSize: tooltipKeySize,
          fontWeight: '600',
          letterSpacing: '0.08em',
          textShadow: '0 1px 8px rgba(0,0,0,0.9)',
        }}>
          {TECH_INFO[selectedTech].keywords}
        </div>
      </div>
    </div>
  );

  const techList = (
    <div className="flex flex-row skill-icons-container">
      <div className="flex flex-col mr-4 md:mr-8">
        <span onClick={() => { spinToAngle(-Math.PI / 4); globeControl.onSelect?.('TypeScript'); globeControl.pulseMap['TypeScript']?.(); }} onMouseEnter={() => { dispatch(actions.typescriptOpacity(2)); dispatch(actions.typescriptScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.typescriptOpacity(0.6)); dispatch(actions.typescriptScale([20,20,20]))}} className={techClass(typescriptHighlight)}>
          <SiTypescript className="mr-2" color="#3178c6" size={iconSize} />TypeScript
        </span>
        <span onClick={() => { spinToAngle(0); globeControl.onSelect?.('React.js'); globeControl.pulseMap['React.js']?.(); }} onMouseEnter={() => { dispatch(actions.reactOpacity(2)); dispatch(actions.reactScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.reactOpacity(0.6)); dispatch(actions.reactScale([20,20,20]))}} className={techClass(reactHighlight)}>
          <SiReact className="mr-2" color="#61dafb" size={iconSize} />React.js
        </span>
        <span onClick={() => { spinToAngle(-Math.PI / 2); globeControl.onSelect?.('CSS3'); globeControl.pulseMap['CSS3']?.(); }} onMouseEnter={() => { dispatch(actions.cssOpacity(2)); dispatch(actions.cssScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.cssOpacity(0.6)); dispatch(actions.cssScale([20,20,20]))}} className={techClass(cssHighlight)}>
          <SiCss3 className="mr-2" color="#2762e9" size={iconSize} />CSS3
        </span>
        <span onClick={() => { spinToAngle(-3 * Math.PI / 4); globeControl.onSelect?.('Javascript'); globeControl.pulseMap['Javascript']?.(); }} onMouseEnter={() => { dispatch(actions.javascriptOpacity(2)); dispatch(actions.javascriptScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.javascriptOpacity(0.6)); dispatch(actions.javascriptScale([20,20,20]))}} className={techClass(javascriptHighlight)}>
          <SiJavascript className="mr-2" color="#efd81f" size={iconSize} />JavaScript
        </span>
      </div>
      <div className="flex flex-col">
        <span onClick={() => { spinToAngle(3 * Math.PI / 4); globeControl.onSelect?.('Framer'); globeControl.pulseMap['Framer']?.(); }} onMouseEnter={() => { dispatch(actions.framerOpacity(2)); dispatch(actions.framerScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.framerOpacity(0.6)); dispatch(actions.framerScale([20,20,20]))}} className={techClass(framerHighlight)}>
          <SiFramer className="mr-2" color="#ffffff" size={iconSize} />Framer
        </span>
        <span onClick={() => { spinToAngle(Math.PI / 4); globeControl.onSelect?.('Redux'); globeControl.pulseMap['Redux']?.(); }} onMouseEnter={() => { dispatch(actions.reduxOpacity(2)); dispatch(actions.reduxScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.reduxOpacity(0.6)); dispatch(actions.reduxScale([20,20,20]))}} className={techClass(reduxHighlight)}>
          <SiRedux className="mr-2" color="#764abc" size={iconSize} />Redux
        </span>
        <span onClick={() => { spinToAngle(Math.PI / 2); globeControl.onSelect?.('Tailwind'); globeControl.pulseMap['Tailwind']?.(); }} onMouseEnter={() => { dispatch(actions.tailwindOpacity(2)); dispatch(actions.tailwindScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.tailwindOpacity(0.6)); dispatch(actions.tailwindScale([20,20,20]))}} className={techClass(tailwindHighlight)}>
          <SiTailwindcss className="mr-2" color="#44a8b3" size={iconSize} />Tailwind
        </span>
        <span onClick={() => { spinToAngle(Math.PI); globeControl.onSelect?.('Node.js'); globeControl.pulseMap['Node.js']?.(); }} onMouseEnter={() => { dispatch(actions.nodeOpacity(2)); dispatch(actions.nodeScale([23,23,23]))}} onMouseLeave={() => { dispatch(actions.nodeOpacity(0.6)); dispatch(actions.nodeScale([20,20,20]))}} className={techClass(nodeHighlight)}>
          <SiNodedotjs className="mr-2" color="#43853d" size={iconSize} />Node.js
        </span>
      </div>
    </div>
  );

  if (isShortWideScreen) {
    return (
      <div id="skills" className="relative min-h-screen flex flex-row">
        {/* Title — same w-[90%] max-w-[1240px] container as all other sections */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none" style={{ paddingTop: '84px' }}>
          <div className="w-[90%] max-w-[1240px] mx-auto flex justify-end">
            <div
              className="flex flex-col items-end pointer-events-auto"
              data-aos="fade-left"
              data-aos-anchor="#skills"
              data-aos-duration="400"
            >
              <p className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top">Skills</p>
              <h2 className="mt-1 text-gray-200 tracking-wide text-2xl space-mono font-normal">What I Can Do</h2>
            </div>
          </div>
        </div>

        {/* Left half — globe + tooltip share the same div so inset-x-0 aligns correctly */}
        <div className="relative w-1/2 h-screen">
          <RotatingGlobe sideLayout={true} />
          {tooltip}
        </div>

        {/* Right half — skills list vertically centered */}
        <div
          className="w-1/2 h-screen flex flex-col items-start justify-center pl-[8%] pr-4 z-10 pointer-events-none"
          data-aos="fade-left"
          data-aos-anchor="#skills"
          data-aos-duration="400"
        >
          <div className="flex flex-col items-start pointer-events-auto">
            <div className="text-sm mb-3 space-mono tracking-wide text-gray-200">
              Experienced with developing in:
            </div>
            {techList}
            <div className="mt-2 text-xs space-mono tracking-widest text-gray-200">and much more.</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <Scroller
            scrollerID="skills-scroller"
            link="#projects"
            text="projects"
            AOSAnimation="fade-up"
            AOSAnchor="#after-about"
            AOSOffset="-50"
            AOSAnchorPlacement="bottom-bottom"
          />
        </div>
      </div>
    );
  }

  return (
    <div id="skills" className="relative min-h-screen flex flex-col">
      {/* Canvas — fills the entire section */}
      <div className="rotating-globe absolute inset-0">
        <RotatingGlobe />
      </div>

      {tooltip}

      {/* Content overlay */}
      <div
        className="relative z-10 w-[90%] max-w-[1240px] mx-auto flex-1 pt-20 flex flex-col"
        style={{ pointerEvents: 'none' }}
        data-aos="fade-left"
        data-aos-anchor="#skills"
        data-aos-duration="400"
      >
        <div className="flex flex-col items-end pointer-events-auto">
          <p className="text-xl tracking-widests uppercase text-[#67E8F9] header-text-top">Skills</p>
          <h2 className="mt-1 text-gray-200 tracking-wide text-2xl md:text-3xl space-mono font-normal skills-top-text-2">
            What I Can Do
          </h2>
        </div>

        <div className="flex-1" />

        <div className="pb-6 flex flex-col items-center pointer-events-auto">
          <div className="text-sm md:text-xl mb-3 space-mono tracking-wide skills-text text-gray-200">
            Experienced with developing in:
          </div>
          {techList}
          <div className="mt-3 text-xs md:text-sm space-mono tracking-widest text-gray-200">
            and much more.
          </div>
        </div>
      </div>

      <Scroller
        scrollerID="skills-scroller"
        class="page-scroller relative z-10"
        link="#projects"
        text="projects"
        AOSAnimation="fade-up"
        AOSAnchor="#after-about"
        AOSOffset="-50"
        AOSAnchorPlacement="bottom-bottom"
      />
    </div>
  );
}

export default Skills
