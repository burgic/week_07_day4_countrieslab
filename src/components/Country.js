import React from "react";

const Country = ({country, index}) => {
    return (
            <tr key={index}>
            <td>{country.name}</td>
            <td>{country.population}</td>
            </tr>
        
    )
}

export default Country