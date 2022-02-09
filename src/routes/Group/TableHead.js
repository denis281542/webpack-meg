import React from "react";

export const TableHead = props => {
    return(
        <thead className="table__head">
            <tr>
                {props.heads.map((head, idx) => {
                    return(
                    <th
                        key={idx}
                    >{head}</th>)
                })}

                {/* <th className="col-2"><strong>Условия</strong></th>
                <th className="col-3"><strong>Цена</strong></th> */}
            </tr>
        </thead>
    )
}