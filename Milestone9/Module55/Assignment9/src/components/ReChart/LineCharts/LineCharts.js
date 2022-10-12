import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineCharts = () => {
  const [price, setPrice] = useState([]);
  
    useEffect(() => {
        fetch('department.json').then(res=>res.json()).then(data => setPrice(data))
    }, [])

    return (
      <div className>
        <LineChart width={300} height={200} data={price}>
          <Line type="monotone" dataKey="price" stroke="red" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    );
};

export default LineCharts;