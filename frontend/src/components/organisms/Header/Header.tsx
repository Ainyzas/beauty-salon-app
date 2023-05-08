import React from 'react';
import Nav from '../../molecules/Nav/Nav';
import CallUs from '../../molecules/CallUs/CallUs';
import logo from '../../../assets/salon-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <Nav />
      <CallUs />
    </header>
  );
}
