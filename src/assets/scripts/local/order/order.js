import { imgOrder1, imgOrder2, imgOrder3, imgOrder4 } from '../../../images/img-prod/img'
 
const listsBase = [
  {id: 1, li: '45 мин. программа с аниматором'},
  {id: 2, li: 'генератор мыльных пузырей'},
  {id: 3, li: '10 гелиевых шаров'},
  {id: 4, li: 'час посещения детского сада или батута надувная горка'},
]
 
const listsPremium = [
  {id: 1, li: 'часовой квест с аниматором'},
  {id: 2, li: '10 гелиевых шаров'},
  {id: 3, li: '10 пригласительных в кино'},
  {id: 4, li: 'час посещения любых игровых площадок'},
  {id: 5, li: 'час аренды банкетной комнаты'},
]
 
const listsVIP = [
  {id: 1, li: 'игровая карта на 1000 баллов'},
  {id: 2, li: 'часовой квест с аниматором'},
  {id: 3, li: '10 гелиевых шаров'},
  {id: 4, li: 'шар - цифра (или цифры) для именинника'},
  {id: 5, li: 'безлимитное посещение любых игровых площадок'},
  {id: 6, li: '10 пригласительных в кино'},
  {id: 7, li: 'час аренды банкетной комнаты'},
  {id: 8, li: '2 литра сока "Добрый", 3 любых пиццы, фруктовая тарелка'},
]
 
const listsVIPKino = [
  {id: 1, li: 'игровая карта на 1000 баллов'},
  {id: 2, li: 'просмотр любого фильма'},
  {id: 3, li: 'час посещения любых игровых площадок на выбор'},
  {id: 4, li: 'Детский поп-корн на выбор + сок 0,2 л/напиток 0,3 л — на выбор'},
]
 
const items = [
  {id: 1, title: 'Базовый за 4500 р.', li: listsBase, description: 'до 10 человек, +300 р. за каждого дополнительного гостя', img: imgOrder1, button: 'Заказать Базовый'},
  {id: 2, title: 'Премиум за 6500 р.', li: listsPremium, description: 'до 10 человек, +450 р. за каждого дополнительного гостя', img: imgOrder2, button: 'Заказать Премиум'},
  {id: 3, title: 'VIP за 8900 р.', li: listsVIP, description: 'до 10 человек, +650 р. за каждого дополнительного гостя', img: imgOrder3, button: 'Заказать VIP'},
  {id: 4, title: 'VIP Кино за 8900 р.', li: listsBase, description: 'до 10 человек, +650 р. за каждого дополнительного гостя', img: imgOrder4, button: 'Заказать VIP Кино'},
]
 
const toHTMLItem = item => `
<li class="item">
  <a class="item__link" href="#">
    <img class="item__img" src="${item.img}" alt="" >
    <div class="item__inner">
      <p class="item__description">${item.description}</p>
      <strong>${item.title}</strong>
      <ul class="item__list" data-id="${item.id}">${item.li}</ul>
    </div>
  </a>
  <button class="offers__btn btn">${item.button}</button>
</li>
`
const toHTMLLi = l => `
  <li class="item__li">
    <i class="fas fa-check"></i>
    ${l.li}
  </li>
`
 
function render(el, arr, toHTML) {
  const html = arr.map(i => {
    return toHTML(i)
  }).join('')
  el.innerHTML = html
}
 
let offerList = document.querySelector('.offers__list')
 
render(offerList, items, toHTMLItem)
 
let itemList = document.querySelectorAll('.item__list')
 
itemList.forEach(i => {
  const id = +i.dataset.id
  let item = items.find(i => i.id === id)
  render(i, item.li, toHTMLLi)  
})