import React from 'react';


import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
     

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
    
      </main>

      {/*  Site footer */}
     

    </div>
  );
}

export default Home;