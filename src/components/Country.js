import React from "react";

const Country = ({country, index}) => {
    return (
        <div>
            <p>{country.name}</p>
            <p>{country.population}</p>
        </div>
    )
}

export default Country