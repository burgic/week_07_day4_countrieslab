import React from "react";

const CountryDetails = ({country}) => {
    return(
        <div>
            <h3>{country.name}</h3>
            <img src={country.flag} />
            <p>Currency: {country.currencies.name}</p>
        </div>
    )
}

export default CountryDetails;