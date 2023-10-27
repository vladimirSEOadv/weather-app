import React from "react";
import styles from "./WeatherForecastList.module.css";
import {WeatherForecastBlock} from "../../components/WeatherForecastBlock/WeatherForecastBlock";
import {CustomButton} from "../../components/CustomButton/CustomButton";
import {useWeatherForecastListHook} from "./useWeatherForecastListHook";

export const WeatherForecastList: React.FC = () => {
	const {weatherBlocks, createBlock, deleteBlock} = useWeatherForecastListHook()
	return (
			<section className="forecast-list">
				<div className={`${styles["forecast-list__header"]} ${styles["header-forecast-list"]}`}>
					<div className={`${styles["header-forecast__wrapper-for-add-button"]}`}>
						<CustomButton cb={createBlock} text={"Додати блок"}/>
					</div>
				</div>
				<div className={`${styles["forecast-list__content"]}`}>
					{Boolean(weatherBlocks.length) && weatherBlocks.map((item) => <WeatherForecastBlock key={item.id} id={item.id} deleteCallback={deleteBlock} location={item.location}/>)}
				</div>
			</section>
	)
}
