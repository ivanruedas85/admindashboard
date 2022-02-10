import React from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import {
  UserAddButton,
  UserContainer,
  UserContent,
  UserShow,
  UserShowBottom,
  UserShowImage,
  UserShowTop,
  UserTitle,
  UserTitleContainer,
  UserUpdate,
  UserShowTopTitle,
  UserShowUserName,
  UserShowUserTitle,
  UserShowTitle,
  UserShowInfoTitle,
  UserShowInfo,
  UserShowIconPermIdentity,
  UserShowIconCalendarToday,
  UserShowIconPhoneAndroid,
  UserShowIconMailOutline,
  UserShowIconLocationSearching,
  UserUpdateTitle,
  UserUpdateForm,
  UserUpdateLeft,
  UserUpdateRight,
  UserUpdateItem,
  UserUpdateInput,
  UserUpdateUppload,
  UserUpdateImg,
  UserUpdateButton,
  UserUpdateIcon,
} from "./UserStyled";

const User = () => {
  return (
    <UserContainer>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to='/newUser'>
          <UserAddButton>Create</UserAddButton>
        </Link>
        {/*<Link>
        </Link>*/}
      </UserTitleContainer>
      <UserContent>
        <UserShow>
          <UserShowTop>
            <UserShowImage src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <UserShowTopTitle>
              <UserShowUserName>Anna Barker</UserShowUserName>
              <UserShowUserTitle>Software Engineer</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <UserShowIconPermIdentity />
              <UserShowInfoTitle>annabak99</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIconCalendarToday />
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <UserShowIconPhoneAndroid />
              <UserShowInfoTitle>+521234567890</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIconMailOutline />
              <UserShowInfoTitle>annabak99@examplemail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIconLocationSearching />
              <UserShowInfoTitle>Tabasco | Mexico</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <label>Username</label>
                <UserUpdateInput type="text" placeholder="annabak99" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Full name</label>
                <UserUpdateInput type="text" placeholder="Anna Barker" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Email</label>
                <UserUpdateInput
                  type="text"
                  placeholder="annabak99@examplemail.com"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Phone</label>
                <UserUpdateInput type="text" placeholder="+521234567890" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Address</label>
                <UserUpdateInput type="text" placeholder="Tabasco | Mexico" />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUppload>
                <UserUpdateImg src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <label htmlFor="file">
                  <UserUpdateIcon />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUppload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContent>
    </UserContainer>
  );
};

export default User;
