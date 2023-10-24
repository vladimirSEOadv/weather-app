import React, {useContext} from "react";
import styles from "./LangSwitcher.module.css";
import {CustomSelect} from "../CustomSelect/CustomSelect";
import {LangContext} from "../../contex/LangContextWrapper/LangContextWrapper";

export const LangSwitcher: React.FC = () => {
	const {
		currentLang,
		langSetter
	} = useContext(LangContext)
	return (
			<div className={styles["lang-switcher"]}>
				<CustomSelect cb={langSetter} value={currentLang} options={['ua', "en"]}/>
			</div>
	)
}
