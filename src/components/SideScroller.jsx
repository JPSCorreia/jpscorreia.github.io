import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import MovingText from 'react-moving-text';
import { NavLink } from 'react-router-dom';

const SideScroller = (props) => {
  return (
    <div
      // id={props.scrollerID}
      id='project-sidescroll'
      // className="flex flex-col items-center justify-center bg-transparent cursor-pointer hover:text-[#67E8F9] mt-2 z-500"
      className={props.classProp}
      data-aos={props.AOSAnimation}
      data-aos-anchor={props.AOSAnchor}
      data-aos-duration="400"
      // data-aos-offset={props.AOSOffset}
      // data-aos-duration="200"
      // data-aos-delay="0"
      // data-aos-anchor-placement={props.AOSAnchorPlacement}
    >
      <HashLink to={props.navLinkToBack}>
          <MovingText
            className="space-mono flex flex-row items-center ease-in duration-100 text-md tracking-wide "
            type="pulse"
            duration="750ms"
            delay="0s"
            direction="alternate-reverse"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="none"
          >
            <div className='flex flex-row items-center'>
            {props.toLeft? '' : 'next'}
            {props.toLeft? <HiChevronLeft className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 mt-1" size={props.iconSize} /> : <HiChevronRight className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100" size={props.iconSize} /> }
            {props.toLeft? 'previous' : ''}
            </div>
          </MovingText>
      </HashLink>
    </div>
  );
}

export default SideScroller


