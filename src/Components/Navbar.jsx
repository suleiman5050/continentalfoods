import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/contitental_foods.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/constants.jsx";
import CardButtons from "./CardButtons";
import { useProductsContext } from "../Contexts/product_context";
import { useUserContext } from "../Contexts/user_context";
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="comfy" />
            </Link>
          </div>
          <button className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              {" "}
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CardButtons />
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        text-transform: capitalize;
        cursor: pointer;
        color: var(--clr-grey-3);
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
