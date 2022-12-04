import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

function Sales({endpoint: {title, items}}) {
  return (
    <>
      <div>
        <Title title={title} />
        <div>
            {items?.map((val, i) => (
                <Item key={i} {...val} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Sales;
