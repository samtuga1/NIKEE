import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash";

function Stories({ story: { title, news } }) {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <>
      <div className="mb-11 nike-container">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions} aria-label="My Favorite Images">
            {news.map((item, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="items-center justify-items-center flex">
                    <img
                      src={item.img}
                      alt={`img/story/${i}`}
                      className="w-full h-auto object-cover shadow shadow-slate-200 rounded-tr-lg rounded-tl-lg"
                    />
                  </div>
                  <div className="flex justify-between w-full px-4 items-center">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-sm font-semibold">{item.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style text-black w-4 h-4" />
                      <span className="text-xs font-semibold">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="font-semibold text-blue-600">
                        {item.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {item.title}
                    </h1>
                    <p className="text-sm text-justify lg:text-sm">
                      {truncate(item.text, { length: 175 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      target="_blank"
                      role={"button"}
                      href={item.url}
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md text-slate-200 shadow-black text-center button-theme py-1.5 justify-center"
                    >
                      {item.btn}{" "}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Stories;
