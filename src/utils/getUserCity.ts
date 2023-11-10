import { ipServiceMockResponse } from "../mocks/data";
import axios from "axios";

export const getUserCity = async () => {
  const token = import.meta.env.VITE_TOKEN_IP_INFO;
  const url = `https://ipinfo.io/json`;
  const debug = true; // if true function use mock data
  if (debug) {
    return ipServiceMockResponse.data.city;
  } else {
    try {
      const res = await axios.get(url, {
        params: {
          token,
        },
      });
      return res.data.city;
    } catch (error) {
      console.log(error);
    }
  }
};
