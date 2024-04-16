import {
  StyledWrapperProfile,
  StyledHeaderProfile,
  StyledHeaderText,
  StyledListProfile,
  StyledItemProfile,
  StyledWrapperList,
  StyledItemText,
  StyledItemData,
  StyledListData,
  StyledItemDataText,
  StyledWrapperListAvatar,
  StyledImgAvatar,
  StyledButtonEdit,
  StylefWrapperAvatarButton,
} from './Profile.styled';

import Avatar from '../../images/avatar.png';

const Profile = () => {
  return (
    <StyledWrapperProfile>
      <StyledHeaderProfile>
        <StyledHeaderText>Your Profile</StyledHeaderText>
      </StyledHeaderProfile>
      <StyledWrapperListAvatar>
        <StyledWrapperList>
          <StyledListProfile>
            <StyledItemProfile>
              <StyledItemText>Admin id:</StyledItemText>
            </StyledItemProfile>
            <StyledItemProfile>
              <StyledItemText>Name:</StyledItemText>
            </StyledItemProfile>
            <StyledItemProfile>
              <StyledItemText>Address:</StyledItemText>
            </StyledItemProfile>
            <StyledItemProfile>
              <StyledItemText>Contact No.:</StyledItemText>
            </StyledItemProfile>
            <StyledItemProfile>
              <StyledItemText>Email:</StyledItemText>
            </StyledItemProfile>
            <StyledItemProfile>
              <StyledItemText>Password:</StyledItemText>
            </StyledItemProfile>
          </StyledListProfile>
          <StyledListData>
            <StyledItemData>
              {' '}
              <StyledItemDataText>110A</StyledItemDataText>
            </StyledItemData>
            <StyledItemData>
              {' '}
              <StyledItemDataText>Adela Parkson</StyledItemDataText>
            </StyledItemData>
            <StyledItemData>
              {' '}
              <StyledItemDataText>Khumaltar, Lalitpur</StyledItemDataText>
            </StyledItemData>
            <StyledItemData>
              {' '}
              <StyledItemDataText>9841236978</StyledItemDataText>
            </StyledItemData>
            <StyledItemData>
              {' '}
              <StyledItemDataText>Adela98@gmail.com</StyledItemDataText>
            </StyledItemData>
            <StyledItemData>
              {' '}
              <StyledItemDataText>*******</StyledItemDataText>
            </StyledItemData>
          </StyledListData>
        </StyledWrapperList>
        <StylefWrapperAvatarButton>
          <div>
            <StyledImgAvatar src={Avatar} alt="avatar" />
          </div>
          <StyledButtonEdit type="button">Edit</StyledButtonEdit>
        </StylefWrapperAvatarButton>
      </StyledWrapperListAvatar>
    </StyledWrapperProfile>
  );
};

export default Profile;
