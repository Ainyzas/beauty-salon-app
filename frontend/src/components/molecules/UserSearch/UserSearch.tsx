import React from 'react';
import { StyledSearch } from './UserSearch.styled';

type userSearchProps = {
  surname: string;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserSearch({ surname, setSurname }: userSearchProps) {
  return (
    <StyledSearch>
      <input type="text" placeholder="Enter Surname" onChange={(e) => setSurname(e.target.value)} value={surname} />
    </StyledSearch>
  );
}
