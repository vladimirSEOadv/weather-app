import React from "react";
import styles from "./SearchField.module.css";
import {CustomInput} from "../CustomInput/CustomInput";
import {CustomButton} from "../CustomButton/CustomButton";


export const SearchField: React.FC = ({value, placeholder, cb}) => {
	return (
			<div className={styles['search-field']}>
				<CustomInput placeholder={placeholder} cb={cb} value={value}/>
				<div className={styles["button-wrapper"]}>
					<CustomButton text={"Search"}/>
				</div>
			</div>
	)
}
