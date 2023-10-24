import React from "react";
import styles from "./MainPage.module.css";
import {WeatherForecastList} from "../../layouts/WeatherForecastList/WeatherForecastList";

export const MainPage: React.FC = () => {
	return <>
		<div className={styles["main-page"]}>
			<div className="container">
				<WeatherForecastList/>
			</div>
		</div>
	</>;
}
