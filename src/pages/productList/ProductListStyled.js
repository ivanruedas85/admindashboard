import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";

export const PLContainer = styled.div`
    flex: 4;
`;

export const PLCancel = styled(MdOutlineDelete)`
    color: #d52423;
    cursor: pointer;
`;

export const PLUser = styled.div`
  display: flex;
  align-items: center;
`;

export const PLImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const PLEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
`;