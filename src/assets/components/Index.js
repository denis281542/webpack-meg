import React from "react";
import { NavMenu } from "../components/NavMenu/NavMenu"
import { Intro } from "./Intro/Intro";
import { ItemsList } from "./Items/ItemsList";
import { Attractions } from "./Attractions/Attractions";
import { FoodMenu } from "./FoodMenu/FoodMenu";
import { Contacts } from "./Contacts/Contacts";
import { Footer } from "./Footer/Footer"
import '../components/NavMenu/nav.css'

export const Index = () => {
    return(<>
      <NavMenu />
      <Intro />
      <ItemsList />
      <Attractions />
      <FoodMenu />
      <Contacts />
      <Footer />
      </>
    )
  }