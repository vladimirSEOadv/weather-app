import {useEffect, useState} from "react";
import {useIpForFindLocation} from "../../hooks/useIpForFindLocation";

export const useWeatherForecastListHook = () => {
	const {userLocation} = useIpForFindLocation()
	const [weatherBlocks, setWeatherBlocks] = useState([])

	useEffect(() => {
		if (userLocation) {
			setWeatherBlocks([{ id: 0, location: userLocation }]);
		}
	}, [userLocation])

	const createBlock = () => {
		if (weatherBlocks.length > 5) {
			alert("You can create 5 block max. Delete one please")
		} else {
			const idForNewBlock = weatherBlocks.reduce((acc, current) => {
				return acc > current.id ? acc : current.id
			}, 0)
			setWeatherBlocks((prevState) => {
				return [...prevState, {id: idForNewBlock + 1, location: null}]
			});
		}
	}

	const deleteBlock = (id) => {
		setWeatherBlocks((prev) => prev.filter((block) => block.id !== id))
	}

	return {weatherBlocks, createBlock, deleteBlock}
}