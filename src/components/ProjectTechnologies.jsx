import React from 'react'

const ProjectTechnologies = (props) => {

  return (
<div
      className="col-span-4 lg:col-span-1 shadow-[#67E8F9] mb-4"
      data-aos="fade-left"
      data-aos-anchor={props.AOSAnchor}
      data-aos-duration="400"
    >
      <div className="">
        <p className="text-start text-xl font-bold mt-4 mb-2">Technologies</p>
        <div>
          {props.iconArray.map((icon) => (
            <div key={`${icon.name}-icon`} className="flex flex-row flex-start justify-start">
              <div className="flex items-center">
                {icon.icon}
              </div>
              <div className="m-2">
                <h3>{icon.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectTechnologies