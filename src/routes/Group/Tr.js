import React from "react";

export const Tr = props => {
    return(
        <tr className="table__row">
            <td className="table__data">{props.programm || ''}</td>
            <td className="table__data">{props.description}</td>
            <td className="table__data">{props.price || ''}</td>
        </tr>
    )
}