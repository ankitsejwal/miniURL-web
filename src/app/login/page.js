'use client';

import { useContext, useEffect, useState } from 'react';
import Header from '../UI/Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Context from '../context/Context';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [showComponent, setShowComponent] = useState('signup');
  const { authState } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (authState.token) router.push('/');
  });

  return (
    <div className="p-14">
      <Header />
      {showComponent === 'signin' ? (
        <SignIn setShowComponent={setShowComponent} />
      ) : (
        ''
      )}
      {showComponent === 'forgot' ? (
        <Forgot setShowComponent={setShowComponent} />
      ) : (
        ''
      )}
      {showComponent === 'signup' ? (
        <SignUp setShowComponent={setShowComponent} />
      ) : (
        ''
      )}

      <p className="text-[#949494] my-5">
        <button
          className="text-[var(--foreground-darkest)]"
          onClick={() => setShowComponent('signup')}
        >
          <u>Sign-up</u> &nbsp;
        </button>
        is invite only for family & friends. Contact site owner for invite link.
        <a href="/" className="text-[var(--foreground-darkest)] underline mx-2">
          read more
        </a>
      </p>
    </div>
  );
}
