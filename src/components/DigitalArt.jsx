import React, { useState } from 'react';
import { arts } from '../services/data';
import ZoomProject from './ZoomProject';

function DigitalArt() {
  const [projectCurrent, setProjectCurrent] = useState({
    linkImg: '',
    isOpen: false,
  });

  const handleZoom = (linkImg) => {
    setProjectCurrent((prev) => ({
      ...prev,
      isOpen: true,
      linkImg,
    }));
  };

  const handleCloseZoom = () => {
    setProjectCurrent((curr) => ({
      linkImg: '',
      isOpen: false,
    }));
  };

  const renderArts = () => {
    return arts.map((art) => (
      <div onClick={() => handleZoom(art.linkImg)} key={art.id}>
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={art.linkImg}
          alt={'art'}
        />
      </div>
    ));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
        {renderArts()}
      </div>

      {projectCurrent.isOpen && (
        <ZoomProject
          onCloseZoom={handleCloseZoom}
          linkImg={projectCurrent.linkImg}
        />
      )}
    </>
  );
}

export default DigitalArt;
