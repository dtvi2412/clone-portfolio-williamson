import React, { useEffect } from 'react';
import logo from '../assets/logo.png';

import {
  FaFacebookF,
  AiOutlineMenu,
  AiOutlineTwitter,
  FaPinterestP,
  TiSocialInstagram,
} from '../assets/icons';
import { useState } from 'react';
import { RESIZE_Y_DEFAULT, SCROLL_Y_DEFAULT } from '../constants';

const Header = () => {
  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);
  const [isFixedHeader, setIsFixedHeader] = useState(false);

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
          <a
            href="#home"
            className={`${
              isFixedHeader ? 'lg:w-[37px] lg:h-[50px]' : ''
            } w-[74px] h-[100px] relative md:translate-x-1/2 lg:translate-x-0 lg:inline-block`}
          >
            <img
              className="w-full h-full object-cover cursor-pointer"
              src={logo}
              alt="logo"
            />
          </a>

          {/* start navbar */}
          <nav className="hidden lg:block">
            <ul className="flex items-center justify-between gap-4">
              <li>
                <a
                  className="text-[13px] font-[500] hover:text-secondary relative"
                  href="#home"
                >
                  HOME
                  <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-[13px] font-[500] hover:text-secondary relative group "
                  href="#about-me"
                >
                  ABOUT
                  <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                </a>
              </li>

              <li>
                <a
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  href="#services"
                >
                  SERVICES
                  <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                </a>
              </li>

              <li>
                <a
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  href="#projects"
                >
                  PROJECTS
                  <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                </a>
              </li>

              <li>
                <a
                  className="text-[13px] font-[500] hover:text-secondary relative group"
                  href="#contact"
                >
                  CONTACT
                  <span className="h-[1px] w-[9px] bg-primary absolute left-0 -bottom-1/2 hidden group-hover:block"></span>
                </a>
              </li>
            </ul>
          </nav>
          {/* end navbar */}
        </div>
        {/* end logo */}

        {/* start social */}
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookF className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
          <AiOutlineTwitter className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
          <FaPinterestP className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
          <TiSocialInstagram className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
        </div>
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
            <a
              className="font-semibold block relative text-[14px] py-[10px]  text-green-cyan"
              href="#home"
            >
              HOME
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </a>
          </li>
          <li>
            <a
              className="font-semibold hover:text-green-cyan transition-all block relative text-[14px] py-[10px] "
              href="#about-me"
            >
              ABOUT ME
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </a>
          </li>
          <li>
            <a
              className="font-semibold hover:text-green-cyan transition-all block relative text-[14px] py-[10px] "
              href="#services"
            >
              SERVICES
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </a>
          </li>
          <li>
            <a
              className="font-semibold hover:text-green-cyan transition-all block relative text-[14px] py-[10px] "
              href="#projects"
            >
              PROJECTS
              <span className="absolute left-0 bottom-0 right-0  h-[1px] bg-gray-200"></span>
            </a>
          </li>
          <li>
            <a
              className="font-semibold hover:text-green-cyan transition-all block text-[14px] py-[10px] "
              href="#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* end navbar tablet and mobile */}
    </>
  );
};

export default Header;
