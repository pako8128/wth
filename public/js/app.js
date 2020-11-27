const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?id=2950158&appid=128ae1dca6d386ecabc033be6dbabf81";

const KELVIN = 273.15;

const weatherImage = document.querySelector(".weather > img");
const weatherTemperature = document.querySelector(".weather-temp");
const weatherDescription = document.querySelector(".weather-description");

const showWeather = (data) => {
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

const updateWeather = () => {
	fetch(WEATHER_URL)
		.then(data => data.json())
		.then(data => showWeather(data));
};

const time = document.querySelector(".time h2");
const date = document.querySelector(".time p");

const updateTime = () => {
	let now = new Date();
	time.textContent = now.getHours() + ":" + now.getMinutes();
	date.textContent = now.getDate() + "." + now.getMonth() + "." + now.getFullYear();
};

const HEADLINE_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=lkn1Iljs9nGq29A2SquF2tjTGO0WGSbE";
const headline = document.querySelector(".headlines h1");
const headlink = document.querySelector(".headlines a");
const descript = document.querySelector(".headlines p");

const showHeadline = (data) => {
	console.log(data);
	headline.textContent = data.title;
	headlink.setAttribute("href", data.url);
	descript.textContent = data.abstract;
};

const updateHeadline = () => {
	fetch(HEADLINE_URL)
		.then(data => data.json())
		.then(data => showHeadline(data.results[0]));
};

const startup = () => {
	updateWeather();
	window.setInterval(updateWeather, 120000);
	
	updateTime();
	window.setInterval(updateTime, 1000);

	updateHeadline();
	window.setInterval(updateHeadline, 100000);
};

startup();
