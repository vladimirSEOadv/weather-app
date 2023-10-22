import React from "react";
import styles from "./WeatherForecast.module.css";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

export const WeatherForecast: React.FC = ({setSearchQuery, searchQuery}) => {
	return (
			<div>
				<div className={`${styles["weather-forecast__header"]} ${styles["header-forecast"]}`}>
					<Input value={searchQuery} cb={setSearchQuery} placeholder={"Search"}/>
					<Button text={'В обране'}/>
				</div>
				<section className={styles["weather-forecast__content"]}>
					<div className={styles["weather-forecast__tabs"]}>
						<Button text={'День'}/>
						<Button text={'Тиждень'}/>
					</div>
					<div className={"weather-forecast__cards"}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam assumenda aut blanditiis eveniet fugiat harum impedit iusto laborum maxime minima neque obcaecati pariatur quisquam quo, reprehenderit suscipit velit voluptates.
					</div>
				</section>
			</div>
	)
}
