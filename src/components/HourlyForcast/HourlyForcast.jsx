import "../Forecast.css";
import windIcon from '../../icons/wind.png';
function HourlyForcast({ weatherData }) {
    const hourlyWeather = weatherData.hourly;

    return (
        <>
            <h6>Today</h6><div className="d-flex hourly-forcast-card">
                {hourlyWeather.data.map((hourlyData, index) => {
                    const date = new Date(hourlyData.date);
                    const hour24format = date.getHours();
                    const amPm = hour24format>12 ? "PM" : "AM";
                    const temp = hourlyData.temperature || "N/A";
                    const precipitation = hourlyData.probability?.precipitation+" "+"mm/h" || "N/A";
                    const windSpeed = hourlyData.wind.speed +" "+"mph" || "N/A";
                    const iconUrl = `https://openweathermap.org/img/wn/03d@2x.png`;
                    return (<div key={index} className="hourly-data">
                        <h5>{hour24format || "N/A"} {amPm}</h5>
                        <img src={iconUrl} alt="weather" />
                        <p>{temp} °C</p>
                        <p>{precipitation}</p>
                        <p>{windSpeed} <img src={windIcon} className="weather-icon"/></p>
                    </div>);
                })}
            </div>
        </>
    );
}
export default HourlyForcast;