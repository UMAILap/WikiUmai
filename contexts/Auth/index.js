import { createContext, useContext, useState } from 'react';
import { removeBearerToken } from 'utils';
import Router from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children, authToken }) => {
  const [token, setToken] = useState(authToken);
  const [user, setUser] = useState(null);

  const updateUser = user => {
    console.log(user);
    setUser(user);
  };

  const login = async user => {
    updateUser(user);
    redirectAfterLogin();
  };

  const logout = () => {
    //Remover cookie con nookies
    setUser(null);
    removeBearerToken();
    redirectAfterLogout();
  };

  const redirectAfterLogin = () => {
    Router.push('/perfil');
  };
  const redirectAfterLogout = () => {
    Router.push('/');
  };

  return (
    <AuthContext.Provider value={{ login, logout, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
