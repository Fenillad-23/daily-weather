import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentForcast/CurrentWeather';
import CurrentWeatherData from './components/CurrentForcast/CurrentWeatherData';
import axios from 'axios';

function App() {
  const [position, setGeoLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setGeoLocation({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          (err) => {
            console.error(err);
            setError('Failed to retrieve location. Please enable location services.');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    } catch (err) {
      console.error('Error getting geolocation:', err);
      setError('An unexpected error occurred.');
    }
  }, []);


  useEffect(() => {
    if (position.latitude && position.longitude) {
      fetchCurrentWeather(position.latitude, position.longitude);
    }
  }, [position]);

  const fetchCurrentWeather = async (lat, lon) => {
    const keyApi = 'b561df9c8f83934e458b5646ab7b5c5a';
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`
      );
      setWeatherData(response.data);
      setCity(response.data.name);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Failed to fetch weather data. Please try again later.');
    }
  };

  return (
    <div className="App">
      {weatherData ? (<div>
        <Header city={city} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6">
              <div className="current-weather d-flex justify-content-between ml-3 mr-3 mb-3 mt-3">
                <CurrentWeather weatherData={weatherData} />
                <CurrentWeatherData weatherData={weatherData} />
              </div>
              <div className="hourly-forecast">
                <h4>Hourly Forecast</h4>
              </div>
            </div>
          </div>
        </div>
      </div>): <alert className="alert alert-info" role="alert">fetching weather data</alert>}
      

    </div>
  );
}

export default App;
