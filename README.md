# Weather App

A simple weather application that allows users to get the current weather conditions for a specified location. The app fetches data from the Meteosource API and displays information such as temperature, humidity, and chance of rain.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [File Structure](#file-structure)
- [License](#license)

## Demo

[Project Preview](https://biswajithemram.github.io/weather-app/)


## Features

- Enter a city name to get the current weather conditions.
- Display temperature, humidity, and chance of rain.
- Show a weather icon representing the current weather condition.

## Technologies Used

- HTML
- CSS
- JavaScript
- Font Awesome for icons
- [Meteosource API](https://rapidapi.com/meteosource/api/ai-weather-by-meteosource) for weather data

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:BiswajitHemram/weather-app.git
   cd weather-app
   ```

2. Open `index.html` in your browser.

## Usage

1. Enter the name of the city you want to get the weather for in the input field.
2. Click the search button or press Enter.
3. The weather information for the specified city will be displayed.

## API Key

This app uses the Meteosource API to fetch weather data. To use this app, you need an API key from Meteosource. Follow these steps to get your API key:

1. Sign up at [Meteosource](https://rapidapi.com/meteosource/api/ai-weather-by-meteosource).
2. Get your API key from the Meteosource dashboard.
3. Replace the placeholder API key in `script.js` with your actual API key.

```javascript
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
};
```

## File Structure

```
weather-app/
│
├── images/
│   ├── 1.png
│   └── ... (other weather icons)
│
├── style.css
├── index.html
├── script.js
└── README.md
```

## License

This project is licensed under the MIT License.
```

Feel free to further customize this README file to suit your needs.
