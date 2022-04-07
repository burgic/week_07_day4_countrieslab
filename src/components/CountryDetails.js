import React from "react";
import "./Country.css";

const CountryDetails = ({country}) => {
    return(
        <div>
            <h3>{country.name}</h3>
            <img src={country.flag} class = "flag"/>
            <p>Currency: {country.currencies[0].name}</p>
        </div>
    )
}

export default CountryDetails;