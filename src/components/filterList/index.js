import React from "react";
import PriceFilter from "./priceFilter";
import BrandFilter from "./brandFilter";

const FormList = (props) => {
  const { setBrand, setPrice } = props;

  return (
    <div>
      <BrandFilter setBrand={setBrand}></BrandFilter>
      <PriceFilter setPrice={setPrice}></PriceFilter>
    </div>
  );
};

export default FormList;
