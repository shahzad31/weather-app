
export const GetCityWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=af9474e7db79ef87b81ac0f8485cd342`
  return fetch(url)
    .then(function (response) {
      return response.json();
    });
} 

export const GetCityWeatherForecast = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=af9474e7db79ef87b81ac0f8485cd342`
  return fetch(url)
    .then(function (response) {
      return response.json();
    });
} 
