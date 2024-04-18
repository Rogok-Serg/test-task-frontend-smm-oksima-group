import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledModal = styled.div`
  position: absolute;
  width: 472px;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  background: #fff;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 22px;
  border-bottom: 2px solid #e5e7e8;
`;

export const StyledTitleModal = styled.p`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin: 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 22px;
`;

export const StyledWrapperInputModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledLabelModal = styled.label`
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000;
`;

export const StyledInputModal = styled.input`
  margin-top: 11px;

  margin-bottom: 21px;
  height: 40px;
  background-color: #fcfcfc;
  border: 1px solid rgba(229, 231, 232, 1);
  border-radius: 4px;
  padding-left: 15px;
`;

export const StyledClose = styled.button`
  position: absolute;
  width: 49px;
  height: 49px;
  border: none;
  background: none;
  border-radius: 50%;
  top: 7px;
  right: 25px;
  font-size: 35px;
  list-style: none;

  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(18, 20, 23, 0.1);
  }
`;

export const StyledWrapperInputCvcDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledWrapperCvc = styled.div`
  width: 204px;
  display: flex;
  flex-direction: column;
`;

export const StyledWrapperButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 24px;
`;

export const StyledButton = styled.button`
  width: 155px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 12px 25px;
  border-radius: 160px;
  background-image: linear-gradient(
    to right,
    rgba(112, 169, 255, 1),
    rgba(49, 110, 201, 1),
    rgba(2, 74, 181, 1)
  );
  transition: background-image 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  border: #fff;
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #fff;

  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(120, 150, 203, 1),
      rgba(41, 91, 146, 1),
      rgba(5, 62, 147, 1)
    );
  }
`;

export const StyledButtonSvg = styled.svg`
  margin-right: 10px;
`;

export const StyledButtonCancel = styled.button`
  width: 113px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 12px 25px;
  border-radius: 160px;
  background: #f5f6f7;
  border: none;
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 40px;
  color: #000;

  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #b8bbbd;
  }
`;
