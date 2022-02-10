import styled from "styled-components";
import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdPerson,
  MdStorefront,
  MdAttachMoney,
  MdOutlineEqualizer,
  MdMailOutline,
  MdOutlineDynamicFeed,
  MdOutlineMessage,
  MdError,
  MdWorkOutline,
} from "react-icons/md";

export const SideBarContent = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #57bcdf;
  position: sticky;
  top: 50px;
`;

export const SideBarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

export const SideBarMenu = styled.div`
  margin-bottom: 10px;
`;

export const SideBarTitle = styled.h3`
  font-size: 13px;
  color: #fff;
`;

export const SideBarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const SideBarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &.active {
    background-color: rgb(251, 251, 255);
  }
  &:hover {
    background-color: rgb(251, 251, 255);
  }
`;

export const SideBarIconLineStyle = styled(MdLineStyle)`
  margin-right: 5px;
  font-size: 20px;
`;

export const SideBarIconTimeline = styled(MdTimeline)`
  margin-right: 5px;
  font-size: 20px;
`;

export const SideBarIconTrendingUp = styled(MdTrendingUp)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconPerson = styled(MdPerson)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconStorefront = styled(MdStorefront)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconAttachMoney = styled(MdAttachMoney)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconOutlineEqualizer = styled(MdOutlineEqualizer)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconMailOutline = styled(MdMailOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconOutlineDynamicFeed = styled(MdOutlineDynamicFeed)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconOutlineMessage = styled(MdOutlineMessage)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconError = styled(MdError)`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarIconWorkOutline = styled(MdWorkOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`;
