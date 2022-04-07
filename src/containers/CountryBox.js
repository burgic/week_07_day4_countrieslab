import React, {useEffect, useState} from 'react';
import Country from '../components/Country';
import CountryDetails from '../components/CountryDetails';
import CountryList from '../components/CountryList';
import CountrySelect from '../components/CountrySelect';

const CountryBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function() {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(countries => setCountries(countries))
        // .catch(err => console.error);
    }

    const onCountrySelected = function(country) {
        setSelectedCountry(country);
    }

    const totalPopulation = countries.reduce((total, country) => {
        return total + country.population
    }, 0)

    return (
        <div>
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetails country = {selectedCountry} /> : null}
            <p>Total World Population {totalPopulation}</p>
        </div>
        // <>
        // <CountryList countries={countries} onCountrySelected={onCountrySelected} />
        // 
        // {selectedCountry ? <CountryDetails country = {selectedCountry} /> : null}
        // </>
    )

    }

export default CountryBox;