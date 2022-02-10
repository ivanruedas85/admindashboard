import React from "react";
import {
  NewUserContainer,
  NewUserTitle,
  NewUserForm,
  NewUserItem,
  NewUserGender,
  NewUserSelect,
  NewUserButton,
} from "./NewUserStyled";

const NewUser = () => {
  return (
    <NewUserContainer>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <label>User Name</label>
          <input type="text" placeholder="John" />
        </NewUserItem>
        <NewUserItem>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </NewUserItem>
        <NewUserItem>
          <label>Email</label>
          <input type="email" placeholder="John@examplemail.com" />
        </NewUserItem>
        <NewUserItem>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <label>Phone</label>
          <input type="text" placeholder="+52 123 456 7890" />
        </NewUserItem>
        <NewUserItem>
          <label>Address</label>
          <input type="text" placeholder="Merida | Mexico" />
        </NewUserItem>
        <NewUserItem>
          <label>Gender</label>
          <NewUserGender>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <label>Active</label>
          <NewUserSelect name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </NewUserSelect>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </NewUserContainer>
  );
};

export default NewUser;
