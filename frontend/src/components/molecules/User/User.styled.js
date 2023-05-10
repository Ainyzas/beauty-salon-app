import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export const StyledUserCard = styled.div`
  padding: 0.25rem 1.5rem;
  display: flex;
  align-items: center;
  background-color: var(--secondary-background);
  border: 1px solid transparent;
  border-radius: 10px;
  opacity: 0;
  animation: fadeIn 500ms ease-in-out forwards;

  h4 {
    color: var(--secondary-text-color);

    span {
      color: var(--main-text-color);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledUserInfo = styled.section`
  margin-right: 1rem;
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
