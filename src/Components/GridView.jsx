import React from "react";
import styled from "styled-components";
import Products from "../Components/Products";
const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="product-center">
        {products.map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .product-center {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .product-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
