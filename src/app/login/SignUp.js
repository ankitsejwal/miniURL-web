import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputGroup from '../UI/InputGroup';
import Button from '../UI/Button';
import axios from '../../api/axios';
import SquareButton from '../UI/SquareButton';
import Context from '../context/Context';

export default function SignUp({ setShowComponent }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/g;

  const [authenticationSuccessful, setAuthenticationSuccessful] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { authState, setAuthState } = useContext(Context);

  const router = useRouter();
  useEffect(() => {
    if (authenticationSuccessful) router.push('/home');
  }, [authenticationSuccessful, router]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    // if email is valid submit the form
    if (isEmailValid) {
      try {
        const response = await axios.post(
          '/api/auth',
          JSON.stringify({ email, password }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );

        setAuthState(response.data);
        setAuthenticationSuccessful(true);
      } catch (error) {
        if (!error?.response) setErrorMessage('No server response');
        else if (error.response?.status === 400)
          setErrorMessage('Missing username or password');
        else if (error.response?.status === 401)
          setErrorMessage('Unauthorized');
        else setErrorMessage('Login failed');
      }
    }
  }

  return (
    <form className="flex flex-col space-y-3 py-16" onSubmit={handleFormSubmit}>
      <InputGroup
        label="First Name"
        type="text"
        placeholder="Enter first name"
        errorMessage="Enter a valid first name"
        value={email}
        setValue={setEmail}
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        regex={emailRegex}
      />

      <InputGroup
        label="Last Name"
        type="text"
        placeholder="Enter last name"
        errorMessage="Enter a valid last name"
        value={email}
        setValue={setEmail}
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        regex={emailRegex}
      />

      <InputGroup
        label="Email"
        type="email"
        placeholder="Enter email"
        errorMessage="Enter a valid email"
        value={password}
        setValue={setPassword}
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
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        errorMessage="Password did not match"
        value={password}
        setValue={setPassword}
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
        regex={passwordRegex}
      />

      <div className="flex justify-between mt-6 gap-6">
        <SquareButton name="Login" onClick={() => setShowComponent('signin')} />
        <Button name="SignUp" />
      </div>
    </form>
  );
}
