import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { RiHome2Fill } from 'react-icons/ri'
import { TiArrowBack } from 'react-icons/ti'
import { BsOctagon, BsOctagonFill } from 'react-icons/bs'
import { Button } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <main className="not-found w-[90%] m-auto h-screen p-2 flex ">
      <div className="flex flex-col text-center mt-80 mx-auto">
        <div className="flex flex-col md:flex-row mb-3 ">
          <div className="outer-home-return-button">
            <BsOctagon className="mx-auto" size={200} />
            <BsOctagon className="mx-auto" color="#121212" size={190} />
            <BsOctagonFill className="mx-auto" color="#ffffff" size={177} />
            <span className="my-auto z-[99999] font-bold text-7xl md:text-7xl text-[#121212] stop-sign tracking-wider">
              404
            </span>
          </div>
          <span className="text-gray-200 text-4xl md:text-5xl text-center my-auto ml-8">
            Page not found
          </span>
        </div>

        <p className="py-4 text-gray-200 text-center text-xl md:text-2xl mt-8">
          The requested URL '{window.location.pathname}' was not found on the
          server.
        </p>
        <HashLink to="/#">
          {/* color='#67E8F9' */}
          {/* 'w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 text-center p-3 text-xl hover:text-[#67E8F9] hover:scale-110 ease-in duration-100' */}
          <div
            className="
            
            mx-auto 
            bg-transparent
            p-4 
            m-1 
            mt-8 
            cursor-pointer 
            hover:scale-110 
            hover:text-[#67E8F9] 
            ease-in 
            duration-100
          "
          >
            <Button
              leftIcon={<TiArrowBack className='mb-1' size={32} />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center text-xl px-0 text-center m-auto hover:text-[#67E8F9] ease-in duration-100 "
              size='lg'
            >
              Go Back
            </Button>
            {/* <div className="flex flex-col justify-between">
              <div className="outer-home-return-button ">
                <RiHome2Fill className="my-auto" size={60} />
                <TiArrowBack className="my-auto" color="#121212" size={45} />
              </div>
              <span className="text-2xl my-auto">Go Back</span>
            </div> */}
          </div>
        </HashLink>
      </div>
    </main>
  );
}

export default NotFound