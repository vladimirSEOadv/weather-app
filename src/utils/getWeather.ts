import {weatherMockResponse} from "../mocks/data";

export const getWeather = async (city, cb) => {
    try {
        // const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        //   params: {
        //     q: city,
        //     appid: import.meta.env.VITE_OPEN_WEATHER_TOKEN
        //   }
        // })
        const res = weatherMockResponse
        cb(res.data)
    } catch(error){
        console.log(error)
    }
}