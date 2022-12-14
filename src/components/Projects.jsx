import React from 'react';
import { projects } from '../services/data';
import Project from './Project';

const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {projects.map((project) => (
          <Project
            id={project.id}
            key={project.id}
            title={project.title}
            category={project.category}
            linkDemo={project.linkDemo}
            linkImg={project.linkImg}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
