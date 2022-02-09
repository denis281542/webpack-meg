import React from "react";
import { Tab } from "./Tab";

export const Tabs = ({tabs, onClick}) => {
	return(
		<div className="birthdays__tabs">
			<div className="birthdays__bookmark">
				{tabs.map(tab => {
					return(<Tab 
						tab={tab}
						innerText={tab.text}
						key={tab.id}
						id={tab.id}
						onClick={onClick}
					/>)
				})}
			</div>
		</div>
	)
}