import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import MovingText from 'react-moving-text';

const ScrollerTop = (props) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-transparent cursor-pointer  hover:text-[#67E8F9] scroller-top mt-4"
      // data-aos="fade-up"
      // data-aos-anchor="#navbar"
      // data-aos-offset="70"
      // data-aos-duration="100"
      // data-aos-delay="0"
      // data-aos-anchor-placement="top-center"
    >
      <HashLink to='#home'>
        <MovingText
          className="space-mono flex flex-col items-center ease-in duration-100 text-md tracking-wide "
          type="pulse"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease-in-out"
          iteration="infinite"
          fillMode="none"
        >
          scroll to top
          <div className=" hover:text-[#67E8F9] hover:scale-110 mb-4 p-2">
            <HiOutlineChevronDoubleUp size={32} />
          </div>
        </MovingText>
      </HashLink>
    </div>
  );
}

export default ScrollerTop