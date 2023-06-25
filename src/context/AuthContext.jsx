import React, { createContext } from "react";

export const userContext = createContext(null);

const AuthContext = ({ children }) => {
  const user = {
    displayName: "Rahim",
  };

  const authInfo = {
    user,
  };
  return (
    <userContext.Provider value={authInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
