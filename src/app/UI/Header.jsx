import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Header() {
  const { authState, logout } = useContext(Context);
  const logoutButton = (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-[42px] leading-10 font-semibold ">miniURL</p>
        <p className="text-[20px] font-normal ">https://sejw.al</p>
      </div>
      {authState.token ? logoutButton : ''}
    </div>
  );
}
