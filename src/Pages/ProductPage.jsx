import React from "react";
import { PageHero, Filter, Sort, ProductList } from "../Components";
import styled from "styled-components";
import { useFilterContext } from "../Contexts/filter_context";
const ProductPage = () => {
  const { filteredProducts: products } = useFilterContext();
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filter />
          <div>
            <Sort products={products} />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductPage;

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
