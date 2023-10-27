import React, {useContext} from "react";
import styles from "./DayForecastCard.module.css";
import arrowIcon from "../../assets/arrowUp.svg";
import {makeConvertedDate} from "../../utils/makeConvertedDate";
import {LangContext} from "../../contex/LangContextWrapper/LangContextWrapper";
// import { WiDaySunny } from "react-icons/wi";

export const DayForecastCard: React.FC = ({ data }) => {
  const {currentLang} = useContext(LangContext)

  const {day, monthName, year} = makeConvertedDate({unixDate: data.dt, lang: currentLang})
  return (
    <div className={`${styles["day-forecast-card"]}`}>
      <header className={styles["day-forecast-card__title"]}>
        <h2 className={styles["day-forecast-card__title-text"]}>
          Погода в {data.name}
        </h2>
        <p>
          <time>{day} {monthName} {year}</time>
        </p>
      </header>
      <div
        className={`${styles["day-forecast-card__list"]} ${styles["forecast-list"]}`}
      >
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["temp"]}`}
        >
          <h3 className={styles["section_title"]}>Температура</h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Максимальная: </span>
              <span className={styles["description"]}>
                {data.main["temp_max"]}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>В среднем: </span>
              <span className={styles["description"]}>{data.main.temp}</span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Минимальная: </span>
              <span className={styles["description"]}>
                {data.main.temp_min}
              </span>
            </li>
          </ul>
        </div>
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["wind"]}`}
        >
          <h3 className={styles["section_title"]}>Ветер</h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Порывы ветра: </span>
              <span className={styles["description"]}>{data.wind.gust}</span>
            </li>
            <li className={`${styles["section__list-item"]}`}>
              <span className={styles["section__title"]}>
                Направление ветра:{" "}
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
              <span className={styles["section__title"]}>Скорость: </span>
              <span className={styles["description"]}>{data.wind.speed}</span>
            </li>
          </ul>
        </div>
        <div
          className={`${styles["day-forecast-card__section"]} ${styles["pressure"]}`}
        >
          <h3 className={styles["section_title"]}>Давление</h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Давление: </span>
              <span className={styles["description"]}>
                {data.main.pressure}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>
                Над уровнем моря:{" "}
              </span>
              <span className={styles["description"]}>
                {data.main.sea_level}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>
                Над уровнем земли:{" "}
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
          <h3 className={styles["section_title"]}>Заголовок</h3>
          <ul className={styles["section__list"]}>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Main: </span>
              <span className={styles["description"]}>
                {data.weather[0].main}
              </span>
            </li>
            <li className={styles["section__list-item"]}>
              <span className={styles["section__title"]}>Описание: </span>
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
