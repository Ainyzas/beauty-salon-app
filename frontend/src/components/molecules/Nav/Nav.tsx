import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">View Users</Link>
      <Link to="/register">Register User</Link>
    </nav>
  );
}
