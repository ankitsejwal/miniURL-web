'use client';

import { useState, useEffect } from 'react';
import Context from './Context';
import { useRouter } from 'next/navigation';

const Provider = ({ children }) => {
  const router = useRouter();

  const token = localStorage.getItem('token');
  const expiresAt = localStorage.getItem('expiresAt');
  const user = localStorage.getItem('user');

  const [authState, setAuthState] = useState({
    token,
    expiresAt,
    user: user ? JSON.parse(user) : {},
  });

  useEffect(() => {
    if (!isAuthenticated()) router.push('/login');
  }, [authState]);

  const setAuthFunc = ({ token, user, expiresAt }) => {
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
      value={{
        authState,
        setAuthState: (authInfo) => setAuthFunc(authInfo),
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
