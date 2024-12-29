import React from 'react';
import './CurrentForecast.css';
import convertToCelsius from '../ConvertToCelcius';
import humidityIcon from '../../icons/humidity.png';
import visibleIcon from '../../icons/visible.png';
import windIcon from '../../icons/wind.png';
import uvindex from '../../icons/uvindex.png';
import clouds from '../../icons/cloud.png';
function CurrentWeatherData({ weatherData }) {

    return (
        <div className='CurrentWeatherDataCard '>
            {weatherData && <>
                <div className='column1'>
                    {weatherDataDiv("Humidity", humidityIcon, convertToCelsius(weatherData.main.humidity))}
                    {weatherDataDiv("Visibility", visibleIcon, `${weatherData.visibility} mi`)}
                    {weatherDataDiv("Wind Speed", windIcon, `${weatherData.wind.speed} mph`)}
                </div>
                <div className='column2'>
                    {weatherDataDiv("Precipitation", humidityIcon, convertToCelsius(weatherData.main.humidity))}
                    {weatherDataDiv("UV index", uvindex, `${weatherData.visibility} mi`)}
                    {weatherDataDiv('Clouds cover', clouds, `${weatherData.clouds.all} %`)}
                </div></>
            }
        </div>
    );
}

export default CurrentWeatherData;

function weatherDataDiv(label, icon, data) {
    return (
        <div className='customData'>
            <div className='icondata'>
                <img src={icon} className='weather-icon' alt={`${label} icon`} />
                <p>{data}</p>
            </div>
            <p>{label}</p>
        </div>
    );
}
