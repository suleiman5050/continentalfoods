import React from "react";
import styled from "styled-components";
import { uniqueValue, formatPrice } from "../utils/helpers";
import { useFilterContext } from "../Contexts/filter_context";
import { FaCheck } from "react-icons/fa";
const Filter = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      price,
      min_price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categoryProducts = uniqueValue(allProducts, "category");
  const companyProducts = uniqueValue(allProducts, "company");
  const colorProducts = uniqueValue(allProducts, "colors");
  return (
    <Wrapper>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}

          {/* search input */}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categoryProducts.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                    onClick={updateFilters}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of search input */}
          {/* search input */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              className="company"
              value={company}
              onChange={updateFilters}
            >
              {companyProducts.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of search input */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colorProducts.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      name="color"
                      key={index}
                      className={`${
                        color === "all" ? "active all-btn" : "all-btn"
                      }`}
                      onClick={updateFilters}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    value={c}
                    name="color"
                    style={{ background: c }}
                    data-color={c}
                    onClick={updateFilters}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                  >
                    {c === color ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* end of colors */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* end of price */}
          {/* free shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              onChange={updateFilters}
              checked={shipping}
              id="shipping"
            />
          </div>
          {/* end of free shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .active {
    opacity: 1;
  }
  .price {
    margin-bottom: auto.2rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
