import React from "react";
import SingleProduct from "./SingleProduct";

export default function ProductBox({ totalitems }) {
  return (
    <>
      <div className="text-center">
        <SingleProduct totalitems={totalitems} />
        <SingleProduct totalitems={totalitems} />
        <SingleProduct totalitems={totalitems} />
        <SingleProduct totalitems={totalitems} />
        <SingleProduct totalitems={totalitems} />
        <SingleProduct totalitems={totalitems} />
      </div>
    </>
  );
}
