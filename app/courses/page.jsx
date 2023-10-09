import React from "react";
import PageHeader from "../components/ReUseableComponents/PageHeader";
import SingleProduct from "../components/ReUseableComponents/SingleProduct";

export default function page() {
  return (
    <>
      <PageHeader pagename={"course"} />
      <div className="p-10">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </>
  );
}
