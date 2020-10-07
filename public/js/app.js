const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?id=2950158&appid=128ae1dca6d386ecabc033be6dbabf81";

const KELVIN = 273.15;

const weatherImage = document.querySelector(".weather > img");
const weatherTemperature = document.querySelector(".weather-temp");
const weatherDescription = document.querySelector(".weather-description");

const showWeather = (data) => {
	console.log(data);

	if (data.weather[0].main == "Clouds") {
		weatherImage.src = "image/cloudy.svg";
	} else if (data.weather[0].main == "Rain") {
		weatherImage.src = "image/rain.svg";
	} else if (data.weather[0].main == "Snow") {
		weatherImage.src = "image/snow.svg";
	} else {
		weatherImage.src = "image/sunny.svg";
	}

	const temperature = data.main.temp - KELVIN;
	weatherTemperature.textContent = temperature.toFixed(2) + " °C";
	weatherDescription.textContent = data.weather[0].description;
};

const update = () => {
	fetch(WEATHER_URL)
		.then(data => data.json())
		.then(data => showWeather(data));
};

const startup = () => {
	update();
	window.setInterval(update, 120000);
};

startup();
