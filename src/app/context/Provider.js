import { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: {},
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
