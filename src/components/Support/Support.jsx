import Calculator from 'components/Calculator/Calculator';
import { StyledWrapperSupport } from './Support.styled';
import SupportCard from './SupportCard';

const Support = () => {
  return (
    <StyledWrapperSupport>
      <SupportCard />
      <Calculator />
    </StyledWrapperSupport>
  );
};

export default Support;
