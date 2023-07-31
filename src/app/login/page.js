'use client';

import { useContext, useEffect, useState } from 'react';
import Header from '../UI/Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Context from '../context/Context';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [currentLoginComponent, setCurrentLoginComponent] = useState('signin');
  const { isAuthenticated } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) router.push('/');
  });

  return (
    <div className="p-14">
      <Header currentLoginComponent={currentLoginComponent} />
      {currentLoginComponent === 'signin' ? (
        <SignIn setCurrentLoginComponent={setCurrentLoginComponent} />
      ) : (
        ''
      )}
      {currentLoginComponent === 'forgot' ? (
        <Forgot setCurrentLoginComponent={setCurrentLoginComponent} />
      ) : (
        ''
      )}
      {currentLoginComponent === 'signup' ? (
        <SignUp setCurrentLoginComponent={setCurrentLoginComponent} />
      ) : (
        ''
      )}

      <div className="text-[#949494]">
        <button
          className="text-[var(--foreground-darkest)]"
          onClick={() => setCurrentLoginComponent('signup')}
        >
          <u>Sign-up</u> &nbsp;
        </button>
        is invite only for family & friends. Contact site owner for invite link.
        <a href="/" className="text-[var(--foreground-darkest)] underline mx-2">
          read more
        </a>
      </div>
    </div>
  );
}
