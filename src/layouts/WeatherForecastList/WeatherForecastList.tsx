import React, { useContext } from "react";
import styles from "./WeatherForecastList.module.css";
import { WeatherForecastBlock } from "../../layouts/WeatherForecastBlock/WeatherForecastBlock";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useMapForecastList } from "../../hooks/useMapForecastList";
import { LangContext } from "../../contex/LangContextWrapper/LangContextWrapper.tsx";
import { translations } from "../../translations/translations.ts";

interface WeatherForecastListProps {
  isFavoritePage: boolean;
}

export const WeatherForecastList: React.FC<WeatherForecastListProps> = ({
  isFavoritePage,
}) => {
  const { currentLang } = useContext(LangContext);
  const { weatherBlocks, createBlock, deleteBlock } =
    useMapForecastList(isFavoritePage);

  return (
    <section className="forecast-list">
      {!isFavoritePage && (
        <div
          className={`${styles["forecast-list__header"]} ${styles["header-forecast-list"]}`}
        >
          <div
            className={`${styles["header-forecast__wrapper-for-add-button"]}`}
          >
            <CustomButton
              cb={createBlock}
              text={translations.buttons.addBlock[currentLang]}
            />
          </div>
        </div>
      )}
      <div className={`${styles["forecast-list__content"]}`}>
        {Boolean(weatherBlocks.length) &&
          weatherBlocks.map((item) => (
            <WeatherForecastBlock
              isFavoritePage={isFavoritePage}
              key={item.id}
              id={item.id}
              deleteCallback={deleteBlock}
              // @ts-ignore
              location={item.location}
            />
          ))}
      </div>
    </section>
  );
};
