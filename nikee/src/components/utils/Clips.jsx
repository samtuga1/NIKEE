import React from "react";
import {PlayIcon} from '@heroicons/react/24/solid';

function Clips({ clip, imgsrc }) {
  return (
    <>
        <div className="h-28 w-32 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 relative rounded-xl overflow-hidden group transition-all duration-300" >
          <img src={imgsrc} alt="img/clips" className="inset-0 h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500" />
          <div className="bg-white blur-effect-theme flex items-center justify-center absolute bottom-2 right-2 sm:bottom-5 sm:right-5 z-[100] opacity-100 w-8 h-8 md:w-5 md:h-5 rounded-full" >
            <PlayIcon className="icon-style md:h-3 md:w-3 text-slate-900"/>
          </div>
          <video autoPlay='true' loop='true' playsInline='true' muted='true' className="absolute left-0 top-0 bottom-0 right-0 object-cover w-full h-full flex opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl" >
            <source src={clip} type="video/mp4" />
          </video>
        </div>
    </>
  );
}

export default Clips;
