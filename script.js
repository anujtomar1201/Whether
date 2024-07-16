const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6aac2f7b0a254ac491c100351241607",
    "X-RapidAPI-Host": "weatherapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "http://api.weatherapi.com/v1/current.json?key=6aac2f7b0a254ac491c100351241607&q=" +
      city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.current.cloud;
      temp.innerHTML = response.current.temp_f;
      temp2.innerHTML = response.current.temp_c;
      feels_like.innerHTML = response.current.feelslike_c;
      humidity.innerHTML = response.current.humidity;
      humidity2.innerHTML = response.current.humidity;
      min_temp.innerHTML = response.current.condition.text;
      max_temp.innerHTML = response.current.wind_dir;
      wind_speed.innerHTML = response.current.wind_mph;
      wind_speed2.innerHTML = response.current.wind_kph;
      wind_degrees.innerHTML = response.current.wind_degree;
      sunrise.innerHTML = response.current.last_updated;
    })
    .catch((err) => console.error(err));
};
const btn = document.querySelector(".search");
// btn.addEventListener('click',(e) =>{
// 	e.preventDefault();
// 	getWeather(city.value);
// })
console.log(btn);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
