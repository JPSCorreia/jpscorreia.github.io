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
          The requested URL '{window.location.hash}' was not found on the
          server.
        </p>
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
          onClick={() => {
            const referrer = document.referrer;
            const sameOrigin = referrer && referrer.startsWith(window.location.origin);
            
            if (sameOrigin) {
              window.history.back();
            } else {
              window.location.href = "/";
            }
          }}
          
          >
            <Button
                leftIcon={<TiArrowBack className='mb-1' size={32} />}
                color="#E5E7EB"
                variant="outline"
                className="flex flex-center text-xl text-center m-auto ease-in duration-100 send-message-button not-submitted-send-message-button hover:shadow-custom3"
                size='lg'
            >
              Go Back
            </Button>
          </div>
      </div>
    </main>
  );
}

export default NotFound