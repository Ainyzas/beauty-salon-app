import React, { useEffect } from 'react';
import { fetchUsers } from '../../../api-calls/users';
import User from '../../molecules/User/User';
import { StyledUserList } from './UserList.styled';
import { userObject } from '../../pages/UserViewPage/UserViewPage';

type userListProps = {
  users: userObject[];
  setUsers: React.Dispatch<React.SetStateAction<userObject[]>>;
  setInitialFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserList({ users, setUsers, setInitialFetch }: userListProps) {
  useEffect(() => {
    fetchUsers().then((data) => {
      data.forEach((user: userObject) => {
        const formattedDate = new Date(user.registrationDate);
        user.registrationDate = formattedDate.toLocaleString('lt-LT');
      });

      setUsers(data);
      setInitialFetch(false);
    });
  }, []);

  return (
    <StyledUserList>
      {users.map((user, index) => {
        return (
          <User
            key={index}
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
