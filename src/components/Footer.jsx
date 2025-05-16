import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {

    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div
      className="flex flex-row bg-transparent m-auto w-[90%] max-w-[1240px] justify-between lg:justify-center mt-4"
      id="footer"
    >
      <p className="text-sm self-center footer-text py-2 my-1 lg:ml-8">© 2024 João Correia</p>
      <div className="flex justify-start mb-1 items-center lg:ml-8">
        <a
          href="https://github.com/JPSCorreia"
          target="_blank"
          rel="noreferrer"
          className=" shadow-[#67E8F9] p-2 m-1 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/joao-correia-0763bb318/"
          target="_blank"
          rel="noreferrer"
          className="shadow-[#67E8F9] p-2 m-1 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100"
        >
          <FaLinkedinIn size={24} />
        </a>

        <a
          href="mailto: jpscorreia.dev@gmail.com"
          className="color-[#121212] shadow-[#67E8F9] p-2 m-1 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100"
        >
          <AiOutlineMail size={24} />
        </a>
          <div 
            className="shadow-[#67E8F9] p-2 m-1 pr-0 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100 last-footer-icon"
            onClick={scrollToContact}
            >
            <BsFillPersonLinesFill size={24} />
          </div>
      </div>
    </div>
  );
}

export default Footer