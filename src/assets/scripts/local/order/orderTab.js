import './order.scss'
import { imgTable2Tab1, imgTable2Tab2, imgTable2Tab3, imgTable2Tab4, imgTable2Tab5, imgTable2Tab6, imgTable2Tab7, imgTable2Tab8, imgTable2Tab9, imgTable2Tab10, imgTable2Tab11, imgTable2Tab12, imgTable2Tab13, img1Table1, img2Table1, img3Table1, img4Table1, img5Table1, img6Table1 } from '../../../images/img-prod/img'

const itemsTable1 = [
	{id: 1, title: 'Герои в масках', description: 'Встречайте самую крутую команду - Герои в масках!', img: img1Table1},
	{id: 2, title: 'Лол Единорог', description: 'Самая модная и гламурная вечеринка с очаровательной куклой Единорожкой!', img: img2Table1},
	{id: 3, title: 'Лол Королева пчёл', description: 'Никто не запрещает быть модными и умными одновременно.', img: img3Table1},
	{id: 4, title: 'Ми-ми-мишка', description: 'О том, что существуют на свете забавные друзья Ми-ми-мишки, знают, наверное, все дети.', img: img4Table1},
	{id: 5, title: 'Три кота', description: 'МИУ-МИУ-МИУ! Знакомьтесь, это Коржик и Карамелька.', img: img5Table1},
	{id: 6, title: 'Щенячий патруль', description: '«Вперед, патруль!» - звучит воодушевляющий призыв бесстрашного мальчугана Зика Райдера.', img: img6Table1},
],
	itemsTable2 = [
	{id: 1, title: 'Бравл Старс', description: 'Мир изменился, нашествие бравлеров не избежать! Прокачай силу, повысь навыки – они тебе помогут победить всех соперников.', img: imgTable2Tab1},
	{id: 2, title: 'Бэтмен', description: 'Кто борется со злом, несмотря на преграды?!Кто защищает свой город от катастроф?! Это, конечно же, Бэтмен!', img: imgTable2Tab2},
	{id: 3, title: 'Гарри Поттер', description: 'В волшебном мире Гарри Поттера вновь неспокойно. Волан де Морт украл волшебнуюпалочку юного волшебника.', img: imgTable2Tab3},
	{id: 4, title: 'Гравити Фолз (Мейбл, Дипер)', description: 'В мире Гравити Фолз приключилась настоящая беда. Дядюшка Стэн пропал! Его украли гномы!', img: imgTable2Tab4},
	{id: 5, title: 'Динозавр Party', description: 'Археолог приглашает окунуться в загадочный мир истории.', img: imgTable2Tab5},
	{id: 6, title: 'Леди Баг', description: 'Отважная Леди Баг приглашает вас в Париж, где всех ждёт захватывающее приключение!', img: imgTable2Tab6},
	{id: 7, title: 'Пираты', description: 'Йо-хо-хо!!! Все на абордаж!', img: imgTable2Tab7},
	{id: 8, title: 'Супермен и Супервумен', description: 'Супермен и Супервумен — это борцы с преступниками и нарушителями закона.', img: imgTable2Tab8},
	{id: 9, title: 'Тик Токер', description: 'Вечеринка в стиле «блогинга» для детей, которые по-настоящему в тренде.', img: imgTable2Tab9},
	{id: 10, title: 'Холодное сердце', description: 'Волшебница Эльза обладает магической силой управления льдом и снегом. И если даже снеговик Олаф, благодаря ей, не тает летом, то, конечно, ничьи сердца сегодня не замерзнут.', img: imgTable2Tab10},
	{id: 11, title: 'Человек-паук', description: 'С высоты человеку пауку видно многое, и он всегда готов прийти на помощь попавшим в беду!', img: imgTable2Tab11},
	{id: 12, title: 'Черепашка-Ниндзя', description: 'Четверка героев отправится в увлекательное путешествие за свитком Дракона.', img: imgTable2Tab12},
	{id: 13, title: 'Экстремальный день рождения', description: 'Команда отважного именинника отправляется на операцию от Агента 007', img: imgTable2Tab13},
]

const toHTML = cards => `
	<div class="card-item">
		<img src="${cards.img}" alt="">
		<h4>${cards.title}</h4>
		<p>${cards.description}</p>   
	</div>
`

function render(el, arr) {
	el.innerHTML = arr.map(el => toHTML(el)).join('')
}

export { render, toHTML, itemsTable1, itemsTable2 }