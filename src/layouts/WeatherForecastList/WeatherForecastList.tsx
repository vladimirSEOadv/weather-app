import React, {useEffect, useState} from "react";
import styles from "./WeatherForecastList.module.css";
import {WeatherForecastBlock} from "../../components/WeatherForecastBlock/WeatherForecastBlock";
import {CustomButton} from "../../components/CustomButton/CustomButton";
import {useIpForFindLocation} from "../../hooks/useIpForFindLocation";

export const WeatherForecastList: React.FC = () => {
	const {userLocation} = useIpForFindLocation()
	console.log("userLocation", userLocation)
	const [weatherBlocks, setWeatherBlocks] = useState([])

	useEffect(() => {
		if (userLocation) {
			setWeatherBlocks([{ id: 0, location: userLocation }]);
		}
	}, [userLocation])

	console.log("weatherBlocks", weatherBlocks)
	const createBlock = () => {
		if (weatherBlocks.length > 5) {
			alert("You can create 5 block max. Delete one please")
		} else {
			const idForNewBlock = weatherBlocks.reduce((acc, current) => {
				return acc > current.id ? acc : current.id
			}, 0)
			setWeatherBlocks((prevState) => {
				return [...prevState, {id: idForNewBlock + 1, location: null}]
			});
		}
	}
	const deleteBlock = (id) => {
		setWeatherBlocks((prev) => prev.filter((block) => block.id !== id))
	}

	return (
			<section className="forecast-list">
				<div className={`${styles["forecast-list__header"]}`}>
					<CustomButton cb={createBlock} text={"Додати блок"}/>
				</div>
				<div className={`${styles["forecast-list__content"]}`}>
					{weatherBlocks.length && weatherBlocks.map((item) => <WeatherForecastBlock key={item.id} id={item.id} deleteCallback={deleteBlock} location={item.location}/>)}
				</div>
			</section>
	)
}
