import { useState, useEffect } from 'react'
import weatherService from '../services/weather.js'
import CountryInfo from './CountryInfo.jsx'
import Weather from './Weather.jsx'

const Country = ({ country, singleCountry = false, showHandler }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!singleCountry) return

      const lat = country.capitalInfo.latlng[0];
      const lon = country.capitalInfo.latlng[1];

      weatherService
        .getWeather(lat, lon)
        .then(weather => {
          console.log('weather', weather)
          setWeather(weather)
        })
    
  }, [singleCountry]);

  if (!singleCountry) {
    return <div>
      {country.name.common}
      <button onClick={() => showHandler()}>Show</button>
      </div>;
  } 

  else {


    return (
      <div>
        <CountryInfo country={country} />
        <Weather country={country} weather={weather} />
      </div>
    );
  }
};

export default Country;
