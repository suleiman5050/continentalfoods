import { useCartContext } from "../Contexts/cart_context";
import { Link } from "react-router-dom";
import { PageHero, CartContent } from "../Components";
import styled from "styled-components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

export default CartPage;

const Wrapper = styled.div`
  .empty {
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    text-transform: none;
  }
`;
