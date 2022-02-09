import {imgItem1, imgItem2, imgItem3, imgItem4, imgItem5, imgItem6, imgItem7} from '../../../images/img-prod/img'

const items = [
  {id: 1, title: 'Безлимит в Мегалэнде', img: imgItem1, datetime: "2021-04-15 11:00"},
  {id: 2, title: 'Отметь день рождения в кино!', img: imgItem2, datetime: "05.03.2021 16:35"},
  {id: 3, title: 'Выпускной в Мегаленде!', img: imgItem3, datetime: "09.02.2021 11:50"},
  {id: 4, title: 'Мегаленд полностью открыт!', img: imgItem4, datetime: "18.09.2020 11:26"},
  {id: 5, title: 'Пицца в подарок', img: imgItem5, datetime: "17.09.2020 17:52"},
  {id: 6, title: 'Игровые автоматы открыты!', img: imgItem6, datetime: "20.08.2020 11:00"},
  {id: 7, title: 'Бонусная система', img: imgItem7, datetime: "20.08.2020 10:59"},  
]

const toHTML = item => `
  <li class="item" data-id="${item.id}" data-btn="button-item">
    <button class="item-link">
      <img class="item-img" width="460" height="auto" src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="item-description">
        <h4 class="item-title">${item.title}</h4>
        <time class="item-date" datetime="${item.datetime}">${item.datetime}</time>
      </div>
    </button>
  </li>
`

function render() {
	document.querySelector('.items-list').innerHTML = items.map(i => toHTML(i)).join('')
}

render()

export {items}

