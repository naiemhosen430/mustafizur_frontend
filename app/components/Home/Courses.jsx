"use client";

import React, { useState } from "react";
import ProductBox from "../ReUseableComponents/ProductBox";

export default function courses() {
  return (
    <>
      <div className="p-4 py-20 text-center">
        <h1 className="block text-black text-3xl py-2 px-2 rounded-md">
          Course
        </h1>
        <p className="block lg:w-6/12 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          laboriosam quasi accusantium repellat eos ex, commodi, dolores ea
          nihil atque voluptatibus cumque illo, asperiores fugiat libero
          dignissimos voluptates? Molestiae, ipsam.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4 p-2"></div>
      <div className="p-2 space-2">
        <ProductBox totalitems={4} />
      </div>
    </>
  );
}
