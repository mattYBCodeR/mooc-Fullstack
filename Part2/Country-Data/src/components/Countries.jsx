const Countries = ({ countries, countryFilter }) => {
  if (!countryFilter) {
    return (
      <div>
        Here are all the countries in the world:
        {countries.map((country) => (
          <div key={country.name.official}>{country.name.common}</div>
        ))}
      </div>
    );
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name.official}>{country.name.common}</div>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
        <h2>Languages:</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
    );
  }
};

export default Countries;
