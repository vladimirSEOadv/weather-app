import {useContext, useEffect, useState} from "react";
import {LangContext} from "../contex/LangContextWrapper/LangContextWrapper";
import {getForecast} from '../utils/getForecast'

export const useWeatherForecast =  (city) => {
	const [forecast, setForecast] = useState(null);
	const {currentLang} = useContext(LangContext)
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const forecast = await getForecast(city, currentLang)
				setForecast(forecast)
			} catch (error) {
				setError(error);
				console.log(error)
			} finally {
				setLoading(false);
			}
		};
		getData()
	}, [city, currentLang])

	return {forecast, loading, error}
}