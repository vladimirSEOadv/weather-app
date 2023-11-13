import React, { useContext } from "react";
import styles from "./DayForecastCard.module.css";
import arrowIcon from "../../assets/arrowUp.svg";
import { makeConvertedDate } from "../../utils/makeConvertedDate";
import { LangContext } from "../../contex/LangContextWrapper/LangContextWrapper";
import { translations } from "../../translations/translations.ts";
// import { WiDaySunny } from "react-icons/wi";

// @ts-ignore
export const DayForecastCard: React.FC = ({ data }) => {
  const { currentLang } = useContext(LangContext);

  const { dayNumber, dayOfWeek, monthName, year } = makeConvertedDate({
    unixDate: data.dt,
    currentLang,
    monthFormat: "MMMM", // November
    dayOfWeekFormat: "EEEE", // EEE = Mon, Sun etc..
  });
  return (
    <div className={`${styles["day-forecast-card"]}`}>
      <header className={styles["day-forecast-card__title"]}>
        <h2 className={styles["day-forecast-card__title-text"]}>
          {`${translations.forecastForDay.title[currentLang]} ${data.name}`}
        </h2>
        <p>
          <time>
            {dayOfWeek} {dayNumber} {monthName} {year}
          </time>
        </p>
      </header>
      <div
        className={`${styles["day-forecast-card__list"]} ${styles["forecast-list"]}`}
      >
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["temp"]}`}
        >
          <h3 className={styles["section_title"]}>
            {translations.forecastForDay.tempSection.title[currentLang]}
          </h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>
                {`${translations.forecastForDay.tempSection.max[currentLang]}: `}
              </span>
              <span className={styles["description"]}>
                {data.main["temp_max"]}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span
                className={styles["section__title"]}
              >{`${translations.forecastForDay.tempSection.average[currentLang]}: `}</span>
              <span className={styles["description"]}>{data.main.temp}</span>
            </li>
            <li className={styles["section__list-item"]}>
              <span
                className={styles["section__title"]}
              >{`${translations.forecastForDay.tempSection.min[currentLang]}: `}</span>
              <span className={styles["description"]}>
                {data.main.temp_min}
              </span>
            </li>
          </ul>
        </div>
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["wind"]}`}
        >
          <h3 className={styles["section_title"]}>
            {translations.forecastForDay.windSection.title[currentLang]}
          </h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span
                className={styles["section__title"]}
              >{`${translations.forecastForDay.windSection.gusts[currentLang]}: `}</span>
              <span className={styles["description"]}>{data.wind.gust}</span>
            </li>
            <li className={`${styles["section__list-item"]}`}>
              <span className={styles["section__title"]}>
                {`${translations.forecastForDay.windSection.direction[currentLang]}: `}
              </span>
              <span
                className={`${styles["description"]} ${styles["arrow-wrapper"]}`}
              >
                <img
                  style={{
                    transform: `rotate(${data.wind.deg}deg) `,
                  }}
                  className={styles["arrow"]}
                  src={arrowIcon}
                  alt=""
                />
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span
                className={styles["section__title"]}
              >{`${translations.forecastForDay.windSection.speed[currentLang]}: `}</span>
              <span className={styles["description"]}>{data.wind.speed}</span>
            </li>
          </ul>
        </div>
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["pressure"]}`}
        >
          <h3 className={styles["section_title"]}>
            {translations.forecastForDay.pressureSection.title[currentLang]}
          </h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span
                className={styles["section__title"]}
              >{`${translations.forecastForDay.pressureSection.pressure[currentLang]}: `}</span>
              <span className={styles["description"]}>
                {data.main.pressure}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>
                {`${translations.forecastForDay.pressureSection.aboveSeaLevel[currentLang]}: `}
              </span>
              <span className={styles["description"]}>
                {data.main.sea_level}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>
                {`${translations.forecastForDay.pressureSection.aboveGroundLevel[currentLang]}: `}
              </span>
              <span className={styles["description"]}>
                {data.main.grnd_level}
              </span>
            </li>
          </ul>
        </div>
        {/*TODO add icons*/}
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["weather-desc"]}`}
        >
          <h3 className={styles["section_title"]}>
            {translations.forecastForDay.descriptionSection.title[currentLang]}
          </h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Main: </span>
              <span className={styles["description"]}>
                {data.weather[0].main}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>
                {`${translations.forecastForDay.descriptionSection.description[currentLang]}: `}
              </span>
              <span className={styles["description"]}>
                {data.weather[0].description}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Icon</span>
              <span className={styles["description"]}>text</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
