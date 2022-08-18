import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ZoomProject from './ZoomProject';
import { Link } from 'react-router-dom';

const Project = ({ id, title, category, linkImg, linkDemo }) => {
  const [projectCurrent, setProjectCurrent] = useState({
    id: '',
    linkImg: '',
    isOpen: false,
  });

  const handleCloseZoom = () => {
    setProjectCurrent((curr) => ({
      ...curr,
      isOpen: false,
    }));
  };

  const handleZoom = () => {
    setProjectCurrent({
      id,
      linkImg,
      isOpen: true,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="group relative border border-gray-300 overflow-hidden">
          <img
            className="group-hover:scale-110 scale-100 duration-500 w-full h-full object-cover"
            src={linkImg}
            alt={title}
          />
          {/* start hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500 absolute inset-0 bg-[rgba(255,255,255,0.8)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                onClick={handleZoom}
                className="uppercase font-bold bg-primary hover:bg-green-cyan duration-500 rounded-full px-4 py-2 text-white text-[0.8rem] mr-1 cursor-pointer"
              >
                Zoom
              </span>
              <span className="uppercase font-bold bg-primary hover:bg-green-cyan duration-500 rounded-full px-4 py-2 text-white text-[0.8rem] ml-1 cursor-pointer">
                <Link to={`/projects/${title}`}>View</Link>
              </span>
            </div>
          </div>
          {/* end hover */}
        </div>
        <div>
          <h1 className="text-primary font-semibold uppercase">{title}</h1>
          <p className="text-secondary text-[0.8rem]">{category}</p>
        </div>
      </div>
      {projectCurrent.isOpen && projectCurrent.id === id && (
        <ZoomProject
          onCloseZoom={handleCloseZoom}
          linkImg={projectCurrent.linkImg}
        />
      )}
    </>
  );
};

Project.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  linkImg: PropTypes.string.isRequired,
  linkDemo: PropTypes.string.isRequired,
};

export default Project;
