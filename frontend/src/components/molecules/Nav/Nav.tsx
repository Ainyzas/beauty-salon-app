import { StyledButton, StyledLink } from './Nav.styled';

export default function Nav() {
  function signOutHandler() {
    localStorage.removeItem('loggedIn');
    window.location.reload();
  }

  return (
    <nav>
      <StyledLink to="/">View Users</StyledLink>
      <StyledLink to="/register">Register User</StyledLink>
      <StyledButton onClick={signOutHandler}>Sign Out</StyledButton>
    </nav>
  );
}
