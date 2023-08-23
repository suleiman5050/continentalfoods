import {
  Home,
  About,
  Products,
  SingleProduct,
  Error,
  Cart,
  Checkout,
  PrivateRoute,
  HomeLayout,
  AuthWrapper,
} from "./Pages";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Navbar, Sidebar, Footer } from "./Components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            ,
            <Checkout />,
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <AuthWrapper>
        <Home />
        <Products />
        <About />
        <SingleProduct />
        <Error />
        <Cart />
        <Checkout />
        <PrivateRoute />
      </AuthWrapper>
    </RouterProvider>
  );
}

export default App;
