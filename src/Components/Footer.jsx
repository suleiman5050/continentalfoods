import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        <span>&copy;{new Date().getFullYear()}</span>
        <span>Continental Foods</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--clr-black);
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
