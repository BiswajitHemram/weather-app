const submitBtn = document.querySelector("#submitBtn");
const input = document.querySelector("input");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDescription = document.querySelector(".weather-description");
const weatherImage = document.querySelector(".weather-image");
const currentTemperature = document.querySelector(".temp");
const maxTemperature = document.querySelector(".max-temp");
const minTemperature = document.querySelector(".min-temp");
const summary = document.querySelector(".summary");
const humidity = document.querySelector("#humidity");
const rain = document.querySelector("#rain");

// disable weatherIcon and weatherDescription
weatherIcon.style.display = "none";
weatherDescription.style.display = "none";


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = input.value.trim().length;
    if (cityName === 0) {
        alert("Please enter a city name");
        return;
    }
    else {
        getWeather(input.value);
        // weatherIcon.style.display = "flex";
        // weatherDescription.style.display = "flex";
    }
});

let currentTemp, minTemp, maxTemp, weatherSummary, humiditypercent, rainpercent;

async function getWeather(city) {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '976552d299mshc87217cf87cb136p1f534ajsn332a8c68f3ee',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const weatherData = result["daily"]["data"][0];
        currentTemp = weatherData["temperature"];
        maxTemp = weatherData["temperature_max"];
        minTemp = weatherData["temperature_min"];
        weatherSummary = weatherData["summary"].split(" ");
        lastThreeWords = weatherSummary.lastIndexOf("Temperature");
        weatherSummary = weatherSummary.slice(0, lastThreeWords).join(" ");
        humiditypercent = weatherData["humidity"];
        rainpercent = weatherData["probability"]["precipitation"];
        const iconNumber = weatherData["icon"];

        weatherImage.src = `./images/${iconNumber}.png`;
        currentTemperature.textContent = `${currentTemp}`;
        maxTemperature.textContent = `${maxTemp}`;
        minTemperature.textContent = `${minTemp}`;
        summary.textContent = `${weatherSummary}`;
        humidity.textContent = `${humiditypercent}%`;
        rain.textContent = `${rainpercent}%`;
        weatherIcon.style.display = "flex";
        weatherDescription.style.display = "flex";
    } catch (error) {
        if(error.name === "TypeError") {
            alert("City not found");
        }
    }
}


