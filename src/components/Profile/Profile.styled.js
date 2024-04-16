import styled from 'styled-components';

export const StyledWrapperProfile = styled.div`
  position: relative;
  width: 1342px;
  padding: 17px;
  margin-left: 47px;
  background: #fff;
  border-radius: 16px;
`;

export const StyledHeaderProfile = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(112, 169, 255, 1),
    rgba(49, 110, 201, 1),
    rgba(2, 74, 181, 1)
  );
  border-radius: 16px;
  margin: 0;
`;

export const StyledHeaderText = styled.p`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #fff;
  padding: 50px 0 50px 30px;
  margin: 0;
`;

export const StyledWrapperListAvatar = styled.div`
  display: flex;
`;

export const StyledWrapperList = styled.div`
  display: flex;
  margin: 65px 0 0 114px;
`;

export const StyledListProfile = styled.ul``;

export const StyledItemProfile = styled.li`
  display: flex;
`;

export const StyledItemText = styled.p`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #6c757d;
  margin: 0 84px 24px 0;
`;

export const StyledListData = styled.ul``;

export const StyledItemData = styled.li`
  display: flex;
`;
export const StyledItemDataText = styled.p`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #2b3674;
  margin: 0 0 24px 0;
`;

export const StylefWrapperAvatarButton = styled.div`
  position: absolute;
  top: 38px;
  right: 105px;
  text-align: center;
`;

export const StyledImgAvatar = styled.img`
  margin: 0 auto;
  border-radius: 50%;
`;

export const StyledButtonEdit = styled.button`
  padding: 13px 50px;
  margin-top: 150px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
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
