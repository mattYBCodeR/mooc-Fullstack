const Weather = ({ country, weather }) => {
  const temperature = (weather?.main?.temp - 273.15).toFixed(2);
  const weatherIcon = weather?.weather?.[0]?.icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  const windSpeed = weather?.wind?.speed;

  return (
    <div>
      <h2>Weather in {country.name.common}</h2>
      <div>Temperature {temperature} Celsius</div>
      <img src={weatherIconUrl} />
      <div>Wind {windSpeed} m/s</div>
    </div>
  );

};

export default Weather;
