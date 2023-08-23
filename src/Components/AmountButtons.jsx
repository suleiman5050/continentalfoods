import React from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" onClick={decrease} className="amount-btn">
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" type="button" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* justify-items: center; */
`;
