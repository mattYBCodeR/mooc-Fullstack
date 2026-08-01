import Country from "./Country";

const Countries = ({ countries, countryFilter, showHandler }) => {
  if (!countryFilter) {

    return (
      <div>
        Here are all the countries in the world:
        {countries.map((country) => (
          <Country
            key={country.name.official}
            country={country}
            singleCountry={false}
          />
        ))}
      </div>
    );

  } 
  else if (countries.length > 10) {
    return <div>Too many countriers were matched, specify a more specific filter</div>;

  } 
  else if (countries.length > 1) {
    
    return (
      <div>
        {countries.map((country) => (
          <Country
            key={country.name.official}
            country={country}
            singleCountry={false}
            showHandler={() => showHandler(country)}
          />
        ))}
      </div>
    );

  } 
  else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <Country
          key={country.name.official}
          country={country}
          singleCountry={true}
        />
      </div>
    );
  }
  
};

export default Countries;
