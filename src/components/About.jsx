/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import profile from '../assets/profile.png';
import Scroller from './Scroller';

const About = () => {
    return (
        <div
            id="about"
            className="w-[90%] m-auto h-[90vh] lg:h-screen items-center flex flex-col text-sm sm:text-[16px]"
        >
            <div
                className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-top md:justify-center items-center mt-20 md:mt-0 about-container"
                data-aos="fade-right"
                data-aos-anchor="#about"
                data-aos-duration="400"
                data-aos-delay="100"
            >
                <div className="flex flex-col w-full">
                    <p className="text-lg md:text-xl tracking-widest text-[#67E8F9] header-text-top uppercase">
                        About
                    </p>
                    <div className="mt-1 text-gray-200 tracking-wide text-2xl md:text-3xl space-mono font-normal mb-4 about-header-2">
                        Who I am
                    </div>
                    <div className="flex flex-row about-container-1">
                        <div className="flex flex-col about-countainer">
                            <img
                                className="animated-image mt-1 w-[18vh] block sm:hidden rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] mx-auto hover:scale-110 ease-in duration-200 justify-center items-center "
                                src={profile}
                                alt="/"
                            />
                            <p className="mt-6 pb-0 sm:pb-2 text-gray-200 leading-5 sm:leading-6 about-text-1">
                                Since I was a child I've had a passion for
                                science, technology and programming but it
                                wasn't until 2022 that I saw the opportunity to
                                try and start a career as a developer.{' '}
                            </p>
                            <p className="mt-4 text-gray-200 leading-5 sm:leading-6 about-text-2">
                                I finished the Full-Stack Engineer Career Path
                                at Codecademy and quickly found myself learning
                                frameworks such as React.js and how to operate
                                full stack applications using Express.js and
                                PostgreSQL.
                            </p>
                            <p className="mt-4 text-gray-200 leading-5 sm:leading-6 about-text-3">
                                In 2023, I furthered my education by joining
                                ATEC Training Academy for the Specialist
                                Technician in Information Systems Technologies
                                and Programming program. Here, I delved deeper
                                into information systems technologies and
                                programming, enhancing my skills in software
                                development.
                            </p>
                        </div>
                        <img
                            className="animated-image ml-8 w-[192px] hidden sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200 justify-center items-center "
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
