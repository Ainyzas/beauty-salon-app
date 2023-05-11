import React, { useState, useRef } from 'react';
import { userObject } from '../../pages/UserViewPage/UserViewPage';
import {
  StyledAiFillDelete,
  StyledAiFillEdit,
  StyledAiOutlineClose,
  StyledDelete,
  StyledDialog,
  StyledDialogForm,
  StyledEdit,
  StyledSubmitButton,
  StyledUserButtons,
  StyledUserCard,
  StyledUserInfo,
  StyledcloseButton,
} from './User.styled';
import { updateUser } from '../../../api-calls/users';

export default function User({ _id, handleDelete, userFetchAndFormat, name, surname, email, registrationDate }: userObject) {
  const [editName, setEditName] = useState<string>(name);
  const [editSurname, setEditSurname] = useState<string>(surname);
  const [editEmail, setEditEmail] = useState<string>(email);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleEditOpen() {
    dialogRef.current?.showModal();
  }

  function handleEditClose() {
    dialogRef.current?.close();
  }

  async function handleEditSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await updateUser(_id!, editName, editSurname, editEmail);
      console.log(response.message);
      dialogRef.current?.close();
      userFetchAndFormat!();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledUserCard>
        <StyledUserInfo>
          <h4>
            Client:
            <span>
              &nbsp;{name} {surname}
            </span>
          </h4>
          <h4>
            Email: <span>{email}</span>
          </h4>
          <h4>
            Registered: <span>{registrationDate}</span>
          </h4>
        </StyledUserInfo>

        <StyledUserButtons>
          <StyledEdit onClick={handleEditOpen}>
            <StyledAiFillEdit />
          </StyledEdit>

          <StyledDelete onClick={handleDelete}>
            <StyledAiFillDelete />
          </StyledDelete>
        </StyledUserButtons>
      </StyledUserCard>

      <StyledDialog ref={dialogRef}>
        <StyledcloseButton onClick={handleEditClose}>
          <StyledAiOutlineClose />
        </StyledcloseButton>

        <StyledDialogForm onSubmit={handleEditSubmit}>
          <label>
            Name:
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
          </label>
          <label>
            Surname:
            <input type="text" value={editSurname} onChange={(e) => setEditSurname(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
          </label>
          <StyledSubmitButton type="submit">UPDATE USER</StyledSubmitButton>
        </StyledDialogForm>
      </StyledDialog>
    </>
  );
}
