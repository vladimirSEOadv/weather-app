import React, { useContext } from "react";
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
import { makeWeekForecastData } from "../../utils/makeWeekForecastData.ts";
import { LangContext } from "../../contex/LangContextWrapper/LangContextWrapper.tsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const stylesChartConfig = {
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

interface makeChartDataProps {
  label: string;
  info: number;
}

const makeDataForChart = ({
  formatedData,
  title,
}: {
  formatedData: makeChartDataProps[];
  title: string;
}) => {
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

  for (const day in formatedData) {
    const { label, info } = formatedData[day];
    chartData.labels.push(label);
    chartData.datasets[0].data.push(info);
  }
  return chartData;
};

interface ChartProps {
  weekForecast: any;
  datasetName?: string;
}

export const Chart: React.FC<ChartProps> = ({
  weekForecast,
  datasetName = "Weather forecast for 5 days",
}) => {
  const { currentLang } = useContext(LangContext);
  const formatedData = makeWeekForecastData(weekForecast, currentLang);
  const dataForChart = makeDataForChart({
    title: datasetName,
    formatedData,
  });

  return (
    <div className={styles["chart"]}>
      <Bar options={stylesChartConfig} data={dataForChart} />
    </div>
  );
};

// Необходимый формат
// const test = [
//   {
//     label: "text1",
//     info: 1,
//   },
//   {
//     label: "text2",
//     info: 2,
//   },
// ];
