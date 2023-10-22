import React, {useEffect, useState} from "react";
import styles from "./MainPage.module.css";
import {getCurrentCity} from "../../utils/getCurrentCity";
import {getWeather} from "../../utils/getWeather";
import {WeatherForecast} from "../../components/WeatherForecast/WeatherForecast";
import {Chart} from "../../components/Chart/Chart";

const lang = ['en', 'ua']


export const MainPage: React.FC = () => {
	const [currentCity, setCurrentCity] = useState('') // Kharkiv
	const [forecast, setForecast] = useState(null)
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		getCurrentCity(setCurrentCity)
	}, [])

	useEffect(() => {
		if (currentCity) {
			getWeather(currentCity, setForecast)
		}
	}, [currentCity])
	console.log("forecast", forecast)
	return <>
		<div className={styles["main-page"]}>

			<div className="container">
				<div className={`${styles["main-page__content"]} ${styles['content-main']} safe-padding`}>

					<WeatherForecast searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
					{/*<div>*/}
					{/*    City: {currentCity}*/}
					{/*</div>*/}
					<Chart/>
				</div>
			</div>
		</div>
	</>;
}
