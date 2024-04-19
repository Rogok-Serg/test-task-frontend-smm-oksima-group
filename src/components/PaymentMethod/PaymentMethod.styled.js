import styled from 'styled-components';

export const StyledWrapperPayment = styled.div`
  width: 1375px;
  margin: 30px 0 0 45px;
`;

export const StyledPaymentTitle = styled.p`
  margin-bottom: 1px;
  padding: 20px 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
`;

export const StyledWrapperCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding: 24px 24px 40px 24px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StyledWrapperCard = styled.div`
  padding: 35px 32px;
`;

export const StyledCard = styled.div`
  width: 382px;
  height: 218px;
  border-radius: 4px;
  background-image: linear-gradient(
    to right bottom,
    rgba(36, 22, 118, 1),
    rgba(64, 61, 173, 1),
    rgba(145, 136, 199, 1)
  );
`;

export const StyledBalanceVisa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 66px;
`;

export const StyledTextBalance = styled.p`
  margin: 0;
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const StyledCardSpan = styled.span`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledNumberYear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNumberCard = styled.p`
  margin: 0 9px 0 0;
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #fff;
`;

export const StyledNumberSquares = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledTermSpan = styled.span`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledYearSpan = styled.span`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #fff;
`;

export const StyledWrapperName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledName = styled.p`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: #fff;
`;

export const StyledAddCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 218px;
  height: 218px;
  border-radius: 4px;
  background-color: #f0f6ff;
`;

export const StyledSvgPlus = styled.svg`
  fill: #b2cef8;
  cursor: pointer;
`;

export const StyledAddCardText = styled.p`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;
