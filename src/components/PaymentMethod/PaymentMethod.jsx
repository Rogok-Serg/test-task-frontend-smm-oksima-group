import { useState } from 'react';
import Visa from '../../images/visa.png';
import {
  StyledWrapperPayment,
  StyledPaymentTitle,
  StyledWrapperCards,
  StyledWrapperCard,
  StyledCard,
  StyledTextBalance,
  StyledCardSpan,
  StyledBalanceVisa,
  StyledNumberYear,
  StyledNumberCard,
  StyledNumberSquares,
  StyledTermSpan,
  StyledYearSpan,
  StyledWrapperName,
  StyledName,
  StyledAddCard,
  StyledSvgPlus,
  StyledAddCardText,
} from './PaymentMethod.styled';
import Modal from '../Modal/Modal';

const PaymentMethod = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClosedModal = () => {
    setIsOpen(false);
  };

  return (
    <StyledWrapperPayment>
      <StyledPaymentTitle>Payment Method</StyledPaymentTitle>
      <StyledWrapperCards>
        <StyledCard>
          <StyledWrapperCard>
            <StyledBalanceVisa>
              <StyledTextBalance>
                $95, 400.00 <StyledCardSpan>USD</StyledCardSpan>
              </StyledTextBalance>
              <img src={Visa} alt="visa" />
            </StyledBalanceVisa>
            <StyledNumberYear>
              <StyledNumberSquares>
                <StyledNumberCard>**** **** **** 3814</StyledNumberCard>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M13.125 13.1245H16.875V3.12449H6.875V6.87449"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.125 6.87453H3.125V16.8745H13.125V6.87453Z"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </StyledNumberSquares>
              <div>
                <StyledTermSpan>Expires</StyledTermSpan>
                <br />
                <StyledYearSpan>04 / 24</StyledYearSpan>
              </div>
            </StyledNumberYear>
            <StyledWrapperName>
              <StyledName>Kevin Gilbert</StyledName>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5C2.82843 3.5 3.5 2.82843 3.5 2C3.5 1.17157 2.82843 0.5 2 0.5Z"
                  fill="white"
                />
                <path
                  d="M6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2C9.5 2.82843 8.82843 3.5 8 3.5C7.17157 3.5 6.5 2.82843 6.5 2Z"
                  fill="white"
                />
                <path
                  d="M12.5 2C12.5 1.17157 13.1716 0.5 14 0.5C14.8284 0.5 15.5 1.17157 15.5 2C15.5 2.82843 14.8284 3.5 14 3.5C13.1716 3.5 12.5 2.82843 12.5 2Z"
                  fill="white"
                />
              </svg>
            </StyledWrapperName>
          </StyledWrapperCard>{' '}
        </StyledCard>
        <StyledCard>
          <StyledWrapperCard>
            <StyledBalanceVisa>
              <StyledTextBalance>
                $95, 400.00 <StyledCardSpan>USD</StyledCardSpan>
              </StyledTextBalance>
              <img src={Visa} alt="visa" />
            </StyledBalanceVisa>
            <StyledNumberYear>
              <StyledNumberSquares>
                <StyledNumberCard>**** **** **** 3814</StyledNumberCard>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M13.125 13.1245H16.875V3.12449H6.875V6.87449"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.125 6.87453H3.125V16.8745H13.125V6.87453Z"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </StyledNumberSquares>
              <div>
                <StyledTermSpan>Expires</StyledTermSpan>
                <br />
                <StyledYearSpan>04 / 24</StyledYearSpan>
              </div>
            </StyledNumberYear>
            <StyledWrapperName>
              <StyledName>Kevin Gilbert</StyledName>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5C2.82843 3.5 3.5 2.82843 3.5 2C3.5 1.17157 2.82843 0.5 2 0.5Z"
                  fill="white"
                />
                <path
                  d="M6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2C9.5 2.82843 8.82843 3.5 8 3.5C7.17157 3.5 6.5 2.82843 6.5 2Z"
                  fill="white"
                />
                <path
                  d="M12.5 2C12.5 1.17157 13.1716 0.5 14 0.5C14.8284 0.5 15.5 1.17157 15.5 2C15.5 2.82843 14.8284 3.5 14 3.5C13.1716 3.5 12.5 2.82843 12.5 2Z"
                  fill="white"
                />
              </svg>
            </StyledWrapperName>
          </StyledWrapperCard>{' '}
        </StyledCard>
        <StyledAddCard>
          <StyledSvgPlus
            onClick={handleOpenModal}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
          >
            <title>add-outline</title>
            <path d="M11 9h4v2h-4v4h-2v-4h-4v-2h4v-4h2v4zM10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8v0c-4.418 0-8 3.582-8 8s3.582 8 8 8v0z"></path>
          </StyledSvgPlus>
          <StyledAddCardText>Add new card</StyledAddCardText>
        </StyledAddCard>
      </StyledWrapperCards>
      {isOpen && <Modal onClick={handleClosedModal} />}
    </StyledWrapperPayment>
  );
};

export default PaymentMethod;
