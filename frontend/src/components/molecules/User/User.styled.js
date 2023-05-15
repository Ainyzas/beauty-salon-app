import styled, { keyframes } from 'styled-components';
import { AiFillEdit, AiFillDelete, AiOutlineClose } from 'react-icons/ai';

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const StyledUserInfo = styled.section`
  margin-right: 1rem;
`;

export const StyledUserCard = styled.div`
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  background-color: var(--secondary-background);
  border: 1px solid transparent;
  border-radius: 10px;
  opacity: 0;
  animation: ${fadeIn} 500ms ease-in-out forwards;

  h4 {
    color: var(--secondary-text-color);

    span {
      color: var(--main-text-color);
    }
  }
`;

export const StyledUserButtons = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  gap: 1.5rem;
`;

const Buttons = `
font-size: 24px;
padding: 0.25rem 0.4rem;
border: 1px solid transparent;
border-radius: 0.5rem;

:hover {
    cursor: pointer;
    opacity: 0.7
}
`;

export const StyledEdit = styled.button`
  ${Buttons}
  background-color: green;
`;

export const StyledAiFillEdit = styled(AiFillEdit)`
  color: #829460;
  vertical-align: top;
`;

export const StyledDelete = styled.button`
  ${Buttons}
  background-color: darkred;
`;

export const StyledAiFillDelete = styled(AiFillDelete)`
  color: red;
  vertical-align: top;
`;

// Dialog styling

export const StyledDialog = styled.dialog`
  width: 30%;
  padding-bottom: 0;
  z-index: 100;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: var(--secondary-background);
  opacity: 0;
  animation: ${fadeIn} 350ms ease-in forwards;

  ::backdrop {
    background-color: black;
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const StyledcloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 0;
  background-color: transparent;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyledAiOutlineClose = styled(AiOutlineClose)`
  font-size: 24px;
  color: var(--secondary-text-color);
`;

export const StyledDialogForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;

  label {
    color: var(--main-text-color);
    input {
      margin-left: 1rem;
      font-size: 16px;
      padding: 0.25rem 0.5rem;
      border: 1px solid transparent;
      border-radius: 5px;
      :focus {
        border: 2px solid var(--secondary-text-color);
      }
    }
  }
`;

export const StyledSubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.25rem 1rem;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: var(--secondary-text-color);

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
