import { useContext, useEffect, useState } from "react";
import { LangContext } from "../contex/LangContextWrapper/LangContextWrapper";
import { getWeekForecast } from "../utils/getWeekForecast";
import { getDayForecast } from "../utils/getDayForecast";
import { isAxiosError } from "axios";

export const useWeatherForecast = (city: string, mode: "day" | "week") => {
  const [weekForecast, setWeekForecast] = useState(null);
  const [dayForecast, setDayForecast] = useState(null);
  const { currentLang } = useContext(LangContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

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
        if (isAxiosError(error)) {
          setError(error);
        } else {
          console.log("Catch Error");
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [city, currentLang, mode]);

  return { weekForecast, dayForecast, loading, error };
};
