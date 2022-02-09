import React from "react";
import { Tab } from "./Tab";

export const Tabs = ({tabs, onClick}) => {
	return(
		<div className="birthdays__tabs">
			<div className="birthdays__bookmark">
				<div className='btnBookmark'></div>
				{tabs.map(tab => {
					return(<Tab 
						innerText={tab.text}
						key={tab.id}
						id={tab.id}
						isActive={tab.isActive}
						onClick={onClick}
					/>)
				})}
			</div>
		</div>
	)
}