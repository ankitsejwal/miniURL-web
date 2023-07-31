import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Header({ currentLoginComponent }) {
  const { authState, logout, isAuthenticated } = useContext(Context);
  const logoutButton = <button onClick={logout}>Logout</button>;
  const welcomeMessage = <p>Welcome {authState.user.name}</p>;
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-[42px] leading-10 font-semibold ">miniURL</p>
        <p className="text-[20px] font-normal ">https://sejw.al</p>
      </div>
      <div className="text-right">
        {isAuthenticated() ? logoutButton : currentLoginComponent}
        {isAuthenticated() ? welcomeMessage : ''}
      </div>
    </div>
  );
}
