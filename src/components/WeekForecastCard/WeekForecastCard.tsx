import React, {useState} from "react";
import styles from "./WeekForecastCard.module.css";
import {Chart} from "../Chart/Chart";
import {CustomSelect} from "../CustomSelect/CustomSelect";


export const WeekForecastCard: React.FC = ({data, dayOrWeek}) => {
	const [dailyOrNightly, setDailyOrNightly] = useState("daily"); // daily | "nightly"
	return (
			<div className={`${styles["week-forecast-card"]}`}>
				<div className={styles["week-forecast-card__header"]}>
					<div className={styles["select-wrapper"]}>
						<CustomSelect
								options={["daily", "nightly"]}
								cb={(value) => setDailyOrNightly(value)}
								value={dailyOrNightly}
						/>
					</div>
				</div>
				<div className={styles["week-forecast-card__content"]}>
					<Chart data={data} dayOrWeek={dayOrWeek}/>
				</div>
			</div>
	)
}
