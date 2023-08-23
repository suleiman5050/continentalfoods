import React from "react";
import styled from "styled-components";
import ListView from "./ListView";
import Sort from "./Sort";
import GridView from "../Components/GridView";

import { useFilterContext } from "../Contexts/filter_context";
const ProductList = () => {
  // changed allProducts to filteredProducts to view filtered
  const { filteredProducts: products, gridView } = useFilterContext();
  if (products.length <= 0) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no product marched your search
      </h5>
    );
  }
  if (gridView === false) {
    return <ListView products={products} />;
  }
  return (
    <>
      {/* <Sort products={products} /> */}
      <GridView products={products} />
    </>
  );
};

export default ProductList;
ProductList;
