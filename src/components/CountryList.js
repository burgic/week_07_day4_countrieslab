import React from "react";
import Country from './Country';

const CountryList = ({countries, onCountryClick}) => {
    const countryItem = countries.map((country, index) => {
        return <Country country={country} key={index} onCountryClick={onCountryClick} />
    })

    // const handleChange = function(event) {
    //     const chooseCountry = countries[event.target.value];
    //     onCountrySelected(chooseCountry)
    // }

    return (
        <div>
            {countryItem}
        </div>
    //     <>
    //     <table>

    //         <thead>
    //         <tr>
    //             <td>Country Name</td>
    //             <td>Population</td>
    //         </tr>
    //         </thead>
    //     {countryItem}
    //     </table>
    //     </>
    // )


)}

export default CountryList;