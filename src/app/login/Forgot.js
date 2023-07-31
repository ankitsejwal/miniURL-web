import React, { useState, useEffect } from 'react';
import InputGroup from '../UI/InputGroup';
import Button from '../UI/Button';
import SquareButton from '../UI/SquareButton';

export default function Forgot({ setShowComponent }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  async function handleFormSubmit(event) {
    event.preventDefault();
  }

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

      <div className="flex justify-between gap-6 mt-6">
        <SquareButton name="login" onClick={() => setShowComponent('signin')} />
        <Button name="Send Link" />
      </div>
    </form>
  );
}
