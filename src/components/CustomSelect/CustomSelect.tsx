import React from "react";
import styles from "./CustomSelect.module.css";


export const CustomSelect: React.FC = ({options, cb, value}) => {
	const handlerChange = (event) => {
		cb(event.target.value)
	}

	return (
			<select value={value} onChange={handlerChange} className={styles['select']}>
				{options.map((option) => <option className={styles["select__options"]} key={option} value={option}>{option}</option>)}
			</select>
	)
}