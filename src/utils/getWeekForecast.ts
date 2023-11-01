import { weatherForWeekResponse } from "../mocks/data";
import axios from "axios";

export const parseDate = (data: { list: any[] }) => {
  const result = data.list.reduce((acc, current) => {
    const unixFormat = new Date(current.dt * 1000);
    const [dayKey, timeKey] = unixFormat.toISOString().split("T");
    // dayKey 2023-10-24 timeKey 21:00:00.000Z
    const time = timeKey.substring(0, 5);
    // time 21:00
    const [year, month, day] = dayKey.split("-");
    if (!acc[day]) {
      acc[day] = {};
    }

    if (!acc[day][time]) {
      acc[day][time] = {
        temp: [],
      };
    }
    // console.log("current", current)
    acc[day][time].temp = current.main.temp;
    return acc;
  }, []);
  for (const resultKey in result) {
  }
  // return total
  return result;
};

function getAverageValue(arrOfNumbers) {
  return arrOfNumbers.reduce((acc, current) => {
    return acc + current / arrOfNumbers.length;
  }, 0);
}

export const getWeekForecast = async (city: string, lang: string) => {
  // TODO remove debug conditions
  const debug: boolean = false;
  if (debug) {
    return weatherForWeekResponse.data;
  } else {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            q: city.toLowerCase(),
            appid: import.meta.env.VITE_OPEN_WEATHER_TOKEN,
            units: "metric",
            lang: lang,
          },
        },
      );
      console.log("parseDate(forecastData)", parseDate(res.data));
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
