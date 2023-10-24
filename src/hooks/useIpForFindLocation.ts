import {useEffect, useState} from "react";
import {getUserCity} from '../utils/getUserCity'

export const useIpForFindLocation = () => {
	const [userLocation, setUserLocation] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const location = await getUserCity()
				setUserLocation(location)
			} catch (error) {
				setError(error);
				console.log(error)
			} finally {
				setLoading(false);
			}
		};
		getData()
	}, [])

	return {userLocation, loading, error}
}