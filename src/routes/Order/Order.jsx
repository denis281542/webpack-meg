import React from "react"
import './order.scss'
import { Offers } from "./Offers";
import { ContactPhone } from "./ContactPhone.js"; 
import { BanquetMenu } from "./BanquetMenu";
import { Birthdays } from "./Birthdays";


export const Order = () => {
	return(<main>

    <Offers />

    <ContactPhone />

    <BanquetMenu />

    <Birthdays />
   
    <ContactPhone />

	</main>)
}