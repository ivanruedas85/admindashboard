import React from "react";
import {
    TopAvatar,
  TopBarContent,
  TopBarIcons,
  TopBarLogo,
  TopBarWrapper,
  TopIconsBadge,
  TopLeft,
  TopRight,
} from "../TopBarStyled";
import { MdLanguage, MdNotificationsNone, MdSettings } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <TopBarContent>
        <TopBarWrapper>
          <TopLeft>
            <TopBarLogo>DArthWeb</TopBarLogo>
          </TopLeft>
          <TopRight>
            <TopBarIcons>
              <MdNotificationsNone />
              <TopIconsBadge>2</TopIconsBadge>
            </TopBarIcons>
            <TopBarIcons>
              <MdLanguage />
            </TopBarIcons>
            <TopBarIcons>
              <MdSettings />
            </TopBarIcons>
            <TopAvatar src='https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=' />
          </TopRight>
        </TopBarWrapper>
      </TopBarContent>
    </>
  );
};

export default TopBar;
