import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuresinfo/FeaturedInfo";
import { HomeContainer, HomeWidgets } from "./HomeStyled";
import { UserData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const HomePages = () => {
  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart data={UserData} title='User Analytics' grid datakey='Active User' />
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </HomeContainer>
  );
};

export default HomePages;
