export const useLocalStore = (key="favoriteWeatherCity") => {
	function getLocalStoreData(){
		return JSON.parse(localStorage.getItem(key)) || []
	}
	
	function updateLocalStorageData(key, data){
		localStorage.setItem(key, JSON.stringify(data))
	}

	function addToLocalStore(city){
		if (!city) {
			console.log("You try add empty string to local storage.")
			return
		}
		const storage = getLocalStoreData()
		if (!storage.includes(city)) {
			storage.push(city);
			updateLocalStorageData(key, storage)
		} else {
			console.log("This value is already added to the local storage.")
		}
	}
	return {getLocalStoreData, addToLocalStore}
}