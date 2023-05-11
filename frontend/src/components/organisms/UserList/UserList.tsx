import React, { useState, useEffect } from 'react';
import { deleteUser, fetchUsers } from '../../../api-calls/users';
import User from '../../molecules/User/User';
import { StyledUserList } from './UserList.styled';
import { userObject } from '../../pages/UserViewPage/UserViewPage';

type userListProps = {
  users: userObject[];
  setUsers: React.Dispatch<React.SetStateAction<userObject[]>>;
  setInitialFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

export default function UserList({ users, setUsers, setInitialFetch }: userListProps) {
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  async function userFetchAndFormat() {
    const data = await fetchUsers();
    data.forEach((user: userObject) => {
      const formattedDate = new Date(user.registrationDate);
      user.registrationDate = `${formattedDate.toLocaleDateString('lt-LT', dateOptions)} ${formattedDate.toLocaleTimeString(
        'lt-LT',
        timeOptions,
      )}`;
    });

    setUsers(data);
  }

  useEffect(() => {
    userFetchAndFormat();
    setInitialFetch(false);
  }, []);

  async function handleDelete(id?: string) {
    try {
      const response = await deleteUser(id!);
      console.log(response.message);
      await userFetchAndFormat();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledUserList>
      {users.map((user) => {
        return (
          <User
            key={user._id}
            _id={user._id}
            handleDelete={() => handleDelete(user._id)}
            userFetchAndFormat={() => userFetchAndFormat()}
            editingUserId={editingUserId}
            setEditingUserId={setEditingUserId}
            name={user.name}
            surname={user.surname}
            email={user.email}
            registrationDate={user.registrationDate}
          />
        );
      })}
    </StyledUserList>
  );
}
