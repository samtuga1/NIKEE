import React from "react";
import Clips from "./utils/clips";
import SocialLink from './utils/Socials';

function Hero({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) {
  return (
    <>
      <div className="relative flex h-auto w-auto flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute right-0 top-0 left-0 opacity-100 z-10"></div>
        <div className="z-20 relative opacity-100 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter text-slate-200 drop-shadow-sm">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter text-slate-200 drop-shadow-sm">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 top-[33vh] absolute lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip}/>
              ))}
            </div>
            <div className="grid gap-3 md:gap-3 top-[33vh] lg:top-[27vh] right-0 absolute" >
              {sociallinks.map((val, i) => (
                <SocialLink key={i} icon={val.icon} />
              ))}
            </div>
          </div>
          <div className="">
            <img
              src={img}
              alt="hero-image"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme cursor-pointer hover:rotate-0 -rotate-[25deg] object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
