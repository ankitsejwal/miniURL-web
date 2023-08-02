import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputGroup from '../UI/InputGroup';
import Button from '../UI/Button';
import axios from '../../api/axios';
import SquareButton from '../UI/SquareButton';
import Context from '../context/Context';

export default function SignIn({ setCurrentLoginComponent }) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const passwordRegex = /^(?=.*\S).{3,}$/g;

  const [authenticationSuccessful, setAuthenticationSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { authState, setAuthState } = useContext(Context);

  const router = useRouter();
  useEffect(() => {
    if (authenticationSuccessful) router.push('/home');
  }, [authenticationSuccessful, router]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (isValidEmail && isValidPassword) {
      try {
        const response = await axios.post('/api/auth', JSON.stringify({ email, password }), {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });

        setAuthState(response.data);
        setAuthenticationSuccessful(true);
      } catch (error) {
        if (!error?.response) setErrorMessage('No server response');
        else if (error.response?.status === 400) setErrorMessage('Missing username or password');
        else if (error.response?.status === 401) setErrorMessage('Unauthorized');
        else setErrorMessage('Login failed');
      }
    }
  }

  return (
    <form className="py-16" onSubmit={handleFormSubmit}>
      <p>{errorMessage ? errorMessage : ''}</p>
      <InputGroup
        label="Email"
        type="text"
        placeholder="Enter email"
        errorMessage="Enter a valid email"
        value={email}
        setValue={setEmail}
        isValid={isValidEmail}
        setIsValid={setIsValidEmail}
        regex={emailRegex}
      />

      <InputGroup
        label="Password"
        type="password"
        placeholder="Enter password"
        errorMessage="Type more than 3 characters"
        value={password}
        setValue={setPassword}
        isValid={isValidPassword}
        setIsValid={setIsValidPassword}
        regex={passwordRegex}
      />
      <div className="flex justify-between mt-6 gap-6">
        <SquareButton name="Forgot Password" onClick={() => setCurrentLoginComponent('forgot')} />
        <Button name="Sign-in" />
      </div>
    </form>
  );
}
