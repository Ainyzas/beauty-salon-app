import React, { useState } from 'react';
import { AdminLoginHandler } from '../../../api-calls/admin';
import { StyledFormDiv, StyledLoginButton, StyledLoginForm } from './AdminLogin.styled';

type adminProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AdminLogin({ setIsLoggedIn }: adminProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  function checkboxHandler() {
    setShow((prev) => !prev);
  }

  async function loginHandler(e: React.FormEvent) {
    e.preventDefault();
    const login = await AdminLoginHandler(username, password);
    setIsLoggedIn(login);
  }

  return (
    <StyledLoginForm onSubmit={loginHandler}>
      <StyledFormDiv>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </StyledFormDiv>

      <StyledFormDiv>
        <label htmlFor="password">Password: </label>
        <input
          type={show ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledFormDiv>

      <StyledFormDiv>
        <input type="checkbox" id="show-password" checked={show} onChange={checkboxHandler} />
        <label htmlFor="show-password">Show Password</label>
      </StyledFormDiv>

      <StyledLoginButton type="submit">LOGIN</StyledLoginButton>
    </StyledLoginForm>
  );
}
