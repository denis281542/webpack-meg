import React from "react";
import { TableHead } from "./TableHead";
import { Tr } from "./Tr";

export const TableSubHeader = props => {
    console.log(props.heads);
    return(
       <table className="table table__second">
           <TableHead 
                heads={props.heads}
           />

           <tbody>
               {props.table.map(row => {
                   return(<Tr 
                        description={row.description}
                        priceDay={row.priceDay}
                        priceEnd={row.priceEnd}
                        key={row.id}
                    />)
                })}
           </tbody>
       </table>
    )
}