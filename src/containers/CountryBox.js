import React, {useEffect, useState} from 'react';
import Country from '../components/Country';
import CountryList from '../components/CountryList';

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
        <>
        <CountryList countries={countries} onCountrySelected={onCountrySelected} />
        <p>Total Population {totalPopulation}</p>
        </>
    )

    }

export default CountryBox;