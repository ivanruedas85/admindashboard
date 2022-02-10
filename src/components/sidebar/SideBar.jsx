import React from "react";
import { Link } from "react-router-dom";
import {
  SideBarContent,
  SideBarMenu,
  SideBarTitle,
  SideBarWrapper,
  SideBarList,
  SideBarListItem,
  SideBarIconLineStyle,
  SideBarIconTimeline,
  SideBarIconTrendingUp,
  SideBarIconPerson,
  SideBarIconStorefront,
  SideBarIconAttachMoney,
  SideBarIconOutlineEqualizer,
  SideBarIconMailOutline,
  SideBarIconOutlineDynamicFeed,
  SideBarIconOutlineMessage,
  SideBarIconWorkOutline,
  SideBarIconError,
} from "./SideBarstyled";

const SideBar = () => {
  return (
    <>
      <SideBarContent>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarTitle>Dashboard</SideBarTitle>
            <SideBarList>
              <Link to="/" className="link">
                <SideBarListItem className="active">
                  <SideBarIconLineStyle />
                  Home
                </SideBarListItem>
              </Link>
              <SideBarListItem>
                <SideBarIconTimeline />
                Analytics
              </SideBarListItem>
              <SideBarListItem>
                <SideBarIconTrendingUp />
                Sales
              </SideBarListItem>
            </SideBarList>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarTitle>Quick Menu</SideBarTitle>
            <SideBarList>
              <Link to="/users" className="link">
                <SideBarListItem>
                  <SideBarIconPerson />
                  Users
                </SideBarListItem>
              </Link>
              <Link to="/products" className="link">
                <SideBarListItem>
                  <SideBarIconStorefront />
                  Products
                </SideBarListItem>
              </Link>
              <SideBarListItem>
                <SideBarIconAttachMoney />
                Transactions
              </SideBarListItem>
              <SideBarListItem>
                <SideBarIconOutlineEqualizer />
                Reports
              </SideBarListItem>
            </SideBarList>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarTitle>Notifications</SideBarTitle>
            <SideBarList>
              <SideBarListItem>
                <SideBarIconMailOutline />
                Mail
              </SideBarListItem>
              <SideBarListItem>
                <SideBarIconOutlineDynamicFeed />
                Feedback
              </SideBarListItem>
              <SideBarListItem>
                <SideBarIconOutlineMessage />
                Messages
              </SideBarListItem>
            </SideBarList>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarTitle>Staff</SideBarTitle>
            <SideBarList>
              <SideBarListItem>
                <SideBarIconWorkOutline />
                Manage
              </SideBarListItem>
              <SideBarListItem>
                <SideBarIconTimeline />
                Analyticks
              </SideBarListItem>
              <SideBarListItem>
                <SideBarIconError />
                Reports
              </SideBarListItem>
            </SideBarList>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContent>
    </>
  );
};

export default SideBar;
