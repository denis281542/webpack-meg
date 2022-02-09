import React from "react";

export const PackageList = (props) => {
	return(<>
		<li className="item__li">
			<i className="fas fa-check"></i>
			{props.item.li}
		</li>	
	</>)
}