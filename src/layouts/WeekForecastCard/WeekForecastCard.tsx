import React, { useContext, useState } from "react";
import styles from "./WeekForecastCard.module.css";
import { Chart } from "../../components/Chart/Chart";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { LangContext } from "../../contex/LangContextWrapper/LangContextWrapper.tsx";
import { translations } from "../../translations/translations.ts";

interface WeekForecastCardInterface {
  forecastForWeek: any;
}

export const WeekForecastCard: React.FC<WeekForecastCardInterface> = ({
  forecastForWeek,
}) => {
  const { currentLang } = useContext(LangContext);
  const options = translations.selects.dayOrNight[currentLang];
  const [dailyOrNightly, setDailyOrNightly] = useState(0);
  return (
    <div className={`${styles["week-forecast-card"]}`}>
      <div className={styles["week-forecast-card__header"]}>
        <div className={styles["select-wrapper"]}>
          <CustomSelect
            options={options} // ["daily", "nightly"]
            cb={(value) => {
              setDailyOrNightly(options.indexOf(value));
            }}
            value={options[dailyOrNightly]}
          />
        </div>
      </div>
      <div className={styles["week-forecast-card__content"]}>
        <Chart
          forecastForWeek={forecastForWeek}
          dailyOrNightly={dailyOrNightly}
        />
      </div>
    </div>
  );
};
