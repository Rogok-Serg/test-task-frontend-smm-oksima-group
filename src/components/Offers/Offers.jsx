import { nanoid } from 'nanoid';
import UserData from '../../userData.json';
import OffesItem from './OffersItem/OffersItem';
import {
  StyledUsersComponentList,
  StyledUsersItem,
  StyledUsersList,
  StyledUsersSelect,
  StyledUsersSelectWrapper,
  StyledUsersSvg,
} from 'components/UsersComponent/UsersComponent.styled';

const Offers = () => {
  const id = nanoid();

  return (
    <div>
      <StyledUsersList>
        <StyledUsersItem>
          <StyledUsersSelectWrapper>
            <StyledUsersSvg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/StyledSvg"
            >
              <path
                d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5"
                stroke="#6F727A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledUsersSvg>
            <StyledUsersSelect name="UID" id="">
              <option value="UID">UID</option>
            </StyledUsersSelect>
          </StyledUsersSelectWrapper>
        </StyledUsersItem>
        <StyledUsersItem>
          <StyledUsersSelectWrapper>
            <StyledUsersSvg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/StyledSvg"
            >
              <path
                d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5"
                stroke="#6F727A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledUsersSvg>
            <StyledUsersSelect name="Nazwa" id="">
              <option value="Nazwa">Nazwa</option>
            </StyledUsersSelect>
          </StyledUsersSelectWrapper>
        </StyledUsersItem>
        <StyledUsersItem>
          <StyledUsersSelectWrapper>
            <StyledUsersSvg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/StyledSvg"
            >
              <path
                d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5"
                stroke="#6F727A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledUsersSvg>
            <StyledUsersSelect name="Marka" id="">
              <option value="Marka">Marka</option>
            </StyledUsersSelect>
          </StyledUsersSelectWrapper>
        </StyledUsersItem>
        <StyledUsersItem>
          <StyledUsersSelectWrapper>
            <StyledUsersSvg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/StyledSvg"
            >
              <path
                d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5"
                stroke="#6F727A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledUsersSvg>
            <StyledUsersSelect name="Płacić" id="">
              <option value="Płacić">Płacić</option>
            </StyledUsersSelect>
          </StyledUsersSelectWrapper>
        </StyledUsersItem>
        <StyledUsersItem>
          <StyledUsersSelectWrapper>
            <StyledUsersSvg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/StyledSvg"
            >
              <path
                d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5"
                stroke="#6F727A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledUsersSvg>
            <StyledUsersSelect name="Balansować" id="">
              <option value="Balansować">Balansować</option>
            </StyledUsersSelect>
          </StyledUsersSelectWrapper>
        </StyledUsersItem>
        <StyledUsersItem>
          <StyledUsersSelectWrapper>
            <StyledUsersSvg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/StyledSvg"
            >
              <path
                d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5"
                stroke="#6F727A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledUsersSvg>
            <StyledUsersSelect name="Status" id="">
              <option value="Status">Status</option>
            </StyledUsersSelect>
          </StyledUsersSelectWrapper>
        </StyledUsersItem>
      </StyledUsersList>
      <StyledUsersComponentList>
        {UserData.map(item => (
          <OffesItem key={id} item={item} />
        ))}
      </StyledUsersComponentList>
    </div>
  );
};

export default Offers;
