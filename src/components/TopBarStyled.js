import styled from "styled-components";

export const TopBarContent = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TopBarWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopBarLogo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #ff98ff;
  cursor: pointer;
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBarIcons = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

export const TopIconsBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -6px;
  right: 0;
  background-color: #cf2032;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  font-size: 15px;
`;

export const TopAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;

export const TopLeft = styled.div``;
