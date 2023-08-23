import React from "react";
import { PageHero } from "../Components";
import { styled } from "styled-components";
import StripeCheckout from "../Components/StripeCheckout";
import { useCartContext } from "../Contexts/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2> Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

export default CheckoutPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
