import React, { useEffect } from 'react';
import { deleteUser, fetchUsers } from '../../../api-calls/users';
import User from '../../molecules/User/User';
import { StyledUserList } from './UserList.styled';
import { userObject } from '../../pages/UserViewPage/UserViewPage';

type userListProps = {
  users: userObject[];
  setUsers: React.Dispatch<React.SetStateAction<userObject[]>>;
  setInitialFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserList({ users, setUsers, setInitialFetch }: userListProps) {
  async function userFetchAndFormat() {
    const data = await fetchUsers();
    data.forEach((user: userObject) => {
      const formattedDate = new Date(user.registrationDate);
      user.registrationDate = formattedDate.toLocaleString('lt-LT');
    });

    setUsers(data);
  }

  useEffect(() => {
    userFetchAndFormat();
    setInitialFetch(false);
  }, []);

  async function handleDelete(id?: string) {
    try {
      if (id) {
        await deleteUser(id);
        await userFetchAndFormat();
      }
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
            handleDelete={() => {
              handleDelete(user._id);
            }}
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
