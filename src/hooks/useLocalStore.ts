export const useLocalStore = (key = "favoriteWeatherCity") => {
  function getLocalStoreData() {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  function setLocalStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function addCity(city: string) {
    if (!city) {
      console.warn("You try add empty string to local storage.");
      return;
    }
    const storage = getLocalStoreData();
    if (!storage.includes(city)) {
      storage.push(city);
      setLocalStorageData(key, storage);
    } else {
      console.log("This value is already added to the local storage.");
    }
  }

  function removeCity(city: string) {
    const storage = getLocalStoreData();
    const newData = storage.filter((item) => item !== city);
    setLocalStorageData(key, newData);
  }

  return { getLocalStoreData, addCity, removeCity };
};
// TODO доделать класс LocalStoreClass
class LocalStoreClass {
  private key: string;
  constructor(key) {
    this.key = key;
  }
}
