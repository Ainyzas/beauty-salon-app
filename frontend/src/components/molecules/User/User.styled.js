import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export const StyledUserCard = styled.div`
  padding: 0.25rem 1.5rem;
  display: flex;
  align-items: center;
  background-color: grey;
  border: 1px solid transparent;
  border-radius: 10px;
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
  background-color: darkorange;
`;

export const StyledAiFillEdit = styled(AiFillEdit)`
  color: orange;
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
