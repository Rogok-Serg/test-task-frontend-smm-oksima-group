import {
  StyledTitle,
  StyledTrimBlock,
  StyledWrapperLogo,
} from 'pages/RegisterPage/RegisterPage.styled';

import Logotype from '../../images/logotype.png';

const Logo = () => {
  return (
    <StyledTrimBlock>
      <StyledWrapperLogo>
        <img src={Logotype} alt="logo" />
        <StyledTitle>Analytix</StyledTitle>
      </StyledWrapperLogo>
    </StyledTrimBlock>
  );
};

export default Logo;
