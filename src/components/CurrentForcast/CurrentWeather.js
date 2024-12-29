import React from 'react';
import convertToCelsius from '../ConvertToCelcius';

import './CurrentForecast.css';
function CurrentWeather({weatherData}) {
    const icon = weatherData.weather[0].icon;  
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;


    return (
        <div className='CurrentWeatherCard'>
           {
            weatherData.weather && (
                <><img src={ iconUrl} alt={weatherData.weather[0].description} />  
                <h1>{convertToCelsius(weatherData.main.temp)} °C</h1>
                <p>feels like{convertToCelsius(weatherData.main.feels_like)} °C</p>
                <h3>{weatherData.weather[0].description}</h3></>
            )
           }
        </div>
    );
}

export default CurrentWeather;