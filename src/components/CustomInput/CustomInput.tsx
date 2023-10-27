import React from "react";
import styles from "./CustomInput.module.css";

export const CustomInput: React.FC = ({placeholder, cb, value = ''}) => {
	const handleChange = (event) => {
		cb(event.target.value)
	}
	return (
			<input
					value={value}
					onChange={handleChange}
					className={`${styles["input"]} ${styles["input-default"]}`}
					placeholder={placeholder} type="text">
			</input>
	)
}
