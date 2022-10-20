/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import tldrImg from '../assets/projects/tldreddit-full.png'
import {SiJest,  SiReactrouter, SiRedux, SiReact} from 'react-icons/si'
import {DiSass} from 'react-icons/di'
import { Button, Box } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

const TLDReddit = () => {
  return (
    <div id="tldreddit" className="w-full ">
      <div
        className="w-screen h-[20vh] lg:h-[30vh] relative shadow-lg shadow-[#67E8F9] rounded-xl" /*top-20 */
      >
        <img
          className="absolute left-0 h-[20vh] lg:h-[30vh] w-[100%] z-10 object-cover"
          src={tldrImg}
          alt="/"
          data-aos="fade-in"
          data-aos-once
          data-aos-duration="1000"
        />
        <div className="absolute left-0 w-full top-[20] h-[20vh] lg:h-[30vh] bg-[#121212]/70 z-10"></div>
        <HashLink to="/#projects">
          <div className="absolute top-[94%] z-10 p-6 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <p
              className="text-xl tracking-widest uppercase header-text-top text-[#67E8F9] hover:underline underline-offset-4 mb-2 "
              // data-aos="fade-right"
              // data-aos-anchor="#tldreddit"
              // data-aos-duration="400"
            >
              Projects
            </p>
          </div>
        </HashLink>
      </div>
      <NavLink to={'/emporium'}>
        <div className="flex-row flex-start justify-start hidden 2xl:flex absolute top-[71.2%] left-[5%] ">
          <ChevronLeftIcon
            className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100"
            w={12}
            h={12}
          />
        </div>
      </NavLink>
      <NavLink to={'/emporium'}>
        <div className="flex-row flex-start justify-start hidden 2xl:flex absolute top-[71.2%] left-[92%] ">
          <ChevronRightIcon
            className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100"
            w={12}
            h={12}
          />
        </div>
      </NavLink>
      <div className="max-w-[1240px] mx-auto p-6 grid lg:grid-cols-5 gap-8 ">
        <div className="col-span-4 ">
          <h2
            className="pb-2 mb-4"
            data-aos="fade-right"
            data-aos-anchor="#tldreddit"
            data-aos-duration="400"
          >
            TLDReddit
          </h2>
          <p
            data-aos="fade-right"
            data-aos-anchor="#tldreddit"
            data-aos-duration="400"
          >
            TLDReddit is an alternative way to browse reddit as a Single Page
            Application. Users are able browse any subreddit they want, they can
            expand any thread and comment they want and preview all types of
            media without ever needing to reload the page. They can route to any
            subreddit and comment page by writting in the browser's address bar.
          </p>
          <br />
          <p
            data-aos="fade-right"
            data-aos-anchor="#tldreddit"
            data-aos-duration="400"
          >
            This application was built using React, bootstrapped with
            create-react-app and is hosted on netlify. Data handling was done by
            fetching data using reddit's API, routing was handled by
            react-router and state management by Redux. Jest was used as the
            testing framework and the user interface was built using Sass with
            no use of a component library.
          </p>
        </div>
        <div
          className="col-span-4 lg:col-span-1 shadow-[#67E8F9] mt-2 pl-0 pb-2 pr-4"
          data-aos="fade-left"
          data-aos-anchor="#tldreddit"
          data-aos-duration="400"
        >
          <div className="p-2 pl-0">
            <p className="text-start text-xl font-bold pb-2">Technologies</p>
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
                  <SiReactrouter color="#ca031b" size={24} />
                </div>
                <div className="m-2">
                  <h3>React Router</h3>
                </div>
              </div>
              <div className="flex flex-row flex-start justify-start">
                <div className="flex items-center">
                  <DiSass color="#c76594" size={24} />
                </div>
                <div className="m-2">
                  <h3>Sass</h3>
                </div>
              </div>
              <div className="flex flex-row flex-start justify-start">
                <div className="flex items-center">
                  <SiJest color="#c03c14" size={24} />
                </div>
                <div className="m-2">
                  <h3>Jest</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row"
          data-aos="fade-up"
          data-aos-anchor="#tldreddit"
          data-aos-duration="400"
        >
          <a
            href="https://serene-sinoussi-2933f8.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              leftIcon={<IoPlay />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100"
              size="lg"
            >
              Demo
            </Button>
          </a>
          <a
            href="https://github.com/JPSCorreia/TLDReddit"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              leftIcon={<FaGithub />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center ml-2 text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 "
              size="lg"
            >
              Code
            </Button>
          </a>
        </div>
        {/* <NavLink to={'/emporium'}>
          <Button
            leftIcon={<FaGithub />}
            color="#ffffff"
            variant="outline"
            className="flex flex-center ml-4 text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100"
            size="lg"
          >
            Next
          </Button>
        </NavLink> */}
      </div>
    </div>
  );
}

export default TLDReddit