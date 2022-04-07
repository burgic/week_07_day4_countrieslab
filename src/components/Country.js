import React from "react";

const Country = ({country, onCountryClick}) => {

    const handleClick = function () {
        onCountryClick(country)
    }
    return (<li onClick={handleClick}>{country.name}</li>

    )
}

export default Country;