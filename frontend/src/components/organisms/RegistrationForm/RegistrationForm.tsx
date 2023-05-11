import React, { useState } from 'react';
import { createUser } from '../../../api-calls/users';
import { StyledButton, StyledDateDiv, StyledEmailDiv, StyledForm, StyledNameDiv } from './RegistrationForm.styled';

export default function RegistrationForm() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');

  async function registrationHandler(e: React.FormEvent) {
    e.preventDefault();
    const response = await createUser(name, surname, email, date);
    if (response) {
      console.log(response.message);
      setName('');
      setSurname('');
      setEmail('');
      setDate('');
    }
  }

  return (
    <StyledForm onSubmit={registrationHandler}>
      <h2>USER REGISTRATION</h2>
      <StyledNameDiv>
        <label>
          Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Surname
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
      </StyledNameDiv>

      <StyledEmailDiv>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </StyledEmailDiv>

      <StyledDateDiv>
        <label htmlFor="date">Registration Date: </label>
        <input type="datetime-local" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </StyledDateDiv>

      <StyledButton type="submit">REGISTER USER</StyledButton>
    </StyledForm>
  );
}
