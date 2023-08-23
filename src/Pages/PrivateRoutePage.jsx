import React from "react";
import { useUserContext } from "../Contexts/user_context";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRoutePage = ({ children }) => {
  // const { myUser } = useUserContext();
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PrivateRoutePage;
