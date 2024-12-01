// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const Contexto = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <Contexto.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </Contexto.Provider>
  );
};

export const useAuth = () => useContext(Contexto);
