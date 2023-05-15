import styled from 'styled-components';

export const StyledUserList = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    width: 95%;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
