import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Contexts/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
const Sort = ({ products = [{}] }) => {
  const { gridView, setGridView, setListView, sort, updateSort } =
    useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          onClick={setGridView}
          className={gridView ? "active" : null}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          onClick={setListView}
          className={!gridView ? "active" : null}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="sort-input"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    display: grid;
    /* grid-template-columns: 1fr; */
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border-color: transparent;
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0%.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
