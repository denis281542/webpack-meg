const tableData1 = [
	{id: 1, service: 'Праздник по сценарию (45 мин) 1 вед Любой персонаж', weekdays: '2500', weekends: ''},
	{id: 2, service: 'Мини поздравление + генератор мыльных пузырей (20 мин)', weekdays: '2000', weekends: ''},
	{id: 3, service: 'Герои в Масках', weekdays: '', weekends: ''},
	{id: 4, service: 'Лол (Единорог, Королева пчёл)', weekdays: '', weekends: ''},
	{id: 5, service: 'Ми-Ми-Мишка', weekdays: '', weekends: ''},
	{id: 6, service: 'Три кота', weekdays: '', weekends: ''},
	{id: 7, service: 'Щенячий Патруль', weekdays: '', weekends: ''}
]
const tableData2 = [
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
]
const tableData3 = [
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

const tableHTML = `
	<table class="birthdays__price price">
		<thead>
			<tr>
				<th>Услуга</th>
				<th>Цена (руб.)</th>
				<th></th>
			</tr>
		</thead>
		<tbody></tbody>
	</table>
`,

	toHTML = el => `
	<tr>
		<td>
			${el.service}<br>1 час
		</td>
		<td>${el.weekdays || '3200'}</td>
		<td>${el.weekends || '4000'}</td>
	</tr>
`
// Add table on page
let wrapTable1 = document.createElement('div')
let wrapTable2 = document.createElement('div')
let wrapTable3 = document.createElement('div')

document.querySelector('.birthdays__table1').append(wrapTable1)
document.querySelector('.birthdays__table2').append(wrapTable2)
document.querySelector('.birthdays__table3').append(wrapTable3)
wrapTable1.innerHTML = tableHTML
wrapTable2.innerHTML = tableHTML
wrapTable3.innerHTML = tableHTML

// Render td in table
function render(el, arr) {	
	el.innerHTML = arr.map(el => toHTML(el)).join('')
}

render(document.querySelector('.birthdays__table1 table tbody'), tableData1)
render(document.querySelector('.birthdays__table2 table tbody'), tableData2)
render(document.querySelector('.birthdays__table3 table tbody'), tableData3)
