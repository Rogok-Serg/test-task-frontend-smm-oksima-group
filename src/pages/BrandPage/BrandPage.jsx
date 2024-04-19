import { Link, Outlet } from 'react-router-dom';
import Logotype from '../../images/logotype.png';
import ListSvg from 'components/ListSvg/ListSvg';
import {
  StyledContainer,
  StyledAside,
  StyledTitle,
  StyledwrapperLogo,
  StyledList,
  StyledWrapperSection,
  StyledSection,
  StyledListService,
  StyledItemService,
  StyledItemTextService,
} from 'pages/ManagerPage/ManagerPage.styled';

import css from '../ManagerPage/ManagerPage.module.css';

const BrandPage = () => {
  return (
    <StyledContainer>
      <StyledAside>
        <StyledwrapperLogo>
          <img src={Logotype} alt="logo" width={50} height={41} />
          <StyledTitle>Analytix</StyledTitle>
        </StyledwrapperLogo>
        <StyledList>
          <Link className={css.item} to="/brand/user">
            <div className={css.svg}>
              <svg
                className={css.svg1}
                width="20"
                height="16"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.img}
                  d="M1 14.207C1 11.454 3.25306 9.22222 7.85714 9.22222C12.4612 9.22222 14.7143 11.454 14.7143 14.207C14.7143 14.645 14.4013 15 14.0151 15H1.69916C1.31302 15 1 14.645 1 14.207Z"
                  fill="grey"
                />
                <path
                  className={css.img}
                  d="M10.4286 3.625C10.4286 5.07475 9.2773 6.25 7.85714 6.25C6.43698 6.25 5.28571 5.07475 5.28571 3.625C5.28571 2.17525 6.43698 1 7.85714 1C9.2773 1 10.4286 2.17525 10.4286 3.625Z"
                  fill="grey"
                />
                <path
                  className={css.img}
                  d="M16.75 9.61328C17.9381 10.5195 19 12.8011 19 14.207C19 14.645 18.687 15 18.3008 15H17.875M13.375 5.89882C14.1436 5.44495 14.6607 4.59662 14.6607 3.625C14.6607 2.65338 14.1436 1.80505 13.375 1.35118M1.69916 15H14.0151C14.4013 15 14.7143 14.645 14.7143 14.207C14.7143 11.454 12.4612 9.22222 7.85714 9.22222C3.25306 9.22222 1 11.454 1 14.207C1 14.645 1.31302 15 1.69916 15ZM10.4286 3.625C10.4286 5.07475 9.2773 6.25 7.85714 6.25C6.43698 6.25 5.28571 5.07475 5.28571 3.625C5.28571 2.17525 6.43698 1 7.85714 1C9.2773 1 10.4286 2.17525 10.4286 3.625Z"
                  stroke="grey"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className={css.text}>Marka</p>
          </Link>
          <Link className={css.item} to="/brand/offer">
            <div className={css.svg}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.img}
                  d="M6.75 10.6875H11.25"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M6.75 8.4375H11.25"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M11.2501 2.8125H14.0625C14.2117 2.8125 14.3548 2.87176 14.4602 2.97725C14.5657 3.08274 14.625 3.22582 14.625 3.375V15.1875C14.625 15.3367 14.5657 15.4798 14.4602 15.5852C14.3548 15.6907 14.2117 15.75 14.0625 15.75H3.9375C3.78832 15.75 3.64524 15.6907 3.53975 15.5852C3.43426 15.4798 3.375 15.3367 3.375 15.1875V3.375C3.375 3.22582 3.43426 3.08274 3.53975 2.97725C3.64524 2.87176 3.78832 2.8125 3.9375 2.8125H6.74985"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M6.1875 5.0625V4.5C6.1875 3.75408 6.48382 3.03871 7.01126 2.51126C7.53871 1.98382 8.25408 1.6875 9 1.6875C9.74592 1.6875 10.4613 1.98382 10.9887 2.51126C11.5162 3.03871 11.8125 3.75408 11.8125 4.5V5.0625H6.1875Z"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={css.text}>Dodano oferty</p>
          </Link>
          <Link className={css.item} to="/brand/offers">
            <div className={css.svg}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.img}
                  d="M6.75 10.6875H11.25"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M6.75 8.4375H11.25"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M11.2501 2.8125H14.0625C14.2117 2.8125 14.3548 2.87176 14.4602 2.97725C14.5657 3.08274 14.625 3.22582 14.625 3.375V15.1875C14.625 15.3367 14.5657 15.4798 14.4602 15.5852C14.3548 15.6907 14.2117 15.75 14.0625 15.75H3.9375C3.78832 15.75 3.64524 15.6907 3.53975 15.5852C3.43426 15.4798 3.375 15.3367 3.375 15.1875V3.375C3.375 3.22582 3.43426 3.08274 3.53975 2.97725C3.64524 2.87176 3.78832 2.8125 3.9375 2.8125H6.74985"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M6.1875 5.0625V4.5C6.1875 3.75408 6.48382 3.03871 7.01126 2.51126C7.53871 1.98382 8.25408 1.6875 9 1.6875C9.74592 1.6875 10.4613 1.98382 10.9887 2.51126C11.5162 3.03871 11.8125 3.75408 11.8125 4.5V5.0625H6.1875Z"
                  stroke="grey"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={css.text}>Oferuje</p>
          </Link>
          <Link className={css.item} to="/brand/profile">
            <div className={css.svg}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.img}
                  d="M3.0498 13.4C3.39568 13.0126 5.01559 11.23 5.49031 11.23H10.5096C11.1975 11.23 12.6018 12.7077 12.9498 13.2286M15.1998 8C15.1998 11.9765 11.9763 15.2 7.9998 15.2C4.02335 15.2 0.799805 11.9765 0.799805 8C0.799805 4.02355 4.02335 0.800003 7.9998 0.800003C11.9763 0.800003 15.1998 4.02355 15.1998 8ZM10.5789 5.54597C10.5789 4.17234 9.41933 3.05 8.00002 3.05C6.58074 3.05 5.42111 4.17234 5.42111 5.54597C5.42111 6.9196 6.58074 8.04194 8.00002 8.04194C9.4193 8.04194 10.5789 6.9196 10.5789 5.54597Z"
                  stroke="grey"
                />
              </svg>
            </div>
            <p className={css.text}>Profil</p>
          </Link>
          <Link className={css.item} to="/brand/balance">
            <div className={css.svg}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.img}
                  d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z"
                  stroke="#A3AED0"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M13.125 13.125H15.625"
                  stroke="#A3AED0"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M9.375 13.125H10.625"
                  stroke="#A3AED0"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M1.875 7.56662H18.125"
                  stroke="#A3AED0"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={css.text}>Balansować</p>
          </Link>
          <Link className={css.item} to="/brand/support">
            <div className={css.svg}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={css.img}
                  d="M4.25476 15.7452C3.53569 15.0262 4.01262 13.5165 3.64662 12.632C3.26722 11.715 1.875 10.9769 1.875 9.99997C1.875 9.02301 3.26722 8.285 3.64663 7.36803C4.01263 6.48346 3.5357 4.97382 4.25476 4.25476C4.97382 3.53569 6.48346 4.01262 7.36804 3.64662C8.28502 3.26722 9.02305 1.875 10 1.875C10.977 1.875 11.715 3.26722 12.632 3.64663C13.5165 4.01263 15.0262 3.5357 15.7452 4.25476C16.4643 4.97382 15.9874 6.48346 16.3534 7.36804C16.7328 8.28502 18.125 9.02305 18.125 10C18.125 10.977 16.7328 11.715 16.3534 12.632C15.9874 13.5165 16.4643 15.0262 15.7452 15.7452C15.0262 16.4643 13.5165 15.9874 12.632 16.3534C11.715 16.7328 10.9769 18.125 9.99997 18.125C9.02301 18.125 8.285 16.7328 7.36803 16.3534C6.48346 15.9874 4.97382 16.4643 4.25476 15.7452Z"
                  stroke="#A3AED0"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={css.img}
                  d="M10 15C10.5178 15 10.9375 14.5803 10.9375 14.0625C10.9375 13.5447 10.5178 13.125 10 13.125C9.48223 13.125 9.0625 13.5447 9.0625 14.0625C9.0625 14.5803 9.48223 15 10 15Z"
                  fill="#A3AED0"
                />
                <path
                  className={css.img}
                  d="M10 11.2504V10.6254C10.4326 10.6254 10.8556 10.4971 11.2153 10.2567C11.575 10.0163 11.8554 9.67469 12.021 9.27498C12.1866 8.87527 12.2299 8.43543 12.1455 8.0111C12.0611 7.58677 11.8527 7.19699 11.5468 6.89106C11.2409 6.58514 10.8511 6.3768 10.4268 6.29239C10.0024 6.20799 9.56259 6.25131 9.16288 6.41687C8.76317 6.58244 8.42153 6.86282 8.18116 7.22255C7.9408 7.58228 7.8125 8.00521 7.8125 8.43786"
                  stroke="#A3AED0"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={css.text}>Pomoc techniczna</p>
          </Link>
        </StyledList>
      </StyledAside>
      <StyledWrapperSection>
        <StyledSection>
          <StyledListService>
            <StyledItemService>
              <StyledItemTextService>Strona</StyledItemTextService>
              <ListSvg />
            </StyledItemService>
            <StyledItemService>
              <StyledItemTextService>Inni</StyledItemTextService>
              <ListSvg />
            </StyledItemService>
            <StyledItemService>
              <StyledItemTextService>Indeksy</StyledItemTextService>
              <ListSvg />
            </StyledItemService>
            <StyledItemService>
              <StyledItemTextService>Poczta</StyledItemTextService>
              <ListSvg />
            </StyledItemService>
          </StyledListService>
        </StyledSection>
        <Outlet />
      </StyledWrapperSection>
    </StyledContainer>
  );
};

export default BrandPage;
