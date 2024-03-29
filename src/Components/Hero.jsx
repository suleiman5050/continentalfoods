import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg from "../assets/bcg_main.jpg";
import heroBcg2 from "../assets/bcg_small.jpg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          for food security
          <br />
          and sustainability
        </h1>
        <p>
          Creating value across the agricultural value chains and contributing
          to food security and sustainability.
        </p>
        <Link to="/products" className="btn hero-btn">
          our products
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="" className="main-img" />
        <img src={heroBcg2} alt="" className="accent-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      height: 200px;
      object-fit: cover;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-5);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;
