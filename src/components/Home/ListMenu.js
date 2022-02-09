import React from "react";
import { NavItem } from './NavItem'

export function ListMenu(props) {	
	lo
	return(<>
		<ul className={props.className}>
			{props.links.map((link, index) => {
				return (
					<NavItem 
						link={link.link}
						key={index}
					/>
				)
			})}
		</ul>
	</>)
}




