import {
  StyledSearchSvg,
  StyledUsersButton,
  StyledUsersInput,
  StyledUsersOffersBrand,
  StyledWrapperButton,
  StyledWrapperInput,
  StyledWrapperTitleButton,
} from 'components/UsersComponent/UsersComponent.styled';

const TitleOffersBrand = () => {
  return (
    <>
      <StyledWrapperTitleButton>
        <StyledUsersOffersBrand>Dodano oferty</StyledUsersOffersBrand>
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
          <StyledUsersButton>Dodaj ofertę</StyledUsersButton>
        </StyledWrapperButton>
      </StyledWrapperTitleButton>
    </>
  );
};

export default TitleOffersBrand;
