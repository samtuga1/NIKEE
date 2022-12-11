import React from "react";

function FlexContent({
  ifExists,
  endpoint: { title, heading, img, text, btn, url },
}) {
  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col nike-container lg:justify-center ${
          ifExists ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
          <h1 className="text-4xl md:text3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 drop-shadow-lg filter">
            {title}
          </h1>
          <p className="lg:text-sm my-4 text-slate-900">{text}</p>
          <a
            href={url}
            className="flex items-center"
            target={"_blank"}
            role="button"
          >
            <button
              type="button"
              className="bg-slate-900 button-theme shadow-slate-900 text-slate-100 py-1.5"
            >
              {btn}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl w-full relative lg:max-w-none">
          <img
            src={img}
            img={`img/${heading}`}
            className={`w-auto object-fill transitions-theme ${
              ifExists
                ? "h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12"
                : "h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:-rotate-12"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default FlexContent;
