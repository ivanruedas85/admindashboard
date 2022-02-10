import styled from "styled-components";
import { MdVisibility } from "react-icons/md";

export const WidgetSmContent = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
  padding: 20px;
  margin-right: 20px;
`;

export const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const WidgetSmImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WidgetSmUserName = styled.span`
  font-weight: 600;
`;

export const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

export const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export const WidgetSmIcon = styled(MdVisibility)`
    font-size: 16px;
    margin-right: 5px;
`;
