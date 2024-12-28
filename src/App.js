import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentForcast/CurrentWeather';
import CurrentWeatherData from './components/CurrentForcast/CurrentWeatherData';
function App() {
  return (
    <div className="App" >
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-6'>
            <div className='current-weather d-flex justify-content-between ml-3 mr-3 mb-3'>
              <CurrentWeather />
              <CurrentWeatherData />
            </div>
            <div className='hourly-forecast'>
              <h4>Hourly Forecast</h4>
              {}
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
