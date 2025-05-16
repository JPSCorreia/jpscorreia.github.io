import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import MovingText from 'react-moving-text';
import { useMediaQuery } from 'react-responsive';

const ScrollerTop = (props) => {
  const smallMobile = useMediaQuery({ query: '(max-width: 360px)' });

  const handleScrollTop = () => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="page-scroller flex flex-col items-center justify-center bg-transparent cursor-pointer hover:text-[#67E8F9] scroller-top mt-4"
      onClick={handleScrollTop}
    >
      <MovingText
        className="space-mono flex flex-col items-center ease-in duration-100 text-md tracking-wide"
        type="pulse"
        duration="1000ms"
        delay="0s"
        direction="alternate-reverse"
        timing="ease-in-out"
        iteration="infinite"
        fillMode="none"
      >
        scroll to top
        <div className="hover:text-[#67E8F9] hover:scale-110 mb-4 p-2">
          <HiOutlineChevronDoubleUp size={smallMobile ? "16" : "32"} />
        </div>
      </MovingText>
    </div>
  );
};

export default ScrollerTop;
