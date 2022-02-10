import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";
import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
`;

export const FeaturedTitle = styled.span`
  font-size: 20px;
`;

export const FeaturedMoneyContainer = styled.div`
    margin 10px 0 ;
    display: flex;
    align-items: center;
`;

export const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

export const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const IconOutlineArrowDownward = styled(MdOutlineArrowDownward)`
  font-size: 14px;
  margin-left: 5px;
  &.negative {
    color: #c85200;
  }
`;

export const IconOutlineArrowUpward = styled(MdOutlineArrowUpward)`
  font-size: 14px;
  margin-left: 5px;
  color: #1fd497;
`;

export const FeaturedSub = styled.span`
    font-size: 15px;
    color: #626899;
`;
