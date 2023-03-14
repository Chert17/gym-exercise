import React, { FC } from 'react';

import HeroBannerImg from 'assets/images/banner.png';

const HeroBanner: FC = () => {
  return (
    <div className="mt-16 md:pl-6 lg:relative mb-12 lg:mb-[300px]">
      <h2 className="text-[#FF2625] font-semibold text-2xl mb-7">
        Fitness Club
      </h2>
      <h1 className="font-bold mb-5 text-4xl lg:text-5xl">
        Sweat, Smile <br />
        And Repeat
      </h1>
      <p className="text-xl mb-8">
        Check out the most effective exercises personalized to you
      </p>
      <button className="py-3 px-6 rounded text-white text-xl bg-[#FF2625]">
        Explore Exercise
      </button>
      <p className="max-[1023.98px]:hidden font-semibold opacity-10 text-[#FF2625] text-[160px] lg:text-[170px] absolute lg:bottom-[-100%]">
        Exercise
      </p>
      <img
        src={HeroBannerImg}
        alt="banner"
        className="max-[1023.98px]:hidden absolute top-[-45%] right-[-20px] w-[450px]"
      />
    </div>
  );
};

export default HeroBanner;
