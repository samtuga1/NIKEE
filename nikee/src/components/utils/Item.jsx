import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

function Item({ id, color, shadow, title, text, img, btn, rating, price }) {
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid justify-items-center items-center`}>
        <div className="grid justify-items-center items-center">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h1>
          <p className="text-slate-200 filter drop-shadow font-normal text-base md:text-sm">{text}</p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className="text-sm text-black font-medium blur-effect-theme">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="text-sm font-normal text-slate-100">{rating}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"><ShoppingBagIcon className="icon-style text-slate-900" /></button>
            <button type="button" className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">{btn}</button>

          </div>
        </div>

        <div className="flex items-center">
            <img src={img} alt='img/item.img' className="h-36"/>
        </div>
      </div>
    </>
  );
}

export default Item;
