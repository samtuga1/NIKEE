import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { setOpenCart } from "../app/CartSlice";

function Navbar() {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onScrollListener = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollListener);
    return () => {
      window.removeEventListener("scroll", onScrollListener);
    };
  }, []);

  return (
    <header
      className={
        !navState
          ? "absolute top-7 left-0 right-0 opacity-100 z-50"
          : "fixed top-0 right-0 left-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
      }
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            className={`h-auto w-16 ${navState && "brightness-0 filter"}`}
            alt="img/src"
          />
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <MagnifyingGlassIcon
              className={`icon-style ${
                navState && " text-slate-900 transition-all duration-300"
              }`}
            />
          </li>
          <li className="grid items-center">
            <HeartIcon
              className={`icon-style ${
                navState && " text-slate-900 transition-all duration-300"
              }`}
            />
          </li>
          <li className="grid items-center">
            <button
              onClick={onCartToggle}
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagIcon
                className={`icon-style ${
                  navState && " text-slate-900 transition-all duration-300"
                }`}
              />
              <div
                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-[1.5] transition-all duration-300 ${
                  navState
                    ? "bg-slate-900 text-slate-100 shadow-slate-900"
                    : "bg-slate-100 text-slate-900 shadow-slate-100"
                }`}
              >
                0
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
