import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants.jsx";
import { Link } from "react-router-dom";
import CardButtons from "./CardButtons";
import { useUserContext } from "../Contexts/user_context";
import { useProductsContext } from "../Contexts/product_context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy sloth" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links" onClick={closeSidebar}>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CardButtons />
      </aside>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      color: var(--clr-red-light);
    }
  }
  .logo {
    justify-self: center;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    &:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      background: var(--clr-grey-10);
      color: var(--clr-grey-2);
    }
  }
  .sidebar {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: var(--transition);
    transform: translateX(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translateX(0);
    z-index: 10;
  }
  .cart-btn-wrapper {
    margin: 3rem auto;
  }
  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
