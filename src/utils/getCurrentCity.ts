import {ipServiceMockResponse} from "../mocks/data";

export const getCurrentCity = async (cb) => {
    try {
        // const res = await axios.get(`https://ipinfo.io/json`, {
        //   params: {
        //     token: import.meta.env.VITE_TOKEN_IP_INFO
        //   }
        // })
        const res = ipServiceMockResponse
        const userCity = res.data.city;
        cb(userCity)
    } catch(error){
        console.log(error)
    }
}