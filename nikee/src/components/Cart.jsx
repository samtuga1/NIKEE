import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

function Cart() {
  return (
    <>
      <div
        className={`blur-effect-theme w-full h-screen bottom-0 right-0 left-0 top-0 fixed z-[250] opacity-100`}
      >
        <div className=" max-w-xl blur-effect-theme h-screen w-full absolute right-0">
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  );
}

export default Cart;
