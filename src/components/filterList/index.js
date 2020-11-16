import React from "react";
import PriceFilter from "./priceFilter";
import BrandFilter from "./brandFilter";

//TWO FILTERS IN ONE COMPONENT

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
