import React from "react";
import { Table } from "./Table";

export const TableList = props => {
	return(
		<div className="birthdays__content">
			<div className="birthdays__tables">
				{props.tables.map((table, id) => {
					return(
						<Table 
							table={table}
							id={id}
							key={id}
						/>
					)
				})}
			</div>          
		</div>
	)
}