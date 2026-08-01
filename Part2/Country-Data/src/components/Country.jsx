const Country = ({ country, singleCountry = false, showHandler }) => {
  if (!singleCountry) {
    return <div>
      {country.name.common}
      <button onClick={() => showHandler()}>Show</button>
      </div>;
  } 

  else {
    const languages = country.languages ? Object.values(country.languages) : [];

    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
        <h2>Languages:</h2>
        <ul>
          {languages.map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
    );
  }
};

export default Country;
