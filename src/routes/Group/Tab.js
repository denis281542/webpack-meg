import React, { useState } from "react";

export const Tab = ({tab, innerText, onClick, id}) => {
    const classes = ['bookmark']

    if(tab.isActive) classes.push('btnBookmark')

    return(
		<button 
			className={classes.join(' ')} 
			onClick={() => onClick(id)}
        >
			{innerText}
		</button>
	)
}
	

