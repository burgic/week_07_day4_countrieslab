import React from "react";
import Country from './Country';

const CountryList = ({countries}) => {
    const countryItem = countries.map((country, index) => {
        return <Country country={country} key={index} />
    })

    return (
        <>
        {countryItem}
        </>
    )


}

export default CountryList;