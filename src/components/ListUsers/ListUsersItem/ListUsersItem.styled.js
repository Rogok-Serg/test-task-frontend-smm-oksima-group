import styled from 'styled-components';

export const StyledUserItem = styled.li`
  display: flex;
  flex-diraction: row;
  justify-content: space-between;
  margin: 0;
  padding: 16px 0 16px 20px;
  background-color: #fff;
  margin-bottom: 7px;
  border-radius: 10px;

  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(112, 169, 255, 1),
      rgba(52, 112, 202, 1),
      rgba(0, 72, 179, 1)
    );
  }
`;

export const StyledUserText = styled.p`
  margin: 0;
  margin-right: 88px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #a3aed0;
`;

export const StyledWrapperUserButton = styled.div`
  display: flex;
`;

export const StyledUserButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
