import ('./nav.css')
import {logoHeader} from '../../../images/img-prod/img'


const liMenuLeft = [
  {id: 1, li: 'Н.Тагил'},
  {id: 2, li: 'Парк'},
  {id: 3, li: 'Кафе'},
  {id: 4, li: 'День рождения'},
  {id: 5, li: 'Мероприятия', link: 'group.html'}
]
const liMenuRight = [
  {id: 1, li: 'Акции'},
  {id: 2, li: 'Цены'},
  {id: 3, li: 'Контакты'}
]

const toHTMLLi = l => `
  <li class="menu__item" data-id=${l.id}>
    <a href=${l.link || '#'}>${l.li}</a>
  </li>
`

function render(el, arr, toHTML) {  
  const html = arr.map(toHTML).join('')
  el.innerHTML = html
}

function openMenu() {
  let header = document.querySelector('.header'),
    menuLeft = document.querySelector('.menu__left'),
    menuLeftLi = document.querySelectorAll('.menu__item'),
    menuRigth = document.querySelector('.menu__right'),
    toggleBtn = document.querySelector('.menu__toggle')

  header.classList.toggle('header--active')
  menuLeft.classList.toggle('menu__left--active')
  menuRigth.classList.toggle('menu__right--active')
  toggleBtn.classList.toggle('menu__toggle--active')
  menuLeftLi.forEach((elem, idx) => {
    const delay = .155
    elem.style.transitionDelay = (idx + 2) * delay + 's'
    elem.classList.toggle('menu__item--active')
    
    // Close menu 
    if(!elem.classList.contains('menu__item--active')) {
      elem.style.transitionDelay = '0s'
    }
  })
}

const headerHTML = `
  <div class="header__menu-bg">
    <header class="header">
      <nav class="menu">
        <ul class="menu__left"></ul>
        <ul class="menu__right"></ul>
        <a href="/">
          <img src="${logoHeader}" alt="">
        </a>
        <a type="a" class="menu__btn">Заказать праздник</a>
        <div class="toggle__wrapper">
          <button class="menu__toggle">Меню</button>
        </div>
      </nav>
    </header>
  </div>
`

let header = document.createElement('div')
header.classList.add('header__menu-bg')
header.innerHTML = headerHTML

document.body.prepend(header)

render(document.querySelector('.menu__left'), liMenuLeft, toHTMLLi)
render(document.querySelector('.menu__right'), liMenuRight, toHTMLLi)

let menuBtn = document.querySelector('.toggle__wrapper')

menuBtn.addEventListener('click', openMenu)

document.querySelectorAll('.menu__left a').forEach(i => {
  i.addEventListener('click', e => {
    if(e.target.href.includes('#')) {
      e.preventDefault()
    }
    
    if(document.documentElement.clientWidth <= 1200) {
      openMenu()      
    }

    let id = +e.target.parentNode.dataset.id
    if(id === 2) {
      selectBlock('.attractions')
    }
    if(id === 3) {
      selectBlock('.cafe')
    }
    if(id === 4 ) {
      document.location.href = "https://megalandpark.web.app/order.html"
    }
  })
})

function selectBlock(selector) {
  document.querySelector(selector).scrollIntoView({block: "start", behavior: "smooth"})
}

document.querySelectorAll('.menu__right a').forEach(i => {
  i.addEventListener('click', e => {
    e.preventDefault()

    if(document.documentElement.clientWidth <= 1200) {
      openMenu()      
    }

    let id = +e.target.parentNode.dataset.id
    if(id === 1) {
      let items = document.querySelector('.items')
      items.scrollIntoView({block: "start", behavior: "smooth"})
    }

    if(id === 2) {      
      if(document.location.href === "http://localhost:3000/order.html") {
        let prices = document.querySelector('.birthdays__price')
        prices.scrollIntoView({block: "start", behavior: "smooth"})
      } else {
        let prices = document.createElement('div')
        prices.classList.add('wrapper-modal')
        prices.style.top = document.documentElement.scrollTop + 'px'
        prices.innerHTML = `
        <div class="wrap-table">
        <table class="birthdays__price price">
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Цена (руб.)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="price__subtitle">Анимационная программа (от 0 до 5 лет)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Праздник по сценарию (45 мин) 1 вед Любой персонаж</td>
              <td>2500</td>
              <td></td>
            </tr>
            <tr>
              <td>Мини поздравление + генератор мыльных пузырей (20 мин)</td>
              <td>2000</td>
              <td></td>
            </tr>
            <tr class="price__subtitle">
              <td>Квесты до 5 лет</td>
              <td>Будни</td>
              <td>Выходные</td>
            </tr>
            <tr>
              <td>
                Герои в Масках
                <br>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Лол (Единорог, Королева пчёл)
                <br>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Ми-Ми-Мишка
                <br>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Три кота
                <br>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Щенячий Патруль
                <br>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
          </tbody>
        </table>
        <button id="close-prices-btn" class="modal__btn-close">
          <i class="far fa-window-close"></i>
        </button>
        </div>
        `
        document.body.append(prices)
        document.addEventListener('click', e => {
          if(e.target.classList.contains('wrapper-modal')) {
            prices.remove()
          }
        })

        let p = new Promise(res => {
          res(document.getElementById('close-prices-btn'))
        }).then(closeTable => {
          closeTable.addEventListener('click', () => {
            prices.remove()
          })
        })
      } 
    }

    if(id === 3) {      
      let contacts = document.querySelector('.contacts-description')
      contacts.scrollIntoView({block: "center", behavior: "smooth"})
    } 
  })
})

export {header}






// if((document.querySelector('.menu__right--active').classList.contains('menu__right--active') && document.querySelector('.menu__left--active').classList.contains('menu__left--active'))) {      
//   document.querySelector('.menu__right--active').classList.remove('menu__right--active')
//   document.querySelector('.menu__left--active').classList.remove('menu__left--active')
// }

