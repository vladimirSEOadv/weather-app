import React from "react";
import styles from "./CustomButton.module.css";

export const CustomButton: React.FC = ({text, cb, disabled = false, variant = "default"}) => {
	const variants = {
		default: 'default-button',
		small: 'small-button'
	}

	return (
			<button disabled={disabled} onClick={() => cb()} className={`${styles[`${variants[variant]}`]} ${styles.button}`}>
				{text}
			</button>
	)
}
