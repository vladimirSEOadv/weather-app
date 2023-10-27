import {weatherForDayResponse} from "../mocks/data";
import axios from "axios";

export const getDayForecast = async (city, lang) => {
	// TODO remove debug conditions
	const debug = false
	if (debug) {
		return weatherForDayResponse.data
	} else {
		try {
			const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
				params: {
					q: city.toLowerCase(),
					appid: import.meta.env.VITE_OPEN_WEATHER_TOKEN,
					units: 'metric',
					lang: lang,
				}
			})
			return res.data
		} catch (error) {
			console.log(error)
		}
	}
}