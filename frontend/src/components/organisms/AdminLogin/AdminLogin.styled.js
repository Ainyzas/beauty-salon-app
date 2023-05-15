import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 38%;
  margin: 10rem auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--secondary-background);

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledFormDiv = styled.div`
  margin: 1rem 0;

  label {
    color: var(--main-text-color);
    font-size: 18px;
    font-weight: 500;
  }

  input {
    padding: 0.1rem 0.5rem;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 16px;

    :focus {
      border: 2px solid var(--secondary-text-color);
    }
  }
`;

export const StyledLoginButton = styled.button`
  margin: 1rem 0;
  padding: 0.25rem 1rem;
  letter-spacing: 0.3rem;
  font-size: 16px;
  background-color: var(--secondary-text-color);
  border: 1px solid transparent;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
