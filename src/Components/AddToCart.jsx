import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { AmountButtons } from "../Components";
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/cart_context";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { stock, colors, id } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAMount) => {
      let tempAmount = oldAMount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={
                  `${mainColor}` === color ? "color-btn active" : "color-btn"
                }
                onClick={() => {
                  setMainColor(color);
                }}
                style={{ background: color }}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          className="btn"
          to="/cart"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          {" "}
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.div`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
