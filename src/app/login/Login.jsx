'use client';

import Input from '../UI/Input';
import Button from '../UI/Button';
import { useState } from 'react';
import InputGroup from '../UI/InputGroup';

export default function Login() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/g;

  return (
    <div className="p-14">
      <p className="text-[42px] leading-10 font-semibold ">miniURL</p>
      <p className="text-[20px] font-normal ">https://sejw.al</p>
      <div className="py-16">
        <InputGroup
          label="Email"
          type="text"
          placeholder="Enter email"
          value={email}
          setValue={setEmail}
          isValid={isEmailValid}
          setIsValid={setIsEmailValid}
          regex={emailRegex}
        />

        <InputGroup
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          setValue={setPassword}
          isValid={isPasswordValid}
          setIsValid={setIsPasswordValid}
          regex={passwordRegex}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-[var(--background-lighter)]text-[18px] font-normal underline border-4 border-[#045770] rounded-[11px] w-min-[101px] mr-6
h-[100px]"
        >
          Forgot Password
        </button>

        <Button name="login" />
      </div>
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
