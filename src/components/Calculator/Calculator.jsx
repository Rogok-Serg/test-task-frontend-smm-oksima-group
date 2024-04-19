import {
  StyledWrapperCalculator,
  StyledCalculatorTitle,
  StyledWrapperCalculatorInput,
  StyledCalculatorLabel,
  StyledCalculatorInput,
  StyledWrapperCalculatorDate,
  StyledCalculatorInputDate,
} from './Calculator.styled';

const Calculator = () => {
  return (
    <StyledWrapperCalculator>
      <StyledCalculatorTitle>Calculate Bill</StyledCalculatorTitle>
      <StyledWrapperCalculatorInput>
        <StyledCalculatorLabel htmlFor="">
          UID
          <StyledCalculatorInput type="text" />
        </StyledCalculatorLabel>
        <StyledWrapperCalculatorDate>
          <StyledCalculatorLabel htmlFor="">
            Date
            <StyledCalculatorInputDate type="text" />
          </StyledCalculatorLabel>
          <StyledCalculatorLabel htmlFor="">
            Due Date
            <StyledCalculatorInputDate type="text" />
          </StyledCalculatorLabel>
        </StyledWrapperCalculatorDate>
        <StyledCalculatorLabel htmlFor="">
          Units
          <StyledCalculatorInput type="text" />
        </StyledCalculatorLabel>
      </StyledWrapperCalculatorInput>
    </StyledWrapperCalculator>
  );
};

export default Calculator;
