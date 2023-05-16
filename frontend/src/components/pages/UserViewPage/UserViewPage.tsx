import React, { useState, useEffect } from 'react';
import UserList from '../../organisms/UserList/UserList';
import UserSearch from '../../molecules/UserSearch/UserSearch';
import { fetchUsersBySurname } from '../../../api-calls/users';

export type userObject = {
  _id?: string;
  handleDelete?: () => void;
  userFetchAndFormat?: () => void;
  editingUserId?: string | null;
  setEditingUserId?: React.Dispatch<React.SetStateAction<string | null>>;
  name: string;
  surname: string;
  email: string;
  registrationDate: string;
};

export default function UserViewPage() {
  const [surname, setSurname] = useState<string>('');
  const [users, setUsers] = useState<userObject[]>([]);
  const [initialFetch, setInitialFetch] = useState<boolean>(true);

  useEffect(() => {
    if (!initialFetch) {
      fetchUsersBySurname(surname).then((data) => {
        data.forEach((user: userObject) => {
          const formattedDate = new Date(user.registrationDate);
          user.registrationDate = formattedDate.toLocaleString('lt-LT');
        });

        setUsers(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surname]);

  return (
    <div>
      <UserSearch surname={surname} setSurname={setSurname} />
      <UserList users={users} setUsers={setUsers} setInitialFetch={setInitialFetch} />
    </div>
  );
}
