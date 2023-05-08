import React from 'react';
import Nav from '../../molecules/Nav/Nav';
import CallUs from '../../molecules/CallUs/CallUs';
import logo from '../../../assets/salon-logo.png';
import { StyledHeader } from './Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Super Beauty Logo" />
      <Nav />
      <CallUs />
    </StyledHeader>
  );
}
