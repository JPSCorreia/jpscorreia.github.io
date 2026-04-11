import ProjectItem from './ProjectItem';
import tldreddit from '../assets/projects/TLDReddit-logo3.png';
import emporium from '../assets/projects/emporium-logo4.png';
import biorama from '../assets/projects/biorama-logo.webp';
import lifecoach from '../assets/projects/lifecoach-logo.png';
import rauva from '../assets/projects/rauva-logo.webp';
// import github from '../assets/projects/github-projects-logo.png';

import Scroller from './Scroller';

const Projects = () => {
    return (
        <div
            id="projects"
            className="w-[90%] m-auto min-h-screen pt-20 items-center flex flex-col"
        >
            <div
                className="max-w-[1240px] w-full flex-1 mx-auto flex flex-col items-center justify-center"
                id="projects-container"
            >
                <div className="flex flex-col w-full">
                    <p
                        className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top projects-top-text"
                        data-aos="fade-right"
                        data-aos-anchor="#projects"
                        data-aos-duration="400"
                    >
                        Projects
                    </p>
                    <h2
                        className="py-2 tracking-wide text-2xl md:text-3xl space-mono font-normal mb-4 projects-top-text-2"
                        data-aos="fade-right"
                        data-aos-anchor="#projects"
                        data-aos-duration="400"
                    >
                        What I've Worked On
                    </h2>
                    <div
                        className="grid md:grid-cols-2 gap-6 md:gap-8 mt-4 md:mt-6 projects-bottom-container"
                        data-aos="fade-right"
                        data-aos-anchor="#projects"
                        data-aos-duration="400"
                    >
                        <ProjectItem
                            title="Biorama"
                            projectType="Full Stack Project"
                            navlink="/biorama"
                            isNavlink={true}
                            backgroundImg={biorama}
                            projectUrl="emporium"
                        />
                        <ProjectItem
                            title="Life Coach"
                            projectType="Full Stack Project"
                            navlink="/lifecoach"
                            isNavlink={true}
                            backgroundImg={lifecoach}
                            projectUrl="emporium"
                        />
                        <ProjectItem
                            title="Emporium"
                            projectType="Full Stack Project"
                            navlink="/emporium"
                            isNavlink={true}
                            backgroundImg={emporium}
                            projectUrl="emporium"
                        />
                        <ProjectItem
                            title="TLDReddit"
                            projectType="React Project"
                            navlink="/tldreddit"
                            isNavlink={true}
                            backgroundImg={tldreddit}
                            projectUrl="tldreddit"
                        />
                        <div className="md:col-span-2 md:flex md:justify-center">
                            <div className="md:w-1/2">
                                <ProjectItem
                                    title="Rauva"
                                    projectType="Freelance Project"
                                    navlink="/rauva"
                                    isNavlink={true}
                                    backgroundImg={rauva}
                                    projectUrl="rauva"
                                    imgClassName="max-h-[40px] max-w-[160px] md:max-h-[70px] md:max-w-[280px]"
                                />
                            </div>
                        </div>

                        {/* <ProjectItem
                            title="GitHub Projects"
                            projectType="GitHub Projects"
                            isNavlink={false}
                            navlink="https://github.com/JPSCorreia"
                            backgroundImg={github}
                            projectUrl="github"
                        /> */}
                    </div>
                </div>
            </div>
            <div id="contact-top"></div>
            <Scroller
                scrollerID="projects-scroller"
                class="page-scroller"
                link="#contact"
                text="contact"
                AOSAnimation="fade-up"
                AOSAnchor="#after-skills"
                AOSOffset="-50"
                AOSAnchorPlacement="bottom-bottom"
            />
        </div>
    );
};

export default Projects;
