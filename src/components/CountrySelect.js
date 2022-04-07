import React from "react";

const CountrySelect = ({countries, onCountrySelected}) => {
    const countryClick = countries.map((country, index) => {
        return <option value = {index} key = {index}>{country.name} </option>
    })


    const handleChange = function (event) {
        const chooseCountry = countries[event.target.value];
        onCountrySelected(chooseCountry);
    }

    return (
        <div>
            <select defaultValue= "" onChange ={handleChange}>
                <option value = "" selected>Select Your Country</option>
                {countryClick}
            </select>
        </div>
    )
    
}

export default CountrySelect;