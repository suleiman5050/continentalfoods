import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const AuthWrapper = ({ children }) => {
  const { loading, error } = useAuth0();
  if (loading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
