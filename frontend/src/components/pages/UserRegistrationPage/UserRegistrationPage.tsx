import React from 'react';
import RegistrationForm from '../../organisms/RegistrationForm/RegistrationForm';
import { StyledRegistrationWrapper } from './UserRegistrationPage.styled';

export default function UserRegistrationPage() {
  return (
    <StyledRegistrationWrapper>
      <RegistrationForm />
    </StyledRegistrationWrapper>
  );
}
