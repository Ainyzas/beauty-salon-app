import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 92%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10%;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
  }

  @media screen and (max-width: 600px) {
    width: 98%;
    justify-content: center;
    gap: 1rem;

    img {
      display: none;
    }
  }
`;
