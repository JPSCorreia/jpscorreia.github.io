import React from 'react'
import emporiumImg from '../assets/projects/emporium-full.png'
import { SiExpress, SiAuth0, SiRedux, SiNodedotjs, SiReact, SiPostgresql} from 'react-icons/si'
import { Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons'

const Emporium = () => {
  return (
    <div id="emporium" className="w-full">
      <div className="w-screen h-[20vh] lg:h-[30vh] relative shadow-lg shadow-[#67E8F9] rounded-xl">
        <img
          className="absolute left-0 h-[20vh] lg:h-[30vh] w-[100%] z-10 object-cover"
          src={emporiumImg}
          alt="/"
          // data-aos="fade-in"
          // data-aos-once
          // data-aos-duration="1000"
        />
        <div className="absolute left-0 w-full top-[20] h-[20vh] lg:h-[30vh] bg-[#121212]/70 z-10"></div>
        <HashLink to="/#projects">
          <div className="absolute top-[94%] z-10 p-6 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p
              className="text-xl tracking-widest uppercase header-text-top text-[#67E8F9] hover:underline underline-offset-4 "
              // data-aos="fade-right"
              // data-aos-anchor="#emporium"
              // data-aos-duration="400"
            >
              Projects
            </p>
          </div>
        </HashLink>
      </div>
      <NavLink to={'/tldreddit'}>
        <div className="flex-row flex-start justify-start hidden 2xl:flex absolute top-[68%] left-[5%] ">
          <ChevronLeftIcon
            className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100"
            w={12}
            h={12}
          />
        </div>
      </NavLink>
      <NavLink to={'/tldreddit'}>
        <div className="flex-row flex-start justify-start hidden 2xl:flex absolute top-[68%] left-[92%] ">
          <ChevronRightIcon
            className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100"
            w={12}
            h={12}
          />
        </div>
      </NavLink>

      <div className="max-w-[1240px] mx-auto p-6 grid lg:grid-cols-5 gap-8 ">
        <div className="col-span-4 m-auto">
          <h2
            className="mb-5"
            // data-aos="fade-right"
            // data-aos-anchor="#emporium"
            data-aos-duration="400"
          >
            Emporium
          </h2>
          <p
            // data-aos="fade-right"
            // data-aos-anchor="#emporium"
            // data-aos-duration="400"
            className="w-[90%]"
          >
            Emporium is a PERN stack e-commerce Single Page Application. Users
            can register and login to the application, browse or search for
            products, place an order, make a purchase and finally leave a review
            for the products they bought. You can also add and edit different
            delivery addresses and switch between a light and dark color theme.
          </p>
          <br />
          <p
            // data-aos="fade-right"
            // data-aos-anchor="#emporium"
            // data-aos-duration="400"
            className="w-[90%]"
          >
            This application was built using React, bootstrapped with
            create-react-app and is hosted on Heroku. User registration and
            login are handled by Auth0, state management with Redux and routing
            with react-router. User interface was built with ChakraUI as a
            component library and using formik and yup for form management and
            validation. Backend API is handled by an Express.js server using
            various middleware libraries for server protection and token
            validation like helmet, hpp and csurf. Database is powered by
            PostgreSQL.
          </p>
        </div>
        <div
          className="col-span-4 lg:col-span-1 shadow-[#67E8F9] mt-2 md:pl-8 pb-2"
          // data-aos="fade-left"
          // data-aos-anchor="#emporium"
          // data-aos-duration="400"
        >
          <div className="">
            <p className="text-start text-xl font-bold my-2">Technologies</p>
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
                  <SiNodedotjs color="#43853d" size={24} />
                </div>
                <div className="m-2">
                  <h3>Node.js</h3>
                </div>
              </div>
              <div className="flex flex-row flex-start justify-start">
                <div className="flex items-center">
                  <SiExpress color="#ffffff" size={24} />
                </div>
                <div className="m-2">
                  <h3>Express.js</h3>
                </div>
              </div>
              <div className="flex flex-row flex-start justify-start">
                <div className="flex items-center">
                  <SiPostgresql color="#31648d" size={24} />
                </div>
                <div className="m-2">
                  <h3>PostgreSQL</h3>
                </div>
              </div>
              <div className="flex flex-row flex-start justify-start">
                <div className="flex items-center">
                  <SiAuth0 color="#ff541a" size={24} />
                </div>
                <div className="m-2">
                  <h3>Auth0</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex"
          // data-aos="fade-up"
          // data-aos-anchor="#emporium"
          // data-aos-duration="400"
        >
          <a
            href="https://emporium-shop.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              leftIcon={<IoPlay />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center w-[90%] text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 "
              size="lg"
            >
              Demo
            </Button>
          </a>
          <a
            href="https://github.com/JPSCorreia/emporium-shop-frontend"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              leftIcon={<FaGithub />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center w-[90%] text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100"
              size="lg"
            >
              Code
            </Button>
          </a>
        </div>
        {/* <NavLink to={'/tldreddit'}>
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

export default Emporium