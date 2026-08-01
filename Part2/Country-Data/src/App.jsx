import { useState, useEffect } from 'react'
import service from './services/countries.js'
import Filter from './components/Filter.jsx'
import Countries from './components/Countries.jsx'
import Country from './components/Country.jsx'

function App() {
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect( () => {
    service
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, []) // will prob need to modify this and have countries as a dependency, but for now it works fine

const countriesToShow = countryFilter
  ? countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
  : countries.filter(country => country.name.common.toLowerCase())

  // Not needed, can just pass setCountry directly to the showHandler prop
  const showHandler = (country) => {
    setCountry(country)
  }

  if (country) {
    return (
      <div>
        <Country country={country} singleCountry={true}/>
      </div>
    )
  }

  return (
    <div>
      <Filter 
      countryFilter={countryFilter} 
      setCountryFilter={setCountryFilter}
      />
      <Countries countries={countriesToShow} 
      countryFilter={countryFilter} 
      showHandler={setCountry}
      />
    </div>
  
  )
}

export default App
