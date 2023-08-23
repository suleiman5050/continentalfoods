import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./Contexts/product_context.jsx";
import { FilterProvider } from "./Contexts/filter_context.jsx";
import { CartProvider } from "./Contexts/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./Contexts/user_context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  //  dev-wq7or61718losxl4.us.auth0.com = domain
  // LxDUqNhN3VoIYMcKUKwssAjHO0dR81Hh = client ID
  <Auth0Provider
    domain="dev-wq7or61718losxl4.us.auth0.com"
    clientId="LxDUqNhN3VoIYMcKUKwssAjHO0dR81Hh"
    authorizationParams={{
      redirect_uri: window.location.origin,
      cacheLocation: "localStorage,",
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
