import React from "react"
import './contacts.scss'
import { YandexMaps } from './YandexMaps'

export const Contacts = () => {
    return(<>
			<div className="contacts">
				<YandexMaps />
				
				<div className="contacts-description">
					<h2 className="contacts-title">Контакты в Нижнем Тагиле</h2>
					<p className="contacts-text">
						DEPO - Свердловское шоссе, 31В <br/>
						ПН-ПТ: с 12:00 до 21:00 <br/>
						СБ-ВС: с 10:00 до 21:00 <br/>     
						<a href="tel:+7-3435-37-97-97">Тел.: +7 (3435) 37-97-97</a><br/>
						<strong>Заказать День Рождения:</strong>
						8-800-600-33-92 <br/>
						<strong>Для коллективных заявок и посещений:</strong> 
						8-902-586-62-28 <br/>
					</p>
				</div>
			</div>
    </>)
}