import './group.scss'
import { iconGroup1, iconGroup2, iconGroup3, iconGroup4} from '../../../images/img-prod/img'
import { header } from '../nav/menu-nav'
// import { footer } from '../footer/footer'
console.log(header);

let icons = [
	{id: 1, title: 'Индивидуальное предложение', description: 'составим и рассчитаем предложение для активного отдыха взрослых и детей', img: iconGroup1},
	{id: 2, title: 'Работаем со всеми', description: 'индивидуальные предложения как физическим, так и юридическим лицам', img: iconGroup2},
	{id: 3, title: 'Подарочные сертификаты', description: 'для детей и взрослых ко дню знаний, новому году, профессиональным праздникам', img: iconGroup3},
	{id: 4, title: 'Большие группы? Легко!', description: 'работаем с группами более 15 человек', img: iconGroup4},
]

let tableData = [
	{id: 1, programm: 'Групповой конструктор', description: 'Аттракцион на выбор для групп от 15 чел', price: ''},
	{id: 2, programm: '', description: 'Батутная арена 1 час, рост от 110 см', price: '200 руб./чел'},
	{id: 3, programm: '', description: 'Экстрим парк одна трасса 1 час, рост от 120 см', price: '150 руб./чел'},
	{id: 4, programm: '', description: 'Батут-горка от 100 см 1 час', price: '150 руб./чел'},
	{id: 5, programm: '', description: '	Лабиринт от 110 см 1 час', price: '150 руб./чел'},
	{id: 6, programm: '', description: 'Билет в кино', price: '120 руб./чел'},
	{id: 7, programm: '', description: 'Поп-корн + напиток на выбор', price: '190 руб./чел'},
	{id: 8, programm: '', description: 'Ланч на выбор', price: '190 руб./чел'},
	{id: 9, programm: 'Игровая карта', description: '1+1', price: '250 руб. + 250 бонусов или 350 руб. + 350 бонусов'},
	{id: 10, programm: 'Летний лагерь', description: 'При покупке билетов в кино игровые площадки по спец цене', price: 'Кино 120 руб./чел, игровая площадка 1 час - 100 руб.'}
]

const icon = icon => `
	<div class="icon">
		<img src="${icon.img}" alt="">
		<h4>${icon.title}</h4>
		<p>${icon.description}</p>
	</div>
`

const tableHTML = el => `
	<tr>
		<td>${el.programm}</td>
		<td>${el.description}</td>
		<td>${el.price}</td>
	</tr>
`

function render(el, arr, toHTML) {
	el.innerHTML = arr.map(i => toHTML(i)).join('')
}

render(document.querySelector('tbody'), tableData, tableHTML)
render(document.querySelector('.icons__list'), icons, icon)

// Select tab
const tab1 = document.getElementById('tab1'),
	tab2 = document.getElementById('tab2')

tab1.addEventListener('click', showTab)
tab2.addEventListener('click', showTab)

function showTab(e) {
	let id = e.target.dataset.tabBtn

	const tabs = document.querySelectorAll('.details__tab'),
		tabcontent = document.querySelector('.tabcontent')
		
	let itemWidth = parseInt(window.getComputedStyle(tabcontent).getPropertyValue('width'), 10)

	// Remove btn-tab active
	tabs.forEach(el => {
		el.classList.remove('details__tab--active')
	})
	// Show btn-tab active
	this.classList.add('details__tab--active')
	let tab = document.getElementById('btn'),
		tabWidth = window.getComputedStyle(tab).getPropertyValue('width')

	tabWidth = parseInt(tabWidth)
	
	id = id - 1
	let position = 0

	let translateTab = id * tabWidth
	btn.style.transform = `translateX(${translateTab}px)`


	position += -id * itemWidth
	const container = document.querySelector('.slider-track')
	container.style.transform = `translateX(${position}px)`
}
