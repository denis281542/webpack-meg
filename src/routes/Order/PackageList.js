import React from "react";

export const PackageList = (props) => {
	return(<>
		<li className="item__li">
			<i className="fas fa-check" style={{ paddingRight: '10px' }}></i>
			{props.item.li}
		</li>	
	</>)
}