import { StyledLink } from './Nav.styled';

export default function Nav() {
  return (
    <nav>
      <StyledLink to="/">View Users</StyledLink>
      <StyledLink to="/register">Register User</StyledLink>
    </nav>
  );
}
