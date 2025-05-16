import { HiChevronDown } from 'react-icons/hi';
import MovingText from 'react-moving-text';
import { useMediaQuery } from 'react-responsive';

const Scroller = (props) => {
  const smallMobile = useMediaQuery({ query: '(max-width: 360px)' });
  const displayOrNot = useMediaQuery({ query: '(max-width: 1023px)' });

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = props.link.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    displayOrNot ? null :
    <div
      id={props.scrollerID}
      className="flex flex-col items-center justify-center bg-transparent cursor-pointer hover:text-[#67E8F9] mt-2 z-500 scroller-normal"
      data-aos={props.AOSAnimation}
      data-aos-anchor={props.AOSAnchor}
      data-aos-offset={props.AOSOffset}
      data-aos-duration="200"
      data-aos-delay="0"
      data-aos-anchor-placement={props.AOSAnchorPlacement}
      onClick={handleClick}
    >
      <MovingText
        className="space-mono flex flex-col items-center ease-in duration-100 text-md tracking-wide "
        type="pulse"
        duration="750ms"
        delay="0s"
        direction="alternate-reverse"
        timing="ease-in-out"
        iteration="infinite"
        fillMode="none"
      >
        {props.text}
        <div className=" hover:text-[#67E8F9] hover:scale-110 mb-4">
          <HiChevronDown size={smallMobile ? "24" : "48"} />
        </div>
      </MovingText>
    </div>
  );
};

export default Scroller;
