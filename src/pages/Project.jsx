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
      <div className="relative">
        <h1 className="font-bold uppercase">{project?.title}</h1>
        <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
      </div>
      {/* end title project */}
    </section>
  );
};

export default Project;
