import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from '../assets/icons';

const ZoomProject = ({ linkImg, onCloseZoom }) => {
  return (
    <div className="fixed inset-0  bg-black-rgba z-[999]" onClick={onCloseZoom}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[546px] lg:h-[546px]">
          <img
            className="w-full h-full object-cover"
            src={linkImg}
            alt="zoom-img"
          />
          <div
            className="absolute right-2 -bottom-8 text-white"
            onClick={onCloseZoom}
          >
            <AiOutlineClose className="text-[18px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

ZoomProject.propTypes = {
  linkImg: PropTypes.string.isRequired,
  onCloseZoom: PropTypes.func,
};

export default ZoomProject;
