import React from "react";
import { ListOffers } from "./ListOffers";

export const Offers = () => {
	return(
		<section className="offers">
      <div className="container__offers">
        <h1 className="offers__title">Готовые предложения</h1>
        <p className="offers__description">
          мы ценим ваше время и собрали самые востребованные 
          наборы услуг, ознакомьтесь и воспользуйтесь кнопкой 
          заказа дня рождения, мы перезвоним для уточнения всех деталей
        </p>

        <ListOffers className="offers__list" />
        
      </div>
    </section>
	)
}