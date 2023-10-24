import React from "react";
import styles from "./CustomButton.module.css";

export const CustomButton: React.FC = ({text, cb, disabled=false}) => {
	const handleClick = () => {
		console.log("button click")
		cb()
	}
	return (
			<button disabled={disabled} onClick={handleClick} className={`${styles['default-button']} ${styles.button}`}>
				{text}
			</button>
	)
}
