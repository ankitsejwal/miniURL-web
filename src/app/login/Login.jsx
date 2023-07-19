'use client';

import { useState } from 'react';
import Header from '../UI/Header';
import SignIn from './SignIn';
import Forgot from './Forgot';

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);
  return (
    <div className="p-14">
      <Header />

      {showSignIn ? (
        <SignIn setShowSignIn={setShowSignIn} />
      ) : (
        <Forgot setShowSignIn={setShowSignIn} />
      )}
      <p className="text-[#949494] my-5 ">
        <span className="text-[var(--foreground-darkest)]">
          Sign-up is invite only.
        </span>
        Email site owner to get the invite link.
        <a href="" className="text-[var(--foreground-darkest)] underline mx-2">
          read more
        </a>
      </p>
    </div>
  );
}
