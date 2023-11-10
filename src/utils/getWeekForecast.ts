import { weatherForWeekResponse } from "../mocks/data";
import axios from "axios";

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
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
