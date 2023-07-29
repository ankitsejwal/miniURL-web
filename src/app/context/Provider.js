import { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  const [authState, setAuthState] = useState({
    token,
    user: user ? JSON.parse(user) : {},
  });

  const setAuthFunc = ({ token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuthState({ token, user });
  };

  return (
    <Context.Provider value={{ authState, setAuthState: (authInfo) => setAuthFunc(authInfo) }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
