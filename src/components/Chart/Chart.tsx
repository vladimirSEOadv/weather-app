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

interface StylesChartConfigInterface {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top";
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

const stylesChartConfig: StylesChartConfigInterface = {
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
  formattedData,
  title,
}: {
  formattedData: makeChartDataProps[];
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

  interface oneBarInterface {
    label: string;
    info: number;
  }

  for (const day in formattedData) {
    // @ts-ignore
    const { label, info }: oneBarInterface = formattedData[day];
    // @ts-ignore
    chartData.labels.push(label);
    // @ts-ignore
    chartData.datasets[0].data.push(info);
  }
  return chartData;
};

interface ChartProps {
  forecastForWeek: any;
  datasetName?: string;
}

export const Chart: React.FC<ChartProps> = ({
  forecastForWeek,
  datasetName = "Weather forecast for 5 days",
}) => {
  const { currentLang } = useContext(LangContext);
  const formattedData = makeWeekForecastData(forecastForWeek, currentLang);
  const dataForChart = makeDataForChart({
    title: datasetName,
    formattedData,
  });

  return (
    <div className={styles["chart"]}>
      <Bar options={stylesChartConfig} data={dataForChart} />
    </div>
  );
};
