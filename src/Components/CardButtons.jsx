import React from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/cart_context";
import { useUserContext } from "../Contexts/user_context";
import { useAuth0 } from "@auth0/auth0-react";
const CardButtons = () => {
  const { user } = useAuth0();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  const { total_items, clearCart } = useCartContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {user ? (
        <button
          className="auth-btn"
          onClick={() => {
            clearCart;
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

export default CardButtons;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  /* display: none; */
  .cart-btn {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  /* @media (min-width: 998px) {
    display: flex;
  } */
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
