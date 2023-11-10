import { weatherForDayResponse } from "../mocks/data";
import axios from "axios";

export const getDayForecast = async (city: string, lang: string) => {
  // TODO remove debug conditions
  const debug = false;
  const appid = import.meta.env.VITE_OPEN_WEATHER_TOKEN;
  const url = `https://api.openweathermap.org/data/2.5/weather`;
  if (debug) {
    return weatherForDayResponse.data;
  } else {
    try {
      const res = await axios.get(url, {
        params: {
          q: city.toLowerCase(),
          appid,
          units: "metric",
          lang: lang,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
