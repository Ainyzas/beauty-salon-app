import styled from 'styled-components';

export const StyledSearch = styled.div`
  width: 80%;
  margin: 5rem auto 2rem;
  text-align: center;
  padding-bottom: 2rem;

  input {
    background-color: var(--secondary-background);
    color: var(--main-text-color);
    width: 25%;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 5px;

    :focus {
      border: 2px solid var(--secondary-text-color);
      opacity: 0.8;
    }
  }
`;
