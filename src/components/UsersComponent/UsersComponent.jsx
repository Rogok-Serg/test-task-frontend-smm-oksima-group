import { nanoid } from 'nanoid';
import UsersComponentItem from './UsersComponentItem/UsersComponentItem';
import UserData from '../../userData.json';
import {
  StyledUsersList,
  StyledUsersName,
  StyledUsersItem,
  StyledUsersSelect,
  StyledUsersSelectWrapper,
  StyledUsersSvg,
  StyledUsersComponentList,
  StyledWrapperTitleButton,
  StyledWrapperButton,
  StyledWrapperInput,
  StyledUsersInput,
  StyledSearchSvg,
  StyledUsersButton,
} from './UsersComponent.styled';

const UsersComponent = () => {
  const id = nanoid();

  return (
    <div>
      <StyledWrapperTitleButton>
        <StyledUsersName>Użytkownicy</StyledUsersName>
        <StyledWrapperButton>
          <label htmlFor="">
            <StyledWrapperInput>
              {' '}
              <StyledUsersInput
                type="text"
                name="search"
                placeholder="Szukaj"
              />
              <StyledSearchSvg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4999 11.6309L14.2363 14.2782M7.1454 3.87824C8.71187 3.87824 9.98174 5.14811 9.98174 6.71458M13.3538 7.21882C13.3538 10.6302 10.5883 13.3957 7.17692 13.3957C3.7655 13.3957 1 10.6302 1 7.21882C1 3.8074 3.7655 1.0419 7.17692 1.0419C10.5883 1.0419 13.3538 3.8074 13.3538 7.21882Z"
                  stroke="#A3AED0"
                  stroke-linecap="round"
                />
              </StyledSearchSvg>
            </StyledWrapperInput>
          </label>
          {/* <StyledUsersInput placeholder="Szukaj" /> */}
          <StyledUsersButton>Dodaj ofertę</StyledUsersButton>
        </StyledWrapperButton>
      </StyledWrapperTitleButton>
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
          <UsersComponentItem key={id} item={item} />
        ))}
      </StyledUsersComponentList>
    </div>
  );
};

export default UsersComponent;
