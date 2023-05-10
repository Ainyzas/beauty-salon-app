import { userObject } from '../../pages/UserViewPage/UserViewPage';
import {
  StyledAiFillDelete,
  StyledAiFillEdit,
  StyledDelete,
  StyledEdit,
  StyledUserButtons,
  StyledUserCard,
  StyledUserInfo,
} from './User.styled';

export default function User({ handleDelete, name, surname, email, registrationDate }: userObject) {
  return (
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
        <StyledEdit>
          <StyledAiFillEdit />
        </StyledEdit>

        <StyledDelete onClick={handleDelete}>
          <StyledAiFillDelete />
        </StyledDelete>
      </StyledUserButtons>
    </StyledUserCard>
  );
}
