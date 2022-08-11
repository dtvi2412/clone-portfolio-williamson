import React from 'react';
import logo from '../assets/logo.png';

import {
  FaFacebookF,
  AiOutlineMenu,
  AiOutlineTwitter,
  FaPinterestP,
  TiSocialInstagram,
} from '../assets/icons';

const Header = () => {
  return (
    <>
      <header className="h-[100px] px-[15px] md:px-[45px] flex items-center justify-center md:justify-between">
        {/* start hambuger working mobile */}
        <div className="lg:hidden">
          <AiOutlineMenu className="absolute md:block left-[15px] cursor-pointer hover:text-green-400" />
        </div>
        {/* end hambuger */}
        {/* start logo */}
        <div className=" md:flex items-center justify-between gap-4">
          <a
            href="#home"
            className="w-[74px] h-[100px] relative md:translate-x-1/2 lg:translate-x-0 lg:inline-block "
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
                <a className="text-[13px] font-[500]" href="#home">
                  HOME
                </a>
              </li>
              <li>
                <a className="text-[13px] font-[500]" href="#about-me">
                  ABOUT
                </a>
              </li>

              <li>
                <a className="text-[13px] font-[500]" href="#services">
                  SERVICES
                </a>
              </li>

              <li>
                <a className="text-[13px] font-[500]" href="#projects">
                  PROJECTS
                </a>
              </li>

              <li>
                <a className="text-[13px] font-[500]" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
          {/* end navbar */}
        </div>
        {/* end logo */}

        {/* start social */}
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookF className="text-[13px]" />
          <AiOutlineTwitter className="text-[13px]" />
          <FaPinterestP className="text-[13px]" />
          <TiSocialInstagram className="text-[13px]" />
        </div>
        {/* end social */}
      </header>
    </>
  );
};

export default Header;
