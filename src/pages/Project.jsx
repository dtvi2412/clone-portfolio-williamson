import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { projects } from '../services/data';
const Project = () => {
  const { name } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const projectCurrent = projects.find((project) => project.title === name);

    setProject(projectCurrent);
  }, [name]);

  return (
    <section className="px-[15px] lg:px-[45px] my-8">
      {/* start title project */}
      <div className="relative mb-16">
        <h1 className="font-bold uppercase">{project?.title}</h1>
        <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
      </div>
      {/* end title project */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2 border border-secondary">
          <img
            className="w-full h-full object-cover"
            src={project?.linkImg}
            alt={project?.title}
          />
        </div>
        <div className="col-span-1">
          <div className="text-[0.85rem]">
            <h3 className="font-[500] ">CATEGORY</h3>
            <p className="text-secondary">{project?.category}</p>
          </div>
          <h1 className="my-8 uppercase font-bold">{project?.title}</h1>
          <p className="text-secondary text-[0.85rem] mb-4">
            {project?.description}
          </p>
          <a
            className="hover:text-green-cyan duration-300"
            rel="noreferrer"
            target="_blank"
            href={project?.linkDemo}
          >
            Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
