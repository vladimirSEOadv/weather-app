import React, {useEffect, useState} from "react";
import styles from "./WeatherForecastBlock.module.css";
import {CustomButton} from "../CustomButton/CustomButton";
import {Chart} from "../Chart/Chart";
import {useWeatherForecast} from "../../hooks/useWeatherForecast";
import {DebounceInput} from "../DebounceInput/DebounceInput";

export const WeatherForecastBlock: React.FC = ({deleteCallback, id, location}) => {
	const [city, setCity] = useState(location || "");
	const [data, setData] = useState(null);

	const { forecast, loading, error } = useWeatherForecast(city);

	useEffect(() => {
		if (city && city.trim().length) {
			setData(forecast);
		}
	},[forecast])

	const deleteFunc = () => {
		deleteCallback(id)
	}
	const addToFavorite = () => {
		const storage = localStorage.getItem('favoriteWeatherCity');
		const cityList = storage ? JSON.parse(storage) : [];
		cityList.push(city)
		localStorage.setItem('favoriteWeatherCity', JSON.stringify(cityList));
		console.log("storage", localStorage.getItem('favoriteWeatherCity'))
	}
	const content = {
		showData: (<div className={styles["forecast-block__content"]}>
			<div className={styles["forecast-block__tabs"]}>
				<CustomButton text={'День'}/>
				<CustomButton text={'Тиждень'}/>
			</div>
			<div className={"forecast-block__cards"}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam assumenda aut blanditiis eveniet fugiat harum impedit iusto laborum maxime minima neque obcaecati pariatur quisquam quo, reprehenderit suscipit velit voluptates.
			</div>
			<Chart/>
		</div>),
		loading: <>Loading...</>,
		showError: <>Error</>
	}
	return (
			<article className={`${styles['forecast-block']} safe-padding`}>
				<div className={`${styles["forecast-block__header"]} ${styles["header-forecast"]}`}>
					<DebounceInput value={city} cb={setCity} delay={5000} placeholder={"Search"}/>
					<div className={styles["header-forecast__buttons"]}>
						<CustomButton  cb={addToFavorite} text={'В обране'}/>
						<CustomButton cb={deleteFunc} text={"Видалити"} />
					</div>
				</div>
				{error && content.showError}
				{loading && content.loading}
				{data && content.showData}
			</article>
	)
}
