import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";

export const UserListContent = styled.div`
  flex: 4;
`;

export const UserListUser = styled.div`
  display: flex;
  align-items: center;
`;

export const UserListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const UserListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
`;

export const UserListCancel = styled(MdOutlineDelete)`
    color: #d52423;
    cursor: pointer;
`;
