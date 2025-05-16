import { NavLink } from 'react-router-dom';

const ProjectItem = (props) => {
    return (
        <div className="group project-item w-[95%] max-w-[550px] mx-auto">
            {props.isNavlink ? (
                <NavLink to={props.navlink}>
                    <div className="relative flex items-center justify-center cursor-pointer h-auto w-full shadow-custom2 group-hover:shadow-custom4 group-hover:bg-gradient-to-r from-[#0891B2]/30 via-[#67E8F9]/30 to-[#0891B2]/30  shadow-[#ffffff] p-3 py-8 md:py-10 project-item-container rounded-sm">
                        <>
                            <img
                                className=""
                                src={props.backgroundImg}
                                alt="/"
                            />
                        </>
                    </div>
                </NavLink>
            ) : (
                <a
                    href="https://github.com/JPSCorreia"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="relative flex items-center justify-center cursor-pointer h-auto w-full shadow-custom2 group-hover:shadow-custom4 group-hover:bg-gradient-to-r from-[#0891B2]/30 via-[#67E8F9]/30 to-[#0891B2]/30  shadow-[#ffffff] p-3 py-4 md:py-10 project-item-container rounded-sm">
                        <>
                            <img
                                className=""
                                src={props.backgroundImg}
                                alt="/"
                            />
                        </>
                    </div>
                </a>
            )}
        </div>
    );
};

export default ProjectItem;
