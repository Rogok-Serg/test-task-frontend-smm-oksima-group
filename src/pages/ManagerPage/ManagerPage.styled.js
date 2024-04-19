// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: start;
  margin: 0 auto;
  max-width: 1728px;
  height: 1180px;
  background: #f2f2f2;
`;
export const StyledWrapperSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledAside = styled.aside`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 18px 5px 0 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(112, 169, 255, 1),
    rgba(49, 110, 201, 1),
    rgba(2, 74, 181, 1)
  );
`;

export const StyledwrapperLogo = styled.div`
  width: 260px;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const StyledTitle = styled.h2`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000;
`;

export const StyledList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

export const StyledSection = styled.section`
  padding-right: 20px;
`;

export const StyledListService = styled.ul`
  display: flex;
`;

export const StyledItemService = styled.li`
  display: flex;
  align-items: center;
  padding: 25px 80px 35px 80px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 17px;
  cursor: pointer;
`;

export const StyledItemTextService = styled.p`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 32px;
  color: #000;
  margin: 0;
  margin-right: 24px;
`;
