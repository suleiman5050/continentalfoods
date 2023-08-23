import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to={"/product"}>product</Link>}/{title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;

const Wrapper = styled.div`
  background: var(--clr-primary-7);
  min-height: 20vh;
  color: var(--clr-primary-1);
  display: flex;
  align-items: center;
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
    &:hover {
      color: var(--clr-primary-1);
    }
  }
`;
