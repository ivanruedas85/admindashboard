import React from "react";
import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedMoney,
  FeaturedMoneyContainer,
  FeaturedMoneyRate,
  FeaturedSub,
  FeaturedTitle,
  IconOutlineArrowDownward,
  IconOutlineArrowUpward,
} from "./FeaturesStyled";

const FeaturedInfo = () => {
  return (
    <FeaturedContainer>
      <FeaturedItem>
        <FeaturedTitle>Revanue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4 <IconOutlineArrowDownward className="negative" />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4 <IconOutlineArrowDownward className="negative" />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4 <IconOutlineArrowUpward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </FeaturedContainer>
  );
};

export default FeaturedInfo;
