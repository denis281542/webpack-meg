import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { TableList } from "./TableList";

export const Details = () => {
	const [tabs, setTabs] = useState([
		{ id: 1, text: 'от 7 до 17 лет', isActive: true }, 
		{ id: 2, text: 'доп.услуги', isActive: false }, 
	])


	const activeTab = id => {
		setTabs(tabs.map(tab => {
			tab.isActive = false
			if(tab.id === id) {
				tab.isActive = true
			}
			return tab
		}))
	}

    return(
        <section className="details">
			<h3>Подробнее о коллективных заказах</h3>
			<div className="details__container">
				<Tabs 
					tabs={tabs} 
					onClick={activeTab} 
				/>

				<TableList />
							
			</div>			
		</section>
    )
}