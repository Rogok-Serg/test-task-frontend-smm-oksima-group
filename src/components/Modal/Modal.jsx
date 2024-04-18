import { useState } from 'react';
import {
  StyledBackdrop,
  StyledModal,
  StyledForm,
  StyledClose,
  StyledButton,
  StyledTitleModal,
  StyledTitleWrapper,
  StyledWrapperInputModal,
  StyledLabelModal,
  StyledInputModal,
  StyledWrapperInputCvcDate,
  StyledWrapperCvc,
  StyledWrapperButton,
  StyledButtonSvg,
  StyledButtonCancel,
} from './Modal.styled';

const Modal = ({ onClick }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [date, setDate] = useState('');

  const handleInputData = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'cvc':
        setCvc(value);
        break;
      case 'date':
        setDate(value);
        break;
      default:
        break;
    }
  };

  const handelReset = () => {
    setNumber('');
    setName('');
    setCvc('');
    setDate('');
  };

  const handelSubmit = e => {
    e.preventDefault();
    setNumber('');
    setName('');
    setCvc('');
    setDate('');
    onClick();
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') onClick();
  });

  const closeBackground = event => {
    event.target.tagName === 'DIV' && onClick();
  };

  return (
    <StyledBackdrop onClick={event => closeBackground(event)}>
      <StyledModal>
        <StyledClose onClick={onClick}>&times;</StyledClose>
        <StyledTitleWrapper>
          <StyledTitleModal>Dodaj nową kartę</StyledTitleModal>
        </StyledTitleWrapper>
        <StyledForm onSubmit={handelSubmit}>
          <StyledWrapperInputModal>
            <StyledLabelModal htmlFor="numberCard">
              Numer karty
            </StyledLabelModal>
            <StyledInputModal
              id="numberCard"
              type="text"
              name="number"
              placeholder="Numer karty"
              onChange={handleInputData}
              required
              value={number}
            />
          </StyledWrapperInputModal>
          <StyledWrapperInputModal>
            <StyledLabelModal htmlFor="name">Imię na karcie</StyledLabelModal>
            <StyledInputModal
              id="name"
              name="name"
              type="text"
              placeholder="Nazwa"
              onChange={handleInputData}
              required
              value={name}
            />
          </StyledWrapperInputModal>
          <StyledWrapperInputCvcDate>
            <StyledWrapperCvc>
              <StyledLabelModal htmlFor="cvc">CVC</StyledLabelModal>
              <StyledInputModal
                id="cvc"
                name="cvc"
                type="text"
                placeholder="****"
                onChange={handleInputData}
                required
                value={cvc}
              />
            </StyledWrapperCvc>
            <StyledWrapperCvc>
              <StyledLabelModal htmlFor="date">Data ważności</StyledLabelModal>
              <StyledInputModal
                id="date"
                name="date"
                type="text"
                placeholder="MM / YY"
                onChange={handleInputData}
                required
                value={date}
              />
            </StyledWrapperCvc>
          </StyledWrapperInputCvcDate>
          <StyledWrapperButton>
            <div>
              <StyledButtonCancel onClick={handelReset} type="reset">
                Anulować
              </StyledButtonCancel>
            </div>
            <div>
              <StyledButton type="submit">
                <StyledButtonSvg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5625 7.375V7.4375H8.625H14.875C15.0242 7.4375 15.1673 7.49676 15.2727 7.60225C15.3782 7.70774 15.4375 7.85082 15.4375 8C15.4375 8.14918 15.3782 8.29226 15.2727 8.39775C15.1673 8.50324 15.0242 8.5625 14.875 8.5625H8.625H8.5625V8.625V14.875C8.5625 15.0242 8.50324 15.1673 8.39775 15.2727C8.29226 15.3782 8.14918 15.4375 8 15.4375C7.85082 15.4375 7.70774 15.3782 7.60225 15.2727C7.49676 15.1673 7.4375 15.0242 7.4375 14.875V8.625V8.5625H7.375H1.125C0.975816 8.5625 0.832742 8.50324 0.727253 8.39775C0.621763 8.29226 0.5625 8.14918 0.5625 8C0.5625 7.85082 0.621763 7.70774 0.727252 7.60225C0.832742 7.49676 0.975816 7.4375 1.125 7.4375H7.375H7.4375V7.375V1.125C7.4375 0.975816 7.49676 0.832742 7.60225 0.727253C7.70774 0.621763 7.85082 0.5625 8 0.5625C8.14918 0.5625 8.29226 0.621763 8.39775 0.727253C8.50324 0.832742 8.5625 0.975816 8.5625 1.125V7.375Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.125"
                  />
                </StyledButtonSvg>
                Dodaj kartę
              </StyledButton>
            </div>
          </StyledWrapperButton>
        </StyledForm>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
