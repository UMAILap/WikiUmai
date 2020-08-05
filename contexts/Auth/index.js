import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { api, addBearerToken, removeBearerToken } from 'utils';
import { routes } from 'utils';
import Router from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setToken(token);
    }
  }, []);

  const updateUser = user => {
    console.log(user);
    setUser(user);
  };

  const setToken = async (token, user) => {
    Cookies.set('token', token);
    addBearerToken(token);
    updateUser(user);
    redirectAfterLogin();
  };

  const logout = () => {
    Cookies.remove('token');
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
    <AuthContext.Provider
      value={{ setToken, user, isAuthenticated: !!user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
