import React from "react";
import styled from "styled-components";
import { PageHero } from "../Components";
import aboutImg from "../assets/about-bcg.jpg";
const AboutPage = () => {
  <PageHero />;
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            <b>Continental Foods and Agro Allied Industries Ltd </b> is an
            agribusiness company based in Nigeria for the purpose of farming,
            food processing and consultancy services. We are committed to
            cultivating organic and non-organic agriculture produce for both
            Nigerian markets and the global market. We are in business to
            produce both food and raw materials for industries in commercial
            quantities. We are also involved in the production and packaging of
            food, and processing of agro allied products
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;

const Wrapper = styled.div`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-2);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
