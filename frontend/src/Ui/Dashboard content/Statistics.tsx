import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";
import classes from "./Statistics.module.css";
import { useLoaderData } from "react-router";
import Heading from "./Heading";

type Item = {
  id: string;
  title: string;
  image: string;
  status: string;
  stock: number;
  price: number;
};
const Statistics = () => {
  const items = useLoaderData() as Item[];
  const chartData = items.map((item) => ({
    name: item.title,
    pv: item.price,
    uv: item.stock,
  }));

  const stockData = items.map((item) => ({
    name: item.title,
    value: Number(item.stock),
  }));

  const stockData2 = items.map((item) => ({
    name: item.title,
    value: Number(item.price),
  }));
  console.log(stockData2);

  return (
    <>
      <Heading text="Statistics" />
      <div className={classes.statistics}>
        <div className={classes.item1} >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
            
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#45e736"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#bc8c9a" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={classes.item2}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stockData2}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#bc8c9a"
                label
              />
              <Pie
                data={stockData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};
export default Statistics;
