import React from "react";
import { Navbar, Sidebar, Footer } from "../Components";
import { Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";
const HomeLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  /* max-width: var(--max-width); */
  /* display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto; */
`;
