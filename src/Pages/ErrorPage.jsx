import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried could not be found</h3>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </section>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.div`
  background: var(--clr-primary-5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    margin-bottom: 2rem;
  }
`;
