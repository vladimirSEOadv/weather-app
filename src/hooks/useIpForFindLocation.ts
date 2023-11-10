import { useEffect, useState } from "react";
import { getUserCity } from "../utils/getUserCity";
import { isAxiosError } from "axios";

export const useIpForFindLocation = () => {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const location = await getUserCity();
        setUserLocation(location);
      } catch (error) {
        if (isAxiosError(error)) {
          setError(error);
        }
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { userLocation, loading, error };
};
