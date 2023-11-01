import React from "react";
import styles from "./FavoritesPage.module.css";
import { WeatherForecastList } from "../../layouts/WeatherForecastList/WeatherForecastList";

export const FavoritesPage: React.FC = () => {
  return (
    <>
      <div className={styles["favorite-page"]}>
        <div className="container">
          <WeatherForecastList isFavoritePage={true} />
        </div>
      </div>
    </>
  );
};
