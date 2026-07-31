const Filter = ({countryFilter, setCountryFilter}) => {
    return (
        <div>
            find a country: <input value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}/>
        </div>
    )
} 
export default Filter