import React from "react";
import styles from "./Button.module.css";

export const Button: React.FC = ({text}) => {
	return (
			<button className={`${styles['default-button']} ${styles.button}`}>
				{text}
			</button>
	)
}
