import styled from 'styled-components';

export const StyledWrapperCalculator = styled.div`
  position: relative;
  width: 1342px;
  padding: 17px;
  margin-left: 40px;
  background: #fff;
  border-radius: 16px;
`;

export const StyledCalculatorTitle = styled.h3`
  margin: 0;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000;
`;

export const StyledWrapperCalculatorInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 47px 17px 17px;
`;

export const StyledCalculatorLabel = styled.label`
  margin-top: 22px;
`;

export const StyledCalculatorInput = styled.input`
  width: 100%;
  padding: 20px 0 20px 20px;
  border: 1px solid #e0e2e7;
  border-radius: 8px;
  margin-top: 15px;
  margin-right: 29px;
`;

export const StyledWrapperCalculatorDate = styled.div`
  display: flex;
  gap: 47px;
  // flex-direction: column;
`;

export const StyledCalculatorInputDate = styled.input`
  width: 605px;
  padding: 20px 0 20px 20px;
  border: 1px solid #e0e2e7;
  border-radius: 8px;
  margin-top: 15px;
`;
