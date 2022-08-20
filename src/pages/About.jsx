import React from 'react';
import {
  FaFacebookF,
  AiOutlineTwitter,
  FaPinterestP,
  TiSocialInstagram,
} from '../assets/icons';
import { aboutme } from '../assets/images';
const About = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2  gap-20 place-items-center">
      {/* start left */}
      <div className="text-center flex flex-col items-center gap-20">
        <h1 className="inline relative text-[22px] font-[500] uppercase">
          About Me
          <span className="h-[1px] w-[9px] bg-primary absolute left-1/2 -translate-x-1/2 -bottom-1/2"></span>
        </h1>

        <div>
          <p className="text-secondary text-[0.875rem] tracking-wide">
            My name is Vi, after graduating from Cao Đẳng Kỹ Thuật Cao Thắng
            college, I got interested in Front-End web programming. So I learned
            more knowledge at Cybersoft Academy and F8 Fullstack and trained at
            home.
          </p>
        </div>
        {/* start social */}
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookF className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
          <AiOutlineTwitter className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
          <FaPinterestP className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
          <TiSocialInstagram className="text-[14px] hover:text-green-cyan cursor-pointer transition-all" />
        </div>
        {/* end social */}
      </div>
      {/* end left */}
      {/* start right */}
      <div className="rounded-full w-[220px] h-[220px] md:w-[400px] md:h-[400px] lg:w-[518px] lg:h-[518px] overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-contain"
          src={aboutme}
          alt="about-me"
        />
      </div>
      {/* end right */}
    </section>
  );
};

export default About;
