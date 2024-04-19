import styled from 'styled-components';

export const StyledWrapperTitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUsersName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 57px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000;
  border-radius: 10px;
  margin: 31px 0 16px 40px;
  background-color: #fff;
`;

export const StyledUsersBrand = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  height: 57px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000;
  border-radius: 10px;
  margin: 31px 0 16px 40px;
  background-color: #fff;
`;
export const StyledUsersOffersBrand = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 198px;
  height: 57px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000;
  border-radius: 10px;
  margin: 31px 0 16px 40px;
  background-color: #fff;
`;

export const StyledUsersOffersAffiliate = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 57px;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000;
  border-radius: 10px;
  margin: 31px 0 16px 40px;
  background-color: #fff;
`;

export const StyledWrapperButton = styled.div`
  display: flex;
  padding: 0;
  margin-right: 35px;
  gap: 12px;
`;

export const StyledWrapperInput = styled.div`
  position: relative;
`;

export const StyledSearchSvg = styled.svg`
  position: absolute;
  left: 20px;
  height: 50%;
  transform: translateY(50%);
`;

export const StyledUsersInput = styled.input`
  width: 148px;
  height: 44px;
  border: none;
  border-radius: 10px;
  padding-left: 45px;
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #a3aed0;
`;

export const StyledUsersButton = styled.button`
  width: 148px;
  height: 44px;
  font-family: 'Public Sans' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  border: none;
  border-radius: 10px;
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

export const StyledUsersList = styled.ul`
  width: 1330px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 22px 43px 22px 16px;
  margin-left: 40px;
`;

export const StyledUsersItem = styled.li``;

export const StyledUsersSelectWrapper = styled.div`
  position: relative;
`;

export const StyledUsersSvg = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledUsersSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 5px 40px 5px 5px;
  border: none;
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #a3aed0;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
`;

export const StyledUsersComponentList = styled.ul`
  height: 829px;
  overflow: scroll;
`;
