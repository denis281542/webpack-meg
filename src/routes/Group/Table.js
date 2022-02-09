import React from "react";
import { TableHead } from "./TableHead";
import { Tr } from "./Tr";

export const Table = props => {
    return(
        <table className="table">

            <TableHead 
                heads={props.heads}
            />
            
            <tbody>
                {props.table.map(row => {
                    return(<Tr 
                        programm={row.programm}
                        description={row.description}
                        price={row.price}
                        key={row.id}
                    />)
                })}
               
            </tbody>
        </table>
    )
}