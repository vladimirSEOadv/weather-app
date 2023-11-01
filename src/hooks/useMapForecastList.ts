import { useEffect, useState } from "react";
import { useIpForFindLocation } from "./useIpForFindLocation";
import { useLocalStore } from "./useLocalStore";

export const useMapForecastList = (isFavoritePage) => {
  const { userLocation } = useIpForFindLocation();
  const [weatherBlocks, setWeatherBlocks] = useState([]);
  const { getLocalStoreData, removeCity } = useLocalStore();
  useEffect(() => {
    if (userLocation && !isFavoritePage) {
      setWeatherBlocks([{ id: 0, location: userLocation }]);
    }

    if (isFavoritePage) {
      console.log("useMapForecastList isFavoritePage");
      const data = getLocalStoreData();
      console.log("data isFavoritePage", data);
      const cityList = data.map((city, index) => {
        return { id: index, location: city };
      });
      setWeatherBlocks(cityList);
    }
  }, [userLocation]);

  const createBlock = () => {
    if (weatherBlocks.length > 5) {
      alert("You can create 5 block max. Delete one please");
    } else {
      const idForNewBlock = weatherBlocks.reduce((acc, current) => {
        return acc > current.id ? acc : current.id;
      }, 0);
      setWeatherBlocks((prevState) => {
        return [...prevState, { id: idForNewBlock + 1, location: null }];
      });
    }
  };

  const deleteBlock = (id) => {
    if (isFavoritePage) {
      removeCity(weatherBlocks[id].location);
    }
    setWeatherBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  return { weatherBlocks, createBlock, deleteBlock };
};
