import {
  StyledUserItem,
  StyledUserText,
} from 'components/ListUsers/ListUsersItem/ListUsersItem.styled';

const UsersComponentItem = ({ item }) => {
  const { pay, number, name, address, balance, status } = item;

  return (
    <>
      <StyledUserItem>
        <StyledUserText>{number}</StyledUserText>
        <StyledUserText>{name}</StyledUserText>
        <StyledUserText>{address}</StyledUserText>
        <StyledUserText>{pay}</StyledUserText>
        <StyledUserText>{balance}</StyledUserText>
        <StyledUserText>{status}</StyledUserText>
      </StyledUserItem>
    </>
  );
};

export default UsersComponentItem;
