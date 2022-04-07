import React from "react";
import Country from './Country';

const CountryList = ({countries, onCountrySelected}) => {
    const countryItem = countries.map((country, index) => {
        return <Country country={country} key={index} onCountrySelected={onCountrySelected} />
    })

    const handleChange = function(event) {
        const chooseCountry = countries[event.target.value];
        onCountrySelected(chooseCountry)
    }

    return (
        <>
        <table onChange={handleChange}>

            <thead>
            <tr>
                <td>Country Name</td>
                <td>Population</td>
            </tr>
            </thead>
        {countryItem}
        </table>
        </>
    )


}

export default CountryList;