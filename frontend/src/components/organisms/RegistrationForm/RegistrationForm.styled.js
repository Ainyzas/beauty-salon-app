import styled from 'styled-components';

export const StyledNameDiv = styled.div`
  display: flex;

  input {
    width: 95%;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
  }
`;

export const StyledEmailDiv = styled.div``;

export const StyledDateDiv = styled.div``;

export const StyledButton = styled.button`
  padding: 0.25rem 1.5rem;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: var(--secondary-text-color);

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const StyledForm = styled.form`
  width: 45%;
  margin: 0 auto;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: var(--secondary-background);

  h2 {
    padding-top: 0.5rem;
    margin-bottom: 3rem;
    color: var(--secondary-text-color);
    letter-spacing: 0.5rem;
  }

  label {
    color: var(--main-text-color);
  }

  input {
    font-size: 16px;
    padding: 0.25rem 0.5rem;
    border: 1px solid transparent;
    border-radius: 5px;
    :focus {
      border: 2px solid var(--secondary-text-color);
    }
  }

  div {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 1024px) {
    width: 75%;

    ${StyledNameDiv} {
      label {
        margin: 0 1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 95%;

    label {
      font-size: 14px;
    }

    ${StyledNameDiv} {
      label {
        margin: 0 0.5rem;
      }
    }
  }
`;
