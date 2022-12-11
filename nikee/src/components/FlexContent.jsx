import React from "react";

function FlexContent({ endpoint: { title, heading, img, text, btn, url } }) {
  return (
    <>
      <div className="">
        <div>
          <h1>{heading}</h1>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url}>
            <button type="button" className="">
              {btn}
            </button>
          </a>
        </div>

        <div>
          <img src={img} img={`img/${heading}`} className="" />
        </div>
      </div>
    </>
  );
}

export default FlexContent;
