import React from "react";

export const Tr = props => {
    return(
        <tr className="table__row">
            <td className="table__data">{props.description}</td>
            <td className="table__data">{props.priceDay}</td>
            <td className="table__data">{props.priceEnd}</td>
        </tr>
    )
}