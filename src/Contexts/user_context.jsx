import { useEffect, useContext, createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, logout, loginWithRedirect } = useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (user) {
      setMyUser(user);
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ logout, loginWithRedirect, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
