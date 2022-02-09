import React from "react";
import { Intro } from "./Intro/Intro";
import { ItemsList } from "./Items/ItemsList";
import { Attractions } from "./Attractions/Attractions";
import { FoodMenu } from "./FoodMenu/FoodMenu";
import { Contacts } from "./Contacts/Contacts";

export const Home = () => {
	return(<>
		<Intro />
		<ItemsList />
		<Attractions />
		<FoodMenu />
		<Contacts />    
	</>)
}