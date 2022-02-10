import React from "react";
import { ChartContainer, ChartTitle } from "./ChartStyled";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({title, data, datakey, grid}) => {
  
  return (
    <>
      <ChartContainer>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={datakey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5' />}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
};

export default Chart;
