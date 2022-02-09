import React from "react";

export const Tr = props => {
	return(
		<tr>
			<td>{props.service}</td>
			<td>{props.weekdays || '3200'}</td>
			<td>{props.weekends || '4000'}</td>
		</tr>
	)
}