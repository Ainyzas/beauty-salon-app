import { StyledButton, StyledLink, StyledNav } from './Nav.styled';

export default function Nav() {
  function signOutHandler() {
    localStorage.removeItem('loggedIn');
    window.location.reload();
  }

  return (
    <StyledNav>
      <StyledLink to="/">View Users</StyledLink>
      <StyledLink to="/register">Register User</StyledLink>
      <StyledButton onClick={signOutHandler}>Sign Out</StyledButton>
    </StyledNav>
  );
}
