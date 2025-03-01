import React from 'react';

const projectData = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    link: "https://projectone.com"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    link: "https://projecttwo.com"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    link: "https://projectthree.com"
  },
  // Add more projects as needed...
];

function Projects() {
  return (
    <div className="page projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
