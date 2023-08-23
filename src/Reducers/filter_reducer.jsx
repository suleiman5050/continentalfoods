import {
  CLEAR_FILTER,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      filteredProducts: [...action.payload],
      allProducts: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === FILTER_PRODUCTS) {
    return { ...state };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === "FILTERPRODUCTS") {
    const { allProducts } = state;
    let tempProducts = [...allProducts];
    const { text, company, category, color, price, shipping } = state.filters;
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",

        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
export default filter_reducer;
