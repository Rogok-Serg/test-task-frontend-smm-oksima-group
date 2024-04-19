import { Navigate } from 'react-router-dom';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledWrapperForm,
  StyledContainer,
  StyledLogin,
  StyledLoginSpan,
  StyledSelect,
  StyledSelectWrapper,
  StyledSvg,
  StyledLinkForget,
  StyledCheckedInput,
  StyledCheckedSpan,
  StyledChekedLabel,
  StyledWrapperPassword,
  StyledVisibleBtn,
  StyledVisible,
  StyledLink,
} from '../RegisterPage/RegisterPage.styled';
import { useState } from 'react';
import Logo from 'components/Logo/Logo';

const LoginPage = () => {
  const [authentificated, setAuthentificated] = useState(false);
  const [checked, setChecked] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [selectValue, setSelectValue] = useState('manager');
  const [profile] = useState(['manager', 'brand', 'affiliate']);
  const [visible, setVisible] = useState(true);

  const handelInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'typeUser':
        setSelectValue(value);
        break;
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    setAuthentificated(true);
    setEmail('');
    setPassword('');
  };
  if (authentificated && selectValue === 'manager')
    return <Navigate to="/manager" />;
  if (authentificated && selectValue === 'brand')
    return <Navigate to="/brand" />;
  if (authentificated && selectValue === 'affiliate')
    return <Navigate to="/affiliate" />;

  return (
    <StyledContainer>
      <StyledWrapperForm>
        <StyledLogin>Logowanie do oddziału</StyledLogin>
        <StyledLoginSpan>
          Wpisz swój adres e-mail i hasło, aby się zalogować!
        </StyledLoginSpan>
        <StyledForm onSubmit={handleSubmitLogin}>
          <StyledSelectWrapper>
            <StyledSvg
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
            </StyledSvg>
            <StyledSelect
              value={selectValue}
              name="typeUser"
              id=""
              onChange={handelInputChange}
            >
              {profile.map(el => (
                <option value={el}>{el.toUpperCase()}</option>
              ))}
            </StyledSelect>
          </StyledSelectWrapper>
          <StyledSpan>Email*</StyledSpan>
          <StyledLabel>
            <StyledInput
              value={email}
              onChange={handelInputChange}
              type="email"
              name="userEmail"
              required
              pattern="/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/"
            />
          </StyledLabel>
          <StyledSpan>Password*</StyledSpan>
          <StyledLabel>
            <StyledWrapperPassword>
              <StyledInput
                value={password}
                minLength={6}
                required
                onChange={handelInputChange}
                type={!visible ? 'text' : 'password'}
                name="userPassword"
              />
              <StyledVisibleBtn onClick={() => setVisible(!visible)}>
                {!visible ? (
                  <StyledVisible
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="0 0 32 32"
                  >
                    <title>eye-blocked</title>
                    <path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path>
                    <path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path>
                    <path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path>
                  </StyledVisible>
                ) : (
                  <StyledVisible
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="0 0 32 32"
                  >
                    <title>eye</title>
                    <path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
                  </StyledVisible>
                )}
              </StyledVisibleBtn>
            </StyledWrapperPassword>
            <StyledLinkForget href="Forget password">
              Forget password?
            </StyledLinkForget>
          </StyledLabel>
          <StyledChekedLabel htmlFor="checkbox">
            <StyledCheckedInput
              id="checkbox"
              type="checkbox"
              defaultChecked={checked}
              onClick={() => setChecked(!checked)}
            />
            <StyledCheckedSpan>Keep me logged in</StyledCheckedSpan>
          </StyledChekedLabel>{' '}
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        <StyledLink href="/test-task-frontend-smm-oksima-group/register">
          Sing up
        </StyledLink>
      </StyledWrapperForm>
      <Logo />
    </StyledContainer>
  );
};

export default LoginPage;
