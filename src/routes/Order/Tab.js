import React from "react";

export const Tab = ({innerText, onClick, id}) => {
	return(
		<button 
			className="bookmark" 
			onClick={() => onClick(id)}
		>
			{innerText}
		</button>
	)
}
	

