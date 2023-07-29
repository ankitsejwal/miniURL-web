'use client';

import { useContext, useEffect, useState } from 'react';
import Header from '../UI/Header';
import SignIn from './SignIn';
import Forgot from './Forgot';
import Context from '../context/Context';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);
  const { authState } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (authState.token) router.push('/');
  });

  return (
    <div className="p-14">
      <Header />
      {showSignIn ? (
        <SignIn showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      ) : (
        <Forgot showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      )}
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">Sign-up is invite only.</span>
        Email site owner to get the invite link.
        <a href="" className="text-[var(--foreground-darkest)] underline mx-2">
          read more
        </a>
      </p>
    </div>
  );
}
