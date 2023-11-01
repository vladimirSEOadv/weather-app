import React, { useEffect, useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useWeatherForecast } from "../../hooks/useWeatherForecast";
import { DayForecastCard } from "../DayForecastCard/DayForecastCard";
import { DebounceInput } from "../../components/DebounceInput/DebounceInput";
import { LoadingBlock } from "../../components/LoadingBlock/LoadingBlock";
import styles from "./WeatherForecastBlock.module.css";
import { WeekForecastCard } from "../WeekForecastCard/WeekForecastCard";
import { useLocalStore } from "../../hooks/useLocalStore";

export const WeatherForecastBlock: React.FC = ({
  isFavoritePage,
  deleteCallback,
  id,
  location,
}) => {
  const [city, setCity] = useState<String>(location || "");
  const [forecastForWeek, setForecastForWeek] = useState(null);
  const [forecastForDay, setForecastForDay] = useState(null);
  const [dayOrWeek, setDayOrWeek] = useState("week"); // "week" | "day"
  const { weekForecast, dayForecast, loading, error } = useWeatherForecast(
    city.trim(),
    dayOrWeek,
  );

  useEffect(() => {
    if (!city.trim().length) return; // if there is no city value, there is no point in making a request for data
    if (dayOrWeek === "day") {
      setForecastForDay(dayForecast);
    } else if (dayOrWeek === "week") {
      setForecastForWeek(weekForecast);
    }
  }, [weekForecast, dayForecast, dayOrWeek]);

  const { addCity } = useLocalStore("favoriteWeatherCity");

  const content = {
    showData: (
      <div
        className={`${styles["forecast-block__content"]} ${styles["content-forecast"]}`}
      >
        <div className={`${styles["content-forecast__header"]}`}>
          <div className={styles["forecast-block__tabs"]}>
            <CustomButton
              disabled={dayOrWeek === "day"}
              variant={"small"}
              cb={() => {
                setDayOrWeek("day");
              }}
              text={"День"}
            />
            <CustomButton
              disabled={dayOrWeek === "week"}
              variant={"small"}
              cb={() => setDayOrWeek("week")}
              text={"Тиждень"}
            />
            <div className={styles["select-wrapper"]}></div>
          </div>
        </div>
        {dayOrWeek === "day" && forecastForDay ? (
          <DayForecastCard data={forecastForDay} />
        ) : (
          <WeekForecastCard data={forecastForWeek} dayOrWeek={dayOrWeek} />
        )}
      </div>
    ),
    loading: <LoadingBlock />,
    showError: <>{error}</>,
  };

  return (
    <article className={`${styles["forecast-block"]} safe-padding`}>
      <div
        className={`${styles["forecast-block__header"]} ${styles["header-forecast"]}`}
      >
        {!isFavoritePage && (
          <DebounceInput
            value={city}
            cb={setCity}
            delay={5000}
            placeholder={"Search"}
          />
        )}
        <div className={styles["header-forecast__buttons"]}>
          {!isFavoritePage && (
            <CustomButton
              disabled={!city}
              cb={() => addCity(city)}
              text={"В обране"}
            />
          )}
          <CustomButton cb={() => deleteCallback(id)} text={"Видалити"} />
        </div>
      </div>
      {loading && !!city && content.loading}
      {!loading && error && content.showError}
      {!loading && !error && Boolean(forecastForWeek) && content.showData}
    </article>
  );
};
