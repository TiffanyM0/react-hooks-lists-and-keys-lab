import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsElements = projects.map((project)=>{
    return (<ProjectItem key={project.id} name={projects.name} about={projects.about} technologies={projects.technologies}/> )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {/* {projects.map((project)=>{<ProjectItem key={project.id}/>})} */}
        {projectsElements}
      </div>
    </div>
  );
}

export default ProjectList;
