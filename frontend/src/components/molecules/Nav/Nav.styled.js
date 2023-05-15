import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: var(--main-text-color);
  margin: 0 3rem;

  :hover {
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  background-color: var(--secondary-background);
  color: var(--main-text-color);
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0.25rem 0.75rem;
  margin: 0 2.5rem;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledNav = styled.nav`
  @media screen and (max-width: 1024px) {
    ${StyledLink}, ${StyledButton} {
      margin: 0 1.5rem;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 600px) {
    ${StyledLink}, ${StyledButton} {
      margin: 0 0.5rem;
      font-size: 12px;
    }
  }
`;
