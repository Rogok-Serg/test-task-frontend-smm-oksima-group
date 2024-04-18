import {
  StyledUserItem,
  StyledUserText,
} from 'components/ListUsers/ListUsersItem/ListUsersItem.styled';
import { StyledWrapperBtn, StyledUserButton } from '../Offers.styled';

const OffesItem = ({ item }) => {
  const { pay, number, name, address, balance } = item;

  return (
    <>
      <StyledUserItem>
        <StyledUserText>{number}</StyledUserText>
        <StyledUserText>{name}</StyledUserText>
        <StyledUserText>{address}</StyledUserText>
        <StyledUserText>{pay}</StyledUserText>
        <StyledUserText>{balance}</StyledUserText>
        <StyledWrapperBtn>
          <StyledUserButton style={{ backgroundColor: '#FDEDED' }}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.38281 2.47729L2.32031 7.53979"
                stroke="#E84646"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.38281 7.53979L2.32031 2.47729"
                stroke="#E84646"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </StyledUserButton>
          <span style={{ fontSize: '24px', color: '#E0E2E7' }}> | </span>
          <StyledUserButton style={{ backgroundColor: '#E7F7EF' }}>
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.47656 0.883762L4.22656 6.13353L1.60156 3.50876"
                stroke="#0FAF62"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </StyledUserButton>
        </StyledWrapperBtn>
      </StyledUserItem>
    </>
  );
};

export default OffesItem;
