import { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const token = localStorage.getItem('token');
  const expiresAt = localStorage.getItem('expiresAt');
  const user = localStorage.getItem('user');

  const [authState, setAuthState] = useState({
    token,
    expiresAt,
    user: user ? JSON.parse(user) : {},
  });

  const setAuthFunc = ({ token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt);
    localStorage.setItem('user', JSON.stringify(user));

    setAuthState({ token, expiresAt, user });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('user');

    setAuthState({ token: null, expiresAt: null, user: {} });
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) return false;
    return new Date().getSeconds() < authState.expiresAt;
  };

  return (
    <Context.Provider
      value={{ authState, setAuthState: (authInfo) => setAuthFunc(authInfo), isAuthenticated, logout }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
