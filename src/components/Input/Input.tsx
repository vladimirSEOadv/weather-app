import React from "react";
import styles from "./Input.module.css";

export const Input: React.FC = ({placeholder, cb, value}) => {
	const handleChange = (event) => {
		cb(event.target.value)
	}
	return (
			<input
					value={value}
					onChange={handleChange}
					className={`${styles["input"]} ${styles["input-default"]}`}
					placeholder={placeholder} type="text"/>
	)
}
