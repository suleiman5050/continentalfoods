import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter for news on agro-business </h3>
        <div className="content">
          <div className="contact">
            <h5>
              Address :
              <span>Suite E3, 4th floor, SHM Complex, Mabushi, Abuja FCT</span>
            </h5>
            <h5>
              Telephone : <span>08039492325, 08038487131</span>
            </h5>
          </div>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90%;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    &:hover {
      color: var(--clr-white);
    }
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
  span {
    font-weight: 600;
    color: var(--clr-grey-3);
  }
`;
