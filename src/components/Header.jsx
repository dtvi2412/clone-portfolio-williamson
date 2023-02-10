import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AiOutlineMenu } from '../assets/icons';
import { logotv } from '../assets/images';
import { useState } from 'react';
import { RESIZE_Y_DEFAULT, SCROLL_Y_DEFAULT } from '../constants';
import SocialPersonal from './SocialPersonal';

const Header = () => {
  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  const { pathname } = useLocation();
  const locationCurrent = pathname.split('/')[1];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= SCROLL_Y_DEFAULT) {
        setIsFixedHeader(true);
      } else {
        setIsFixedHeader(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.screen.width <= RESIZE_Y_DEFAULT) {
        setIsFixedHeader(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`bg-white z-50  px-[15px] md:px-[45px] flex items-center justify-center md:justify-between ${
          isFixedHeader
            ? 'lg:animate-fixed-header lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:h-[50px]'
            : 'h-[100px] lg:h-[178px]'
        }`}
      >
        {/* start hambuger working mobile */}
        <div
          className="lg:hidden"
          onClick={() => setIsOpenNavbarMobile((prev) => !prev)}
        >
          <AiOutlineMenu className="absolute md:block left-[15px] cursor-pointer hover:text-green-cyan" />
        </div>
        {/* end hambuger */}
        {/* start logo */}
        <div className=" md:flex items-center justify-between gap-4">
          <Link
            to="/"
            className={`relative md:translate-x-1/2 lg:translate-x-0 lg:inline-block`}
          >
            {/* w-[74px] h-[100px] */}
            <img
              className={`${
                isFixedHeader ? 'lg:w-[37px] lg:h-[37px]' : ''
              }  w-[54px] h-[54px] object-cover cursor-pointer`}
              src={logotv}
              alt="logotv"
            />
          </Link>

          {/* start navbar */}
          <nav className="hidden lg:block">
            <ul className="flex items-center justify-between gap-4">
              <li>
                <Link
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  to="/"
                >
                  HOME
                  {locationCurrent === '' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
                  )}
                  {locationCurrent !== '' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[13px] font-[500] hover:text-secondary relative group "
                >
                  ABOUT
                  {locationCurrent === 'about' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
                  )}
                  {locationCurrent !== 'about' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                  )}
                </Link>
              </li>

              {/* <li>
                <a
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  href="#services"
                >
                  SERVICES
                  <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                </a>
              </li> */}

              <li>
                <Link
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  to="/projects"
                >
                  PROJECTS
                  {locationCurrent === 'projects' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
                  )}
                  {locationCurrent !== 'projects' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  to="/contact"
                >
                  CONTACT
                  {locationCurrent === 'contact' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
                  )}
                  {locationCurrent !== 'contact' && (
                    <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
          {/* end navbar */}
        </div>
        {/* end logo */}

        {/* start social */}
        <SocialPersonal />
        {/* end social */}
      </header>
      {/* start navbar tablet and mobile */}
      <nav
        className={`${
          isOpenNavbarMobile
            ? 'animate-open-nav h-auto'
            : 'animate-close-nav h-0'
        } px-[15px]  lg:hidden overflow-y-hidden`}
      >
        <ul>
          <li>
            <Link
              onClick={() => setIsOpenNavbarMobile(false)}
              className="font-semibold block relative text-[14px] py-[10px]  text-green-cyan"
              to="/"
            >
              HOME
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpenNavbarMobile(false)}
              className="font-semibold hover:text-green-cyan transition-all block relative text-[14px] py-[10px] "
              to="/about"
            >
              ABOUT ME
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </Link>
          </li>
          <li>
            <a
              onClick={() => setIsOpenNavbarMobile(false)}
              className="font-semibold hover:text-green-cyan transition-all block relative text-[14px] py-[10px] "
              href="#services"
            >
              SERVICES
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </a>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpenNavbarMobile(false)}
              className="font-semibold hover:text-green-cyan transition-all block relative text-[14px] py-[10px] "
            >
              PROJECTS
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpenNavbarMobile(false)}
              className="font-semibold hover:text-green-cyan transition-all block text-[14px] py-[10px] "
              href="#contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* end navbar tablet and mobile */}
    </>
  );
};

export default Header;
