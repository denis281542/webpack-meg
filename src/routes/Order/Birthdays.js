import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { TableList } from "./TableList";

export const Birthdays = () => {	
	const tableData1 = [
		{id: 1, service: 'Праздник по сценарию (45 мин) 1 вед Любой персонаж', weekdays: '2500', weekends: ''},
		{id: 2, service: 'Мини поздравление + генератор мыльных пузырей (20 мин)', weekdays: '2000', weekends: ''},
		{id: 3, service: 'Герои в Масках', weekdays: '', weekends: ''},
		{id: 4, service: 'Лол (Единорог, Королева пчёл)', weekdays: '', weekends: ''},
		{id: 5, service: 'Ми-Ми-Мишка', weekdays: '', weekends: ''},
		{id: 6, service: 'Три кота', weekdays: '', weekends: ''},
		{id: 7, service: 'Щенячий Патруль', weekdays: '', weekends: ''}
	],
		tableData2 = [
		{id: 1, service: 'Бравл Старс', weekdays: '', weekends: ''},
		{id: 2, service: 'Бэтмен', weekdays: '', weekends: ''},
		{id: 3, service: 'Гарри Потер', weekdays: '', weekends: ''},
		{id: 4, service: 'Гравити Фолз', weekdays: '', weekends: ''},
		{id: 5, service: 'Динозавр Party', weekdays: '', weekends: ''},
		{id: 6, service: 'Леди Баг', weekdays: '', weekends: ''},
		{id: 7, service: 'Пираты', weekdays: '', weekends: ''},
		{id: 8, service: 'Супермен и Супервумен', weekdays: '', weekends: ''},
		{id: 9, service: 'Тик Токер', weekdays: '', weekends: ''},
		{id: 10, service: 'Холодное сердце', weekdays: '', weekends: ''},
		{id: 11, service: 'Человек-Паук', weekdays: '', weekends: ''},
		{id: 11, service: 'Черепашка-Ниндзя', weekdays: '', weekends: ''},
		{id: 13, service: 'Экстремальный день рождения', weekdays: '', weekends: ''},
	],
		tableData3 = [
		{id: 1, service: 'Второй ведущий', weekdays: '1000', weekends: '1000'},
		{id: 2, service: 'Мини поздравление (20 мин)', weekdays: '2000', weekends: '2000'},
		{id: 3, service: 'Аренда комнаты на 1 час при заказе праздника', weekdays: '600', weekends: '900'},
		{id: 4, service: 'Генератор мыльных пузырей (15 мин)', weekdays: '300', weekends: '300'},
		{id: 5, service: 'Светомузыка (20 мин)', weekdays: '2000', weekends: '2000'},
		{id: 6, service: 'Фотограф (1 час)', weekdays: '3500', weekends: '3500'},
		{id: 7, service: 'Фольгированное шоу (45 мин.)', weekdays: '90/шт', weekends: '90/шт'},
		{id: 8, service: 'Хлопушка', weekdays: '300', weekends: '300'},
		{id: 9, service: 'Торт с собой', weekdays: '150/шт', weekends: '150/шт'},
		{id: 10, service: 'Шар гелиевый с перьями', weekdays: '', weekends: ''},
		{id: 11, service: 'Шар гелиевый с конфетти', weekdays: '130/шт', weekends: '130/шт'},
		{id: 11, service: 'Фольгированный шар цифра', weekdays: '250/шт, 400/2шт', weekends: '250/шт, 400/2шт'},
		{id: 13, service: 'Гелиевый шар с обработкой', weekdays: '50/шт', weekends: '50/шт'},
	]

	let tables = [
		{id: 1, table: tableData1, hide: true},
		{id: 2, table: tableData2, hide: true},
		{id: 3, table: tableData3, hide: true}
	]
	
	const tabs = [
		{ id: 1, text: 'до 5 лет', isActive: false }, 
		{ id: 2, text: 'старше 5 лет', isActive: true }, 
		{ id: 3, text: 'доп. услуги', isActive: false }
	]

	const activeTab = id => {
		let active = document.querySelector('.btnBookmark'),
			widthTab = parseInt(window.getComputedStyle(active).getPropertyValue('width'), 10)
		active.style.left = widthTab * (id - 1) + 'px'
	}

	const activeContent = id => {
		let content = document.querySelector('.birthdays__price.price'),
			widthContent = parseInt(window.getComputedStyle(content).getPropertyValue('width'), 10),
			marginContent = parseInt(window.getComputedStyle(content).getPropertyValue('margin-right'), 10),
			heightTab = parseInt(window.getComputedStyle(content).getPropertyValue('height'), 10)

		document.querySelector('.birthdays__tables').style.transform = 
			`translateX(${-(widthContent + marginContent) * (id - 1) + 'px'})`
	}

	const hideTable = () => {
		document.querySelectorAll('.birthdays__price.price').forEach(table => table.style.height = '450px')
		document.querySelectorAll('.table__wrap').forEach(wrap => wrap.style.height = '400px')
		document.querySelectorAll('.btn__show-more').forEach(btn => btn.innerHTML = 'ещё')
	}

	const active = id => {
		activeTab(id)
		activeContent(id)
		hideTable()
	}

	return(
		<section className="birthdays">
			<div className="container__offers">
				<h3 className="birthdays__title">
					Подробнее о Днях рождения
				</h3>
				<p className="birthdays__description">помимо готовых предложений вы можете скомбинировать любые из наших услуг, 
					воспользуйтесь кнопкой заказа дня рождения, мы перезвоним и обговорим все нюансы
				</p>

				<Tabs 
					tabs={tabs} 
					onClick={active} 
				/>				
				
				<TableList 
					tables={tables} 
				/>

			</div>


		</section>
	)
}