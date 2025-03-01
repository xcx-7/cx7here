import React from 'react';

const projectData = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    link: "https://projectone.com",
    image: "https://via.placeholder.com/300x200.png?text=Project+One"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    link: "https://projecttwo.com",
    image: "https://via.placeholder.com/300x200.png?text=Project+Two"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    link: "https://projectthree.com",
    image: "https://via.placeholder.com/300x200.png?text=Project+Three"
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
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
            </a>
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
