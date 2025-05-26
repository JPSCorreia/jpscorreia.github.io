import { NavLink } from 'react-router-dom';

const ProjectItem = (props) => {
    return (
        <div className="group project-item min-w-[100%] mx-auto">
            {props.isNavlink ? (
                <NavLink to={props.navlink}>
                    <div className="relative flex items-center p-3 py-6 md:p-0 md:min-h-[200px] justify-center cursor-pointer shadow-custom2 group-hover:shadow-custom4 group-hover:bg-gradient-to-r from-[#0891B2]/30 via-[#67E8F9]/30 to-[#0891B2]/30  shadow-[#ffffff] rounded-sm max-h-[100px] md:max-h-[200px]">
                            <img
                                className="max-h-[60px] max-w-[250px] md:max-h-[100%] md:max-w-[100%]"
                                src={props.backgroundImg}
                                alt="/"
                            />
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
