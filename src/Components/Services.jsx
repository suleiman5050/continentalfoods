import React from "react";
import { services } from "../utils/constants.jsx";
import styled from "styled-components";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            we create value across
            <br />
            agricultural value chains
          </h3>
          <p>
            - by using improved crop and livestock production technologies, and
            innovative marketing techniques.
            <br /> - by forming mutually beneficial partnerships with farmers,
            local and foreign investors, traders and live stock value chains.
            <br /> - by marketing quality crop and livestock products at prices
            that are high enough to meet all production, marketing and
            management costs.
          </p>
        </article>
        <div className="services-center ">
          {services.map((service) => {
            const { id, text, icon, title } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  .section-centerr {
    padding: 6rem 0;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-6);
  h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
    font-weight: 500;
  }
  /* .hold {
    max-width: 360px;
    margin: 0 auto;
    margin-left: -3rem;
  } */
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
    /* min-width: 90vw; */
    /* margin: 0 auto; */
  }

  .service {
    background: var(--clr-primary-4);
    text-align: center;
    padding: 2.5rem 2rem;
    /* display: none; */

    border-radius: var(--radius);
    p {
      color: var(--clr-primary-1);
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-8);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
