/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import profile from '../assets/profile.png';
import Scroller from './Scroller';

const About = () => {
    return (
        <div
            id="about"
            className="w-[90%] m-auto min-h-screen pt-20 items-center flex flex-col text-sm sm:text-[16px]"
        >
            <div
                className="max-w-[1240px] w-full flex-1 mx-auto flex flex-col justify-center items-center about-container"
                data-aos="fade-right"
                data-aos-anchor="#about"
                data-aos-duration="400"
                data-aos-delay="100"
            >
                <div className="flex flex-col w-full">
                    <p className="text-lg md:text-xl tracking-widest text-[#67E8F9] header-text-top uppercase">
                        About
                    </p>
                    <div className="mt-2 text-gray-200 tracking-wide text-2xl md:text-3xl space-mono font-normal mb-6 about-header-2">
                        Who I am
                    </div>
                    <div className="flex flex-row about-container-1">
                        <div className="flex flex-col about-countainer">
                            <img
                                className="animated-image mb-6 w-28 h-28 block sm:hidden rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] mx-auto hover:scale-110 ease-in duration-200"
                                src={profile}
                                alt="/"
                            />
                            <p className="mt-6 pb-0 sm:pb-2 text-gray-200 leading-5 sm:leading-6 about-text-1">
                                Since I was a child I've had a passion for science, technology and programming, but it wasn't until 2022 that I took the leap into a developer career.{' '}
                            </p>
                            <p className="mt-4 text-gray-200 leading-5 sm:leading-6 about-text-2">
                                I started with the Full-Stack Engineer Career Path at Codecademy, then furthered my education at ATEC Training Academy, specializing in Information Systems Technologies and Programming.
                            </p>
                            <p className="mt-4 text-gray-200 leading-5 sm:leading-6 about-text-3">
                                Since then I've been working as a freelance frontend developer, building production interfaces and integrations for clients — most notably for Rauva, a Portuguese fintech platform targeting SMEs, where I've developed complex React and Framer components, form systems, and third-party integrations.
                            </p>
                        </div>
                        <img
                            className="animated-image ml-8 w-[120px] md:w-[160px] lg:w-[192px] hidden sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200"
                            src={profile}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
            <Scroller
                scrollerID="about-scroller"
                class="page-scroller"
                text="skills"
                link="#skills"
                AOSAnimation="fade-up"
                AOSAnchor="#after-main"
                AOSOffset="-50"
                AOSAnchorPlacement="bottom-bottom"
            />
        </div>
    );
};

export default About;
