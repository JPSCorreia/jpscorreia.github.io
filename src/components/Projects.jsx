import ProjectItem from './ProjectItem';
import tldreddit from '../assets/projects/TLDReddit-logo3.png';
import emporium from '../assets/projects/emporium-logo4.png';
import github from '../assets/projects/github-projects-logo.png';

import Scroller from './Scroller';

const Projects = () => {
    return (
        <div
            id="projects"
            className="w-[90%] m-auto h-[90vh] lg:h-screen items-center flex flex-col"
        >
            <div
                className="max-w-[1240px] w-full h-full mx-auto flex flex-col items-center md:justify-center"
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
                        className="grid grid-cols-1 gap-8 mt-8 md:mt-16 projects-bottom-container"
                        data-aos="fade-right"
                        data-aos-anchor="#projects"
                        data-aos-duration="400"
                    >
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
                        <ProjectItem
                            title="GitHub Projects"
                            projectType="GitHub Projects"
                            isNavlink={false}
                            navlink="https://github.com/JPSCorreia"
                            backgroundImg={github}
                            projectUrl="github"
                        />
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
