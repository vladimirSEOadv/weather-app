import { useContext, useEffect, useState } from "react";
import { LangContext } from "../contex/LangContextWrapper/LangContextWrapper";
import { getWeekForecast } from "../utils/getWeekForecast";
import { getDayForecast } from "../utils/getDayForecast";

export const useWeatherForecast = (city, mode) => {
  const [weekForecast, setWeekForecast] = useState(null);
  const [dayForecast, setDayForecast] = useState(null);
  const { currentLang } = useContext(LangContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError(null);
    const getData = async () => {
      try {
        switch (mode) {
          case "day":
            const dayForecast = await getDayForecast(city, currentLang);
            setDayForecast(dayForecast);
            break;
          case "week":
            const weekForecast = await getWeekForecast(city, currentLang);
            setWeekForecast(weekForecast);
            break;
        }
      } catch (error) {
        setError(error);
        console.log("Catch Error");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [city, currentLang, mode]);

  return { weekForecast, dayForecast, loading, error };
};
