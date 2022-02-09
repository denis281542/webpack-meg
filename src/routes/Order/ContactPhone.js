import React from "react";
import { ModalBtn } from "../../components/ModalBtn";

export const ContactPhone = () => {
  const contactBtn = {
    // padding: '20px 60px',
    marginBottom: '45px',
  };

	return(
		<section className="phone">
      <p className="phone__title">
        Для заказа дня рождения позвоните
      </p>
      <a href="tel:+7-800-600-33-92" className="phone__number">8-800-600-33-92</a>
      <p className="phone__order">
        или воспользуйтесь кнопкой для предзаказа
      </p>
      <ModalBtn 
        className='phone__btn' 
        innerText='Заказать день рождения' 
      />
    </section>	
	)
}