import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Weather forecast for 5 days",
    },
  },
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const makeChartData = ({ info: weekForecast, title }) => {
  const chartData = {
    labels: [],
    datasets: [
      {
        label: title,
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  for (const time in weekForecast) {
    if (weekForecast.hasOwnProperty(time)) {
      chartData.labels.push(time);
      chartData.datasets[0].data.push(weekForecast[time]);
    }
  }
  return chartData;
};

export const Chart: React.FC = ({
  weekForecast,
  datasetName = "Weather forecast for 5 days",
}) => {
  const chartData = makeChartData({
    title: datasetName,
    info: { Sunday: 1, Monday: 2 },
  });

  return (
    <div className={styles["chart"]}>
      <Bar options={options} data={chartData} />
    </div>
  );
};
