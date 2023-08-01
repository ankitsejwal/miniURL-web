import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputGroup from '../UI/InputGroup';
import Button from '../UI/Button';
import axios from '../../api/axios';
import SquareButton from '../UI/SquareButton';
import Context from '../context/Context';

export default function SignUp({ setCurrentLoginComponent }) {
  const [inviteCode, setInviteCode] = useState('');

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/g;

  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(false);

  const [authenticationSuccessful, setAuthenticationSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { authState, setAuthState } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (authenticationSuccessful) router.push('/home');
  }, [authenticationSuccessful, router]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    // todo - set condition when every field is valid then ->
    try {
      console.log({ inviteCode, name, email, password, repeatPassword });
      const response = await axios.post(
        '/api/users',
        JSON.stringify({ inviteCode, name, email, password, repeatPassword }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setAuthState(response.data);
      setAuthenticationSuccessful(true);
    } catch (error) {
      if (!error?.response) setErrorMessage('No server response');
      else if (error.response?.status === 400) setErrorMessage(error.response.data.message);
      else if (error.response?.status === 401) setErrorMessage('Unauthorized');
      else setErrorMessage('Login failed');
    }
  }

  return (
    <form className="flex flex-col space-y-3 py-16" onSubmit={handleFormSubmit}>
      <InputGroup
        label="Invite Code"
        type="text"
        placeholder="Enter your invite code"
        errorMessage="bad invite code"
        value={inviteCode}
        setValue={setInviteCode}
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        regex={emailRegex}
      />

      <InputGroup
        label="Name"
        type="text"
        placeholder="Enter name"
        errorMessage="Enter a valid name"
        value={name}
        setValue={setName}
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        regex={emailRegex}
      />

      <InputGroup
        label="Email"
        type="email"
        placeholder="Enter email"
        errorMessage="Enter a valid email"
        value={email}
        setValue={setEmail}
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
        regex={passwordRegex}
      />

      <InputGroup
        label="Password"
        type="password"
        placeholder="Enter password"
        errorMessage="Enter a valid password"
        value={password}
        setValue={setPassword}
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
        regex={passwordRegex}
      />

      <InputGroup
        label="Repeat Password"
        type="password"
        placeholder="Repeat password"
        errorMessage="Password did not match"
        value={repeatPassword}
        setValue={setRepeatPassword}
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
        regex={passwordRegex}
      />

      <div className="flex justify-between gap-6 pt-4">
        <SquareButton name="Login" onClick={() => setCurrentLoginComponent('signin')} />
        <Button name="Sign-up" />
      </div>
    </form>
  );
}
