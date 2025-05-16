/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome, FaUserCircle, FaGraduationCap, FaEye } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { GrMail } from 'react-icons/gr';
import 'aos/dist/aos.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id) => {
        const atHome = location.pathname === '/' && !location.hash;
        if (atHome) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            sessionStorage.setItem('scrollTarget', id);
            navigate('/');
        }
    };

    return (
        <>
            <div
                id="navbar"
                className="fixed w-full h-20 bg-[#121212]/70 shadow-[#121212] z-[9999]"
            ></div>
            <div className="fixed w-full h-14 z-[9999]">
                <div className="flex justify-end items-center h-full w-full">
                    <div
                        data-aos="fade-in"
                        data-aos-once
                        data-aos-duration="400"
                    >
                        <ul className="hidden lg:flex uppercase mr-[7px] justify-right">
                            <li
                                onClick={() => scrollTo('home')}
                                className="w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 text-center p-3 pt-[1.95rem] text-xl hover:text-[#67E8F9] hover:scale-105 ease-in duration-100 rounded-sm"
                            >
                                <div className="flex flex-col flex-center">
                                    <FaHome
                                        className="flex-center m-auto"
                                        size={32}
                                    />
                                    <span className="text-xs mt-1 ">Home</span>
                                </div>
                            </li>
                            <li
                                onClick={() => scrollTo('about')}
                                className="w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 p-3 pt-[1.95rem] text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-100 rounded-sm"
                            >
                                <div className="flex flex-col flex-center">
                                    <FaUserCircle
                                        className="flex-center m-auto"
                                        size={32}
                                    />
                                    <span className="text-xs mt-1">About</span>
                                </div>
                            </li>
                            <li
                                onClick={() => scrollTo('skills')}
                                className="w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 p-3 pt-[1.95rem] text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-100 rounded-sm"
                            >
                                <div className="flex flex-col flex-center">
                                    <FaGraduationCap
                                        className="flex-center m-auto"
                                        size={32}
                                    />
                                    <span className="text-xs mt-1">Skills</span>
                                </div>
                            </li>
                            <li
                                onClick={() => scrollTo('projects')}
                                className="w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 p-3 pt-[1.95rem] text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-100 rounded-sm"
                            >
                                <div className="flex flex-col flex-center">
                                    <FaEye
                                        className="flex-center m-auto mr-2"
                                        size={32}
                                    />
                                    <span className="text-xs mt-1 whitespace-nowrap">
                                        Projects
                                    </span>
                                </div>
                            </li>
                            <li
                                onClick={() => scrollTo('contact')}
                                className="w-[100px] hover:shadow-custom pl-6 pr-6 p-3 ml-2 pt-[1.95rem] text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-100 rounded-sm"
                            >
                                <div className="flex flex-col flex-center">
                                    <GrMail
                                        className="flex-center m-auto mr-2"
                                        size={32}
                                    />
                                    <span className="text-xs mt-1 whitespace-nowrap">
                                        Contact
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div
                            onClick={handleNav}
                            className="lg:hidden mr-1.5 sm:mr-2 md:mr-4 cursor-pointer p-2 mt-6 hover:scale-110 hover:text-[#67E8F9] ease-in duration-100"
                        >
                            {nav ? (
                                <AiOutlineClose
                                    className="ease-in duration-200"
                                    size={32}
                                />
                            ) : (
                                <AiOutlineMenu
                                    className="ease-in duration-200"
                                    size={32}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={
                            nav
                                ? 'p-0 shadow-sm lg:hidden fixed h-screen right-0 top-20 sidebar sm:w-20 md:w-20 lg:w-20 ease-in duration-200 bg-[#121212]/70'
                                : 'p-0 shadow-sm shadow-[#67E8F9] fixed h-screen right-[-50%] top-20 sidebar ease-in duration-200 bg-[#121212]/70'
                        }
                    >
                        <div>
                            <div className="">
                                <ul className="flex flex-col uppercase justify-center align-center mt-6 mr-2 sidebar-navbar">
                                    <li
                                        onClick={() => scrollTo('home')}
                                        className="w-[100%]  hover:shadow-custom ml-[3px] py-4 mt-4 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 sidebar-button"
                                    >
                                        <div className="flex flex-col flex-center">
                                            <FaHome
                                                className="flex-center m-auto"
                                                size={32}
                                            />
                                            <span className="text-[0.6rem] md:text-xs md:mt-1">
                                                Home
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => scrollTo('about')}
                                        className="w-[100%] hover:shadow-custom ml-[3px] py-4 mt-4 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 sidebar-button"
                                    >
                                        <div className="flex flex-col flex-center">
                                            <FaUserCircle
                                                className="flex-center m-auto"
                                                size={32}
                                            />
                                            <span className="text-[0.6rem] md:text-xs md:mt-1">
                                                About
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => scrollTo('skills')}
                                        className="w-[100%]  hover:shadow-custom ml-[3px] py-4 mt-4 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 sidebar-button"
                                    >
                                        <div className="flex flex-col flex-center">
                                            <FaGraduationCap
                                                className="flex-center m-auto"
                                                size={32}
                                            />
                                            <span className="text-[0.6rem] md:text-xs md:mt-1">
                                                Skills
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => scrollTo('projects')}
                                        className="w-[100%] hover:shadow-custom ml-[2px] py-4 mt-4 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 sidebar-button"
                                    >
                                        <div className="flex flex-col flex-center">
                                            <FaEye
                                                className="flex-center m-auto"
                                                size={32}
                                            />
                                            <span className="text-[0.6rem] md:text-xs md:mt-1">
                                                Projects
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => scrollTo('contact')}
                                        className="w-[100%] hover:shadow-custom ml-[3px] py-4 mt-4 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 sidebar-button"
                                    >
                                        <div className="flex flex-col flex-center">
                                            <GrMail
                                                className="flex-center m-auto"
                                                size={32}
                                            />
                                            <span className="text-[0.6rem] md:text-xs md:mt-1">
                                                Contact
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
