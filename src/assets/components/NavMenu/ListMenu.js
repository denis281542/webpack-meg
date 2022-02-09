import React, { useState } from "react";
import { NavItem } from './NavItem'

export function ListMenu(props) {
  return(<>
		<ul className={props.className}>
			{props.links.map(link => {
				return (
					<NavItem
						link={link}
						id={link.id}
						key={link.id}
						onClick={props.clickMenu}
          />
				)
			})}
		</ul>
	</>)
}




