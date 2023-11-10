import React, { useContext, useEffect, useState } from "react";
import {
  ButtonVariant,
  CustomButton,
} from "../../components/CustomButton/CustomButton";
import { useWeatherForecast } from "../../hooks/useWeatherForecast";
import { DayForecastCard } from "../DayForecastCard/DayForecastCard";
import { DebounceInput } from "../../components/DebounceInput/DebounceInput";
import { LoadingBlock } from "../../components/LoadingBlock/LoadingBlock";
import styles from "./WeatherForecastBlock.module.css";
import { WeekForecastCard } from "../WeekForecastCard/WeekForecastCard";
import { useLocalStore } from "../../hooks/useLocalStore";
import { LangContext } from "../../contex/LangContextWrapper/LangContextWrapper.tsx";
import { translations } from "../../translations/translations.ts";

interface WeatherForecastBlockProps {
  isFavoritePage: boolean;
  deleteCallback: () => void;
  id: number;
  location: string;
}

export const WeatherForecastBlock: React.FC<WeatherForecastBlockProps> = ({
  isFavoritePage,
  deleteCallback,
  id,
  location,
}) => {
  const { currentLang } = useContext(LangContext);
  const [city, setCity] = useState<String>(location || "");
  const [forecastForWeek, setForecastForWeek] = useState<any>(null);
  const [forecastForDay, setForecastForDay] = useState<any>(null);
  const [dayOrWeek, setDayOrWeek] = useState<"day" | "week">("week"); // "week" | "day"
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
              variant={"small" as ButtonVariant}
              cb={() => {
                setDayOrWeek("day");
              }}
              text={translations.buttons.day[currentLang]}
            />
            <CustomButton
              disabled={dayOrWeek === "week"}
              variant={"small" as ButtonVariant}
              cb={() => setDayOrWeek("week")}
              text={translations.buttons.week[currentLang]}
            />
            <div className={styles["select-wrapper"]}></div>
          </div>
        </div>
        {dayOrWeek === "day" && forecastForDay ? (
          <DayForecastCard data={forecastForDay} />
        ) : (
          <WeekForecastCard
            forecastForWeek={forecastForWeek}
            dayOrWeek={dayOrWeek}
          />
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
              text={translations.buttons.addToFavorite[currentLang]}
            />
          )}
          <CustomButton
            cb={() => deleteCallback(id)}
            text={translations.buttons.deleteButton[currentLang]}
          />
        </div>
      </div>
      {loading && !!city && content.loading}
      {!loading && error && content.showError}
      {!loading && !error && Boolean(forecastForWeek) && content.showData}
    </article>
  );
};
