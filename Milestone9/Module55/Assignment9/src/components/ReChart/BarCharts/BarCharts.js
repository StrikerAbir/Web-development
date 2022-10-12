import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = ({ topics }) => {
    return (
      <div width="100%" height="100%">
        <BarChart  width={300} height={200} data={topics}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="total"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    );
};

export default BarCharts;