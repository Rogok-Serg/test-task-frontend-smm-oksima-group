import { nanoid } from 'nanoid';
import UserData from '../../userData.json';
import ListUsersItem from './ListUsersItem/ListUsersItem';
import { StyledUserList } from './ListUsers.styled';

const ListUsers = () => {
  const id = nanoid();
  return (
    <div>
      <StyledUserList>
        {UserData.map(item => (
          <ListUsersItem key={id} item={item} />
        ))}
      </StyledUserList>
    </div>
  );
};

export default ListUsers;
