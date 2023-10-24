import {ipServiceMockResponse} from "../mocks/data";

export const getUserCity = async () => {
    try {
        // const res = await axios.get(`https://ipinfo.io/json`, {
        //   params: {
        //     token: import.meta.env.VITE_TOKEN_IP_INFO
        //   }
        // })
        const res = ipServiceMockResponse
        return res.data.city;
    } catch (error) {
        console.log(error)
    }
}