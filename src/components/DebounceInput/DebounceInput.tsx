import React, {useEffect, useState} from "react";
import {CustomInput} from "../CustomInput/CustomInput";
import {Loader} from "../Loader/Loader";
import styles from "./DebounceInput.module.css"

export const DebounceInput: React.FC = ({cb, delay, value, ...props}) => {
	const [inputValue, setInputValue] = useState(value);
	const [showLoader, setShowLoader] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoader(false)
			cb(inputValue);
		}, delay);
		return () => {
			clearTimeout(timer);
		};
	}, [inputValue, cb, delay]);

	const handleChange = (value) => {
		setShowLoader(true)
		setInputValue(value);
	};

	return (
			<div className={styles["debounce-input"]}>
				<CustomInput {...props} value={inputValue} cb={handleChange}/>
				{showLoader && <Loader/>}
			</div>
	)
}
