import React, { useState } from 'react';
import { DigitalArt, Projects } from '../components';

const Home = () => {
  const [active, setActive] = useState('website');

  const handleActive = (name) => setActive(name);
  return (
    <section>
      <div className="flex items-center gap-2 mb-12">
        <h3
          onClick={() => handleActive('website')}
          className={`rounded-md p-2 transition-all cursor-pointer ${
            active === 'website' ? 'text-white bg-green-cyan duration-700' : ''
          }`}
        >
          Website
        </h3>
        <h3
          onClick={() => handleActive('art')}
          className={`rounded-md p-2 transition-all cursor-pointer ${
            active === 'art' ? 'text-white bg-green-cyan duration-700' : ''
          }`}
        >
          Digital Art
        </h3>
      </div>
      {active === 'website' ? <Projects /> : <DigitalArt />}
    </section>
  );
};

export default Home;
