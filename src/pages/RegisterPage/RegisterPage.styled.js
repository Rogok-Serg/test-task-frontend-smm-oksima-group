import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1728px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const StyledWrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 205px 230px 15px;
`;

export const StyledLogin = styled.h2`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  color: #000;
  margin: 0;
`;

export const StyledRegister = styled.h2`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  color: #000;
  margin: 0;
  margin-bottom: 50px;
`;

export const StyledLoginSpan = styled.span`
  position: relative;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #a3aed0;
  margin-bottom: 45px;
`;

export const StyledForm = styled.form`
  position: relative;
  text-align: start;
  width: 410px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -30px;
    background: #e0e5f2;
  }
`;

export const StyledWrapperNameEmail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 410px;
  padding: 20px 40px 20px 20px;
  border: 1px solid #e0e2e7;
  border-radius: 16px;
  margin-right: 5%;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
`;
export const StyledSelectWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;
export const StyledSvg = styled.svg`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledLabel = styled.label`
  display: block;
  text-align: end;
  margin-bottom: 24px;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 20px 0 20px 20px;
  border: 1px solid #e0e2e7;
  border-radius: 16px;
  margin-top: 15px;
`;

export const StyledSpan = styled.span`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #000;
`;

export const StyledWrapperPassword = styled.div`
  position: relative;
  display: flex;
`;

export const StyledVisibleBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  cursor: pointer;
`;
export const StyledVisible = styled.svg`
  fill: #a3aed0;
`;

export const StyledLinkForget = styled.a`
  text-decoration: none;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #2e65f3;
  margin-right: -15px;
`;

export const StyledChekedLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  margin-bottom: 40px;
`;
export const StyledCheckedSpan = styled.span`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;

export const StyledCheckedInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 14px;
`;

export const StyledButton = styled.button`
  padding: 20px 90px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #fff;
  border: none;
  border-radius: 16px;
  background-image: linear-gradient(
    to right,
    rgba(112, 169, 255, 1),
    rgba(49, 110, 201, 1),
    rgba(2, 74, 181, 1)
  );
  cursor: pointer;
  transition: background-image 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(120, 150, 203, 1),
      rgba(41, 91, 146, 1),
      rgba(5, 62, 147, 1)
    );
  }
`;

export const StyledTrimBlock = styled.div`
  overflow: hidden;
`;

export const StyledWrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 300px 178px 330px 226px;
  margin-bottom: -30px;

  background-image: linear-gradient(
    to bottom,
    rgba(112, 169, 255, 1),
    rgba(49, 110, 201, 1),
    rgba(2, 74, 181, 1)
  );
  border-bottom-left-radius: 200px;
`;

export const StyledTitle = styled.h1`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 32px;
  color: #fff;
`;

export const StyledLink = styled.a`
  text-align: start;
  margin-top: 30px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #2e65f3;
`;
