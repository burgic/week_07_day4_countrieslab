import React, {useEffect, useState} from 'react';
import Country from '../components/Country';
import CountryList from '../components/CountryList';

const CountryBox = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function() {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(res => console.log(res))
        .then(countries => setCountries(countries))
    }
    return (
        <CountryList countries={countries} />
    )

    }

export default CountryBox;