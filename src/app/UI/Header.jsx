import React, { useContext } from 'react';
import Context from '../context/Context';
import { Icon } from 'react-icons-kit';
import { ic_logout } from 'react-icons-kit/md/ic_logout';

export default function Header({ currentLoginComponent }) {
  const { authState, logout, isAuthenticated } = useContext(Context);
  const logoutButton = (
    <button onClick={logout}>
      <Icon icon={ic_logout} size={30} /> logout
    </button>
  );

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-[42px] leading-10 font-semibold ">miniURL</p>
        <p className="text-[20px] font-normal ">
          {isAuthenticated() ? 'https://sejw.al/' + authState.user.name : 'https://sejw.al'}
        </p>
      </div>
      <div className="text-right">{isAuthenticated() ? logoutButton : currentLoginComponent}</div>
    </div>
  );
}
