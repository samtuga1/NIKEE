import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

function Sales({ifExists, endpoint: {title, items}}) {
  return (
    <>
      <div className="nike-container transition-all duration-500">
        <Title title={title} />
        <div className={`gap-7 grid lg:gap-5 mt-7 items-center justify-items-center ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-4'}`}>
            {items?.map((val, i) => (
                <Item key={i} {...val} ifExists={ifExists} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Sales;
