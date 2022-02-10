import styled from "styled-components";
import {
  MdCalendarToday,
  MdLocationSearching,
  MdMailOutline,
  MdPermIdentity,
  MdPhoneAndroid,
  MdPublish,
} from "react-icons/md";

export const UserContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #2bcac1;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

export const UserContent = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
`;

export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

export const UserShowImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const UserShowUserName = styled.span`
  font-weight: 600;
`;

export const UserShowUserTitle = styled.span`
  font-weight: 300;
`;

export const UserShowBottom = styled.div`
  margin-top: 20px;
`;

export const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
`;

export const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;

export const UserShowIconPermIdentity = styled(MdPermIdentity)`
  font-size: 16px;
`;

export const UserShowIconCalendarToday = styled(MdCalendarToday)`
  font-size: 16px;
`;

export const UserShowIconPhoneAndroid = styled(MdPhoneAndroid)`
  font-size: 16px;
`;

export const UserShowIconMailOutline = styled(MdMailOutline)`
  font-size: 16px;
`;

export const UserShowIconLocationSearching = styled(MdLocationSearching)`
  font-size: 16px;
`;

export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
  margin-left: 20px;
`;

export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UserUpdateLeft = styled.div``;

export const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const UserUpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid #e2e2e2;
`;

export const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: #14207e;
    color: #fff;
    font-weight: 600;
`;

export const UserUpdateUppload = styled.div`
    display: flex;
    align-items: center;
`;

export const UserUpdateIcon = styled(MdPublish)`
    cursor: pointer;
`

export const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
