import React, { useState, useEffect } from 'react';
import InputGroup from '../UI/InputGroup';
import Button from '../UI/Button';

export default function Forgot({ showSignIn, setShowSignIn }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  useEffect(() => {
    console.log(showSignIn);
  }, [showSignIn]);

  return (
    <form className="py-16" onSubmit={(event) => event.preventDefault()}>
      <InputGroup
        label="Email"
        type="text"
        placeholder="Enter email"
        errorMessage="Enter a valid email"
        value={email}
        setValue={setEmail}
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        regex={emailRegex}
      />

      <div className="flex justify-between mt-6">
        <button
          className="bg-[var(--background-lighter)]text-[18px] font-normal underline border-4 border-[#045770] rounded-[11px] w-min-[101px] mr-6
    h-[100px]"
          onClick={() => setShowSignIn(true)}
        >
          Go back to login
        </button>

        <Button name="Send Link" />
      </div>
    </form>
  );
}
