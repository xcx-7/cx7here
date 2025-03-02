import React from 'react';
import img1 from "./assets/1.png"
import img2 from "./assets/2.png"
import img3 from "./assets/3.png"


const projectData = [
  {
    title: "Chat App",
    description: "I created this using MERN Stack",
    link: "https://kona-a8bn.onrender.com/",
    image: img1
  },
  {
    title: "Staganography Tool",
    description: "using this u can hide text in a text file, image in image, and video in a video🙃",
    link: "https://steganographyliv.netlify.app/",
    image: img2
  },
  {
    title: "Strange Portfolio",
    description: "Idk what i created, lol. I just tried to create something unique.",
    link: "https://xcx-7.github.io/cx-7/",
    image: img3
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
