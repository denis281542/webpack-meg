/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/order.css":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/order.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/style.css":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/style.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/footer.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/footer.js ***!
  \********************************************/
/***/ (() => {

class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          background-color: #1b1340;
        }
        .footer__inner {
          max-width: 960px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
          padding: 30px 20px 45px;
        }
        .footer__logo {
          max-width: 150px;
          width: 100%;
          padding-bottom: 22px;
        }
        .footer__description, .footer__feedback {
          opacity: 0.7;
          line-height: 26px;
          letter-spacing: 1px;
          color: #d6d6d6;
          font-size: 14px;
        }      
      </style>
      <footer class="footer">
        <div class="footer__inner">
          <img class="footer__logo" src="25b426fb7668dde3abef.png" alt="Логотип Мегаленд">
          <div class="footer__description">
            © Холдинг «Мегаполис», 2009 — 2020 <br>
            Условия договора публичной оферты (конфиденциальность и защита персональной информации) <br>
            Правила посещения <br>
            <a class="footer__feedback"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZeZB3l5mQOsdub03OTQLdSbJrUmEC_vcwYPqriPslgL4tg/viewform?entry.632640978=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB"
              target="_blank"
            >Оставить отзыв</a>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer)

/***/ }),

/***/ "./src/assets/scripts/local/menu-nav.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/local/menu-nav.js ***!
  \**********************************************/
/***/ (() => {

class MenuNav extends HTMLElement {
  constructor() {
    super();
  }
  

  connectedCallback() {
    let circleWidth = window.innerWidth * .22 + 'px'

    this.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        .header {
          background-color: #00b3e4;
          height: 85px;
          position: fixed;
          z-index: 2;
          width: 100%;
          transition: all 1s ease-out;
        }
        .header__menu-bg {
          background-color: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .header__menu-bg--active {
          position: fixed;
        }        
        .menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          font-size: 14px;
          font-weight: 600;
          max-width: 1350px;
          padding: 15px 40px;
          margin: 0 auto;
        }
        .menu__left, .menu__right {
          display: flex;
          justify-content: space-between;
        }
        .menu__left--active, .menu__right--active {
          display: block;
        }
        .menu__item {
          list-style: none;
          opacity: 1;
          width: 100%;
          text-align: center;
          padding: 1rem 0;
        }
        .menu__item--active {
          opacity: 1;
          transform: translateX(0);  
          transition: 
            opacity .4s ease-in-out, 
            transform .6s cubic-bezier(0.175, 0.885, .32, 1.2);        
        }
        .menu__item--active:nth-of-type(1) {
          transition-delay: .7s;
        }
        .menu__item--active:nth-of-type(2) {
          transition-delay: .8s;
        }
        .menu__item--active:nth-of-type(3) {
          transition-delay: .9s;
        }
        .menu__item--active:nth-of-type(4) {
          transition-delay: 1s;
        }
        .menu__item--active:nth-of-type(5) {
          transition-delay: 1.1s;
        }
        .right.menu__item--active:nth-of-type(1) {
          transition-delay: 1.2s;
        }
        .right.menu__item--active:nth-of-type(2) {
          transition-delay: 1.3s;
        }
        .right.menu__item--active:nth-of-type(3) {
          transition-delay: 1.4s;
        }
        .menu__left {
          order: 0;
          width: 485px;
        }
        .menu__right {
          order: 2;
          width: 222px;
        }
        .menu__item a {
          text-decoration: none;
          color: #fff;
        }
        .menu__btn {
          order: 3;
          color: #fff;
          cursor: pointer;
          transition: 0.5s;
        }
        .menu a:hover {
          opacity: 0.8;
        }
        .menu img {
          width: 200px;
          height: auto;
          order: 1;
          margin: 0 25px;
          cursor: pointer;
        }
        .menu__btn {
          border: 2px solid #e5fffe;
          border-radius: 20px;
          padding: 8px 30px 9px;
          font-weight: 700;
          margin-left: 10px;
        }
        .menu__toggle {
          display: none;
        }

        @media (max-width: 1270px) {
          .menu {
            justify-content: center;
          }
          .menu img {
            order: 0;
          }
          .menu__btn {
            margin-top: 10px;
            align-items: center;
          }
        }

        @media (max-width: 1200px) {
          .header {
            height: 100%;
            clip-path: circle(${circleWidth} at top right);
            heigth: 100%;
          } 
          .header--active {
            clip-path: circle(730px at center);
            heigth: 100%;
            padding-top: 65px;
          }
          .menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            transition: all 1s;
            position: relative;
            font-size: 24px;
          }
          .menu img {
            width: 140px;
            margin: 0;
            position: fixed;
            top: 20px;
            left: 20px;
          }
          .menu--active {
            display: flex;
            padding-top: 85px;
          }
          .menu__btn {
            display: none;
          }
          .menu__toggle {
            display: block;
            font-size: 0;
            border: none;
            content: "";
            height: 2px;
            width: 22px;
            background-color: #fff;
            position: absolute;
            right: 0px;
            top: 0px;
            margin-top: 15px;
            transition: 0.5s;
          }
          .menu__toggle::before {
            display: block;
            top: 6px;
            content: "";
            height: 2px;
            background-color: #fff;
            position: relative;
            transition: 0.5s;
          }
          .menu__toggle::after {
            display: block;
            top: -8px;
            content: "";
            height: 2px;
            background-color: #fff;
            position: relative;
            transition: 0.5s;
          }
          .menu__toggle--active {
            background-color: transparent;
            position: absolute;
            right: 0px;
            top: 3px;
          }
          .menu__toggle--active::before {
            transform: rotateZ(45deg);
            top: 0;
          }
          .menu__toggle--active::after {
            transform: rotateZ(-45deg);
            top: -2px;
          }
          .menu .toggle__wrapper {
            position: fixed;
            top: 10px;
            right: 20px;
            padding: 25px;
          }
          .menu__item {
            list-style: none;
            opacity: 0;
            transform: translateX(100%);
            width: 100%;
            text-align: center;
            padding: 1rem 0;
          }
          .menu__item--active {
            opacity: 1;
            transform: translateX(0);  
            transition: 
              opacity .4s ease-in-out, 
              transform .6s cubic-bezier(0.175, 0.885, .32, 1.2);        
          }
          .menu__item--active:nth-of-type(1) {
            transition-delay: .7s;
          }
          .menu__item--active:nth-of-type(2) {
            transition-delay: .8s;
          }
          .menu__item--active:nth-of-type(3) {
            transition-delay: .9s;
          }
          .menu__item--active:nth-of-type(4) {
            transition-delay: 1s;
          }
          .menu__item--active:nth-of-type(5) {
            transition-delay: 1.1s;
          }
          .right.menu__item--active:nth-of-type(1) {
            transition-delay: 1.2s;
          }
          .right.menu__item--active:nth-of-type(2) {
            transition-delay: 1.3s;
          }
          .right.menu__item--active:nth-of-type(3) {
            transition-delay: 1.4s;
          }
          .menu__left {
            order: 0;
            width: 100%;
          }
          .menu__right {
            order: 2;
            width: 100%;
          }        
        }
      </style>

      <div class="header__menu-bg">
        <header class="header">
          <nav class="menu">
            <ul class="menu__left">
              <li class="menu__item">
                <a href="">Н.Тагил</a>
              </li>
              <li class="menu__item">
                <a href="">Парк</a>
              </li>
              <li class="menu__item">
                <a href="">Кафе</a>
              </li>
              <li class="menu__item">
                <a href="">День рождения</a>
              </li>
              <li class="menu__item">
                <a href="">Мероприятия</a>
              </li>
            </ul>
            <ul class="menu__right">
              <li class="menu__item right">
                <a href="">Акции</a>
              </li>
              <li class="menu__item right">
                <a href="">Цены</a>
              </li>
              <li class="menu__item right">
                <a href="">Контакты</a>
              </li>
            </ul>
            <a href="/">
              <img src="src/assets/images/logo.webp" alt="">
            </a>
            <a type="a" class="menu__btn">Заказать праздник</a>
            <div class="toggle__wrapper">
              <button class="menu__toggle">Меню</button>
            </div>
          </nav>
        </header>
      </div>
    `;
  }
}

customElements.define('nav-component', MenuNav)

let menuBtn = document.querySelector('.toggle__wrapper')
let header = document.querySelector('.header')
let menuLeft = document.querySelector('.menu__left')
let menuLeftLi = document.querySelectorAll('.menu__item')
let menuRigth = document.querySelector('.menu__right')
let toggleBtn = document.querySelector('.menu__toggle')

function openMenu() {
  header.classList.toggle('header--active')
  menuLeft.classList.toggle('menu__left--active')
  menuRigth.classList.toggle('menu__right--active')
  toggleBtn.classList.toggle('menu__toggle--active')
  menuLeftLi.forEach(elem => {
    elem.classList.toggle('menu__item--active')
  })
}

menuBtn.addEventListener('click', openMenu)


/***/ }),

/***/ "./src/assets/scripts/local/modal-window.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/local/modal-window.js ***!
  \**************************************************/
/***/ (() => {

class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .modal {
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        .modal__wrapper {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 999;
          display: none;
        }
        .modal__form {
          max-width: 70vw;
          width: 100%;
          max-height: 95vh;
          height: 100%;
          margin: 0 auto;
          display: flex;
          background-color: #f8fafc;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .modal__field {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          max-width: 400px;
          width: 100%;
        }
        .modal__field:nth-child(4) {
          margin-bottom: 0;
        }
        .modal__field label {
          margin-bottom: 8px;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.6;
          color: #212529;
          text-align: left;
        }
        .modal__field input {
          padding: 6px 16px;
          cursor: text;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.6;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        input[type=date] {
          -webkit-appearance: none;
          max-width: 400px;
          width: auto;
        }
        .modal__buttons {
          align-self: flex-end;
          margin-top: 46px;
        }
        .modal__btn {
          color: #fff;
          border: none;
          font-size: 14px;
          line-height: 1.6;
          border-radius: 4px;
          padding: 6px 12px;
        }
        .modal .next-btn {
          background-color: #3490dc;
          margin-left: 10px;
          cursor: pointer;
          position: relative;
        }
        .modal .prev-btn {
          background-color: #6c757d;
          opacity: 0.65;
          cursor: pointer;
          position: relative;
        }
        .modal__btn-close {
          border: none;
          position: absolute;
          z-index: 9999;
          right: -10px;
          top: -10px;
          background-color: transparent;
          cursor: pointer;
        }
        .modal__btn-close i {
          color: #fff;
          font-size: 32px;
          line-height: 0.8;
          background-color: #ff0073;
        }        
        .form {
          max-width: 400px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }        
        @media (max-width: 640px) {
          .modal__form {
            height: auto;
          }
          .form {
            padding: 20px;
          }
          input[type=date] {
            -webkit-appearance: none;
            max-width: 400px;
            width: 100%;
        }
        @media (max-width: 480px) {
          .modal__form {
            max-width: 85vw;
            max-height: 80vh;
          }        
          .form {
            max-width: 288px;
          }
        }
      </style>
      <div class="modal__wrapper">
        <div class="modal">
          <div class="modal__form">
            <form class="form">
              <div class="modal__field">
                <label for="date">Дата проведения праздника</label>
                <input 
                  id="date" 
                  type="date"
                >
              </div>
              <div class="modal__field">
                <label for="name">ФИО</label>
                <input id="name" type="text" placeholder="Иванов Иван Иванович">
              </div>
              <div class="modal__field">
                <label for="phone">Мобильный телефон</label>
                <input id="phone" type="tel" placeholder="89991234567">
              </div>
              <div class="modal__field">
                <label for="email">E-mail</label>
                <input id="email" type="email" placeholder="email@emial.ru">
              </div>
              <div class="modal__buttons">
                <button class="modal__btn prev-btn">Назад</button>
                <button class="modal__btn next-btn">Далее</button>
              </div>
            </form>
          
            <button id="close-modal-btn" class="modal__btn-close">
              <i class="far fa-window-close"></i>
            </button>
          </div>
          
        </div>
      </div>
    `
  }
}

customElements.define('modal-component', Modal)

/* Open modal */
let navLink = document.querySelector('.menu__btn')

navLink.addEventListener('click', (e) => {
  e.preventDefault()
  modalWindow.style.display = 'block'
})

/* Close modal window */
let closeModalBtn = document.getElementById('close-modal-btn')
let modalWindow = document.querySelector('.modal__wrapper')
closeModalBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none'
})

function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'
}

document.addEventListener('click', e => {
  if(e.target.classList.contains('modal')) {
    modalWindow.style.display = 'none'
  }
})

/* Current date */
document.getElementById('date').valueAsDate = new Date()


/***/ }),

/***/ "./src/assets/scripts/local/order.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/local/order.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.css */ "./src/assets/scripts/local/order.css");
/* Show item btn */
let showBtn = document.getElementById('show-btn')
let cardHidden = document.querySelector('.card__wrapper')

function showItem() {
  this.style.display = 'none'
  cardHidden.classList.remove('card--hidden')
}

showBtn.addEventListener('click', showItem)

// /* Current date */
// let date = new Date()
// let dateInput = document.getElementById('date');

// function formatDate(date) {
//   let dd = date.getDate()
//   if (dd < 10) dd = '0' + dd

//   let MM = date.getMonth() + 1
//   if (MM < 10) MM = '0' + MM

//   let yyyy = date.getFullYear()
//   if (yyyy < 10) yyyy = '0' + yyyy

//   return yyyy + '-' + MM + '-' + dd
// }

// let currentDate = formatDate(date)
// dateInput.value = currentDate

;

/* Open modal */
let offersList = document.querySelector('.offers__list')
let phoneSection = document.querySelectorAll('.phone')
let navLink = document.querySelector('.menu__btn')
let modalWindow = document.querySelector('.modal__wrapper')


function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'
}

offersList.addEventListener('click', openModal)
navLink.addEventListener('click', e => {
  modalWindow.style.display = 'block'
})

phoneSection.forEach(el => {
  el.addEventListener('click', openModal)
})

/***/ }),

/***/ "./src/assets/scripts/local/touch-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/local/touch-slider.js ***!
  \**************************************************/
/***/ (() => {

class Slider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        * {
        margin: 0;
        padding: 0;
        }
        .slider-container {
          margin: 2rem auto;
        }
        .dragstart a { 
          pointer-events: none;
        }
        .slider-window-width {
          overflow: hidden;
        }
        .attractions-list {
          display: inline-flex;
          transform: translateX(0);
          transition: transform .1s;
          cursor: grab;
        }
        .attractions-item {
          list-style: none;
          text-align: center;
          user-select: none;
        }
        .attractions-item img {
          transition: transform .1s ease-in-out;
          width: 100%;
          height: 100%;
          cursor: grabbing;
          border-radius: 15px;
          box-shadow: 0 0 0 1px #e0dfde;
          box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)
        }
        // .dragstart {
        //   pointer-events: none;
        // }
        .attractions-link {
          color: #444444;
          text-decoration: none;
        }
        .attractions-description {
          font-weight: 700;
          line-height: 1.35;
        }
        .grabbing {
          cursor: grabbing;
        }      
        .attractions-list.grabbing img {
          transform: scale(0.98);
        } 
        .dragstart a {
          pointer-events: none;
        } 
        @media only screen and (max-width: 320px) {
          .attractions {
            padding-bottom: 0;
          }
          .attractions-header {
            padding-bottom: 0;
          }
          .attractions__wrapper {
            padding-bottom: 0;
          }
        }   
      </style>

      <div class="slider-window-width">
        <div class="slider-container">
          <ul class="attractions-list">
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="6bb591ede08ee22e9328.jpg" alt="">
                <h3 class="attractions-description">Батут</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="3b1b5604faf78cb3818e.jpg" alt="">
                <h3 class="attractions-description">Экстрим-парк</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="b8c6133750f2b53668ba.jpg" alt="">
                <h3 class="attractions-description">Детский сад</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="829369eb5aff5854a60d.jpg" alt="">
                <h3 class="attractions-description">Лабиринт</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="399f36eb49f9b11e2736.jpg" alt="">
                <h3 class="attractions-description">Игровые автоматы</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('slider-component', Slider)

const sliderContainer = document.querySelector('.attractions-list'),
sliderWrapper = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))

if (window.matchMedia("(max-width: 400px)").matches) {
  sliderWrapper.style.width = window.innerWidth * 0.9 + "px"
} else {
  sliderWrapper.style.width = window.innerWidth * 0.5 + "px"
}

let currentIndex = 0
let startPosition = 0
let currentTranslate = 0
let prevTranslate = 0
let isDragging = false

document.addEventListener("drag", function( event ) {

}, false);

slides.forEach((slide, index) => {
  if (window.matchMedia("(max-width: 400px)").matches) {
    slide.style.width = window.innerWidth * .9 + "px"
    slide.style.height = window.innerWidth * .5 + 'px'
  } else {
    slide.style.width = window.innerWidth * .5 + "px"
    slide.style.height = window.innerWidth * .3 + 'px'
  }
  slide.style.marginRight = window.innerWidth * .1 + 'px'
  sliderImg = slide.querySelector('img')

  sliderImg.addEventListener('dragstart', e => e.preventDefault())
  
  sliderImg.addEventListener('touchstart', touchStart(index))
  sliderImg.addEventListener('touchend', touchEnd)
  sliderImg.addEventListener('touchmove', touchMove)

  sliderImg.addEventListener('mousedown', touchStart(index))
  sliderImg.addEventListener('mouseup', touchEnd)
  sliderImg.addEventListener('mousemove', touchMove)
  sliderImg.addEventListener('mouseleave', touchEnd)
})

sliderContainer.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function(e) {
    currentIndex = index
    startPosition = getPositionX(e)
    isDragging = true
    sliderContainer.classList.add('grabbing')
    clearInterval(infinitySlider)
  } 
}

function touchMove(e) {
  if(isDragging) {
    const currentPosition = getPositionX(e)
    currentTranslate = prevTranslate + currentPosition - startPosition
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`
      
    sliderContainer.style.transition = "transform .001s"
  }
}

function touchEnd(e) { 
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  if(movedBy > 100 && currentIndex > 0) currentIndex -= 1
  if(movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1


  if (window.matchMedia("(max-width: 400px)").matches) {
    currentTranslate = currentIndex * -window.innerWidth
  } else {
    currentTranslate = currentIndex * (-window.innerWidth * .5 - window.innerWidth * .1)
  }

  prevTranslate = currentTranslate
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`
  sliderContainer.style.transition = "transform 1.25s"
  sliderContainer.classList.remove('grabbing')
  if(movedBy != 0) {
    let captureClick = function(e) {
      e.stopPropagation()
      e.preventDefault()
      this.removeEventListener('click', captureClick, true); // cleanup
    }
      e.target.addEventListener('click', captureClick, true)
    }
}

function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
}

const infinitySlider = setInterval(() => {
  currentIndex++  
  if(currentIndex > 4) currentTranslate = 0, currentIndex = 0

  mediaQueriesTranslate()
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`
  sliderContainer.style.transition = "transform 1.25s"
}, 2500)

function mediaQueriesTranslate() {
  if (window.matchMedia("(max-width: 400px)").matches) {
    currentTranslate = currentIndex * (-window.innerWidth * .9 - parseInt(slides[0].style.marginRight))
  } else {
    currentTranslate = currentIndex * (-window.innerWidth * .5 - parseInt(slides[0].style.marginRight))
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_assets_scripts_local_item-header_js":"673bfc218bfd3ba434ba","src_assets_scripts_local_items_css":"0c43c2ed1c7db9efb783"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "code:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_assets_scripts_local_item-header_js":1,"src_assets_scripts_local_items_css":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcode"] = self["webpackChunkcode"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/assets/scripts/local/app.js ***!
  \*****************************************/
// import './style.css'
// import './order.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import './footer.js'
// import './item-header.js'
// import './header.js'
// import './modal-window.js'
// import './order.js'
// import './items.css'

// var items = require("./items.css");
// var itemsHeader = require("./item-header.js");

/* Path css/js to items */
const patHome = () => {
  if(window.location.pathname === "/") {
    __webpack_require__(/*! ./style.css */ "./src/assets/scripts/local/style.css") 
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js") 
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js") 
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js") 
    __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css") 
    __webpack_require__(/*! ./touch-slider.js */ "./src/assets/scripts/local/touch-slider.js") 
  }
  return
}
patHome()

const pathOrder = () => {
  if(window.location.pathname === "/order.html") {
    __webpack_require__(/*! ./order.css */ "./src/assets/scripts/local/order.css")
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js")
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js")
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js")
    __webpack_require__(/*! ./order.js */ "./src/assets/scripts/local/order.js")
  }
} 
pathOrder()

const pathItems = (path) => {
  if(window.location.pathname === path) {
    __webpack_require__.e(/*! import() */ "src_assets_scripts_local_item-header_js").then(__webpack_require__.bind(__webpack_require__, /*! ./item-header.js */ "./src/assets/scripts/local/item-header.js"))
    __webpack_require__.e(/*! import() */ "src_assets_scripts_local_items_css").then(__webpack_require__.bind(__webpack_require__, /*! ./items.css */ "./src/assets/scripts/local/items.css"))
  }
}
pathItems("/bezlimit-v-megalende.html")
pathItems("/otmet-den-rozhdeniya-v-kino.html")
pathItems("/vipusknoi-v-megalende.html")
pathItems("/megalend-polnostyu-otkrit.html")
pathItems("/pitstsa-v-podarok.html")
pathItems("/bonusnaya-sistema.html")
pathItems("/igrovie-avtomati-otkriti.html")
// require.ensure(["c"], function(require) {
//   require("b").xyz();
//   var d = require("d");
// });


// /*Menu*/
// let navToggle = document.getElementById('nav-toggle')
// let burger = document.querySelector('.burger')
// let navBtn = document.querySelector('.nav-btn')
// let navMenu = document.getElementById('nav-menu')
// let leftNav = document.querySelector('.left-nav')
// let rigthNav = document.querySelector('.rigth-nav')
// let logoWrapper = document.querySelector('.logo-wrapper')
// let container = document.querySelector('.container')

// function menuActive() {
//   burger.classList.toggle('active')
//   navMenu.classList.toggle('active')
//   leftNav.classList.toggle('active')
//   rigthNav.classList.toggle('active')
//   container.classList.toggle('active')
//   logoWrapper.classList.toggle('active')
// }

// function hideMenu() {
//   burger.classList.remove('active')
//   navMenu.classList.remove('active')
//   leftNav.classList.remove('active')
//   rigthNav.classList.remove('active')
//   container.classList.remove('active')
//   logoWrapper.classList.remove('active')
// }

// navToggle.addEventListener('click', menuActive)

// /* Scroll to element */
// let parkLink = document.getElementById('park')
// let attractions = document.querySelector('.attractions')
// let cafeLink = document.getElementById('cafe')
// let cafe = document.querySelector('.cafe')
// let concactsLink = document.getElementById('contacts')
// let contacts = document.querySelector('.contacts')
// let logo = document.getElementById('logo')
// let intro = document.querySelector('.intro')

// function scrollToAttractions() {
//   attractions.scrollIntoView({behavior: "smooth"})
//   hideMenu()  
// }

// function scrollToCafe() {
//   cafe.scrollIntoView({behavior: "smooth"}) 
//   hideMenu()
// }

// function scrollToContacts() {
//   contacts.scrollIntoView({behavior: "smooth"})
//   hideMenu()
// }

// function scrollToHeader() {
//   intro.scrollIntoView({behavior: "smooth"})
//   hideMenu()
// }

// parkLink.addEventListener('click', scrollToAttractions)
// cafeLink.addEventListener('click', scrollToCafe)
// concactsLink.addEventListener('click', scrollToContacts)
// logo.addEventListener('click', scrollToHeader)

// /* Scroll hide menu */
// let scrollPos = 0
// let windowY = window.scrollY

// function checkPosition() {
//   let windowY = window.scrollY;
//   if (windowY < scrollPos) {
//     navMenu.classList.remove('nav-scroll')
//     navBtn.classList.remove('nav-btn--scroll')
//   } else {
//     navMenu.classList.add('nav-scroll')
//     navBtn.classList.add('nav-btn--scroll')
//   }
//   scrollPos = windowY;
// }

// window.addEventListener('scroll', checkPosition);

/* Carousel */
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("attractions-item");
//   if (n > 3) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   if (window.matchMedia("(min-width: 915px)").matches) {
//     slides[slideIndex - 1].style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//     slides[slideIndex + 1].style.display = "block";
//   } else if(window.matchMedia("(min-width: 670px)").matches) {
//     slides[slideIndex - 1].style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//   } else {
//     slides[slideIndex].style.display = "block";  
//   }
// }

// let nextBtn = document.querySelector('.next-btn')
// let prevBtn = document.querySelector('.prev-btn')
// let slides = document.querySelectorAll(".attractions-item");

// prevBtn.addEventListener('click', () => {
//   slides.forEach(el => {
//     console.log(el);
//   })
//   // console.log(slides[0].style.display = 'none ')
// })








// Готовый слайдер
// const carouselSlider = document.querySelector('.attractions-list')
// const carouselItem = document.querySelectorAll('.attractions-item')
// const itemWidth = document.querySelector('.attractions-list').clientWidth / (carouselItem.length)

// let nextBtn = document.querySelector('.next-btn')
// let prevBtn = document.querySelector('.prev-btn')

// let counter = 0
// const size = 446

// prevBtn.addEventListener('click', () => {
//   counter--
//   carouselSlider.style.transform = 'translateX(' + (counter * - size) + 'px)'
//   if(counter <= 0) {
//     counter = 3
//   } 
// })

// nextBtn.addEventListener('click', () => {
//   counter++
//   carouselSlider.style.transform = 'translateX(' + (counter * - size) + 'px)'
//   if(counter >= 2) {
//     counter = -1
//   }
// })

// function sliderMedia() {
// if (window.matchMedia("(min-width: 915px)").matches) {
//   carouselSlider.style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//     slides[slideIndex + 1].style.display = "block";
//   } else if(window.matchMedia("(min-width: 670px)").matches) {
//     slides[slideIndex - 1].style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//   } else {
//     slides[slideIndex].style.display = "block";  
//   }
// }

// sliderMedia()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuY3NzP2MwYzciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9zdHlsZS5jc3M/ODY0NiIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL21lbnUtbmF2LmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbW9kYWwtd2luZG93LmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC90b3VjaC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvY3NzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEOzs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBLCtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0EsaUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7O0FDblZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7QUN2REQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQSxzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeE9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsNkhBQTZIO1dBQzNKLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsNEJBQTRCLFFBQVE7V0FDMUQ7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLG9CQUFvQjtXQUNwQztXQUNBLGtHQUFrRyxZQUFZLE9BQU87V0FDckg7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0VBQWtFLGtDQUFrQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NmQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSw2QkFBNkI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsOEJBQThCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQjtXQUNsQjtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUEsUzs7Ozs7V0NuRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQzs7V0FFaEM7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLGNBQWM7V0FDZDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLDRHOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLDBEQUFZO0FBQ3hCLElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLG1IQUErQztBQUMzRCxJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLDBEQUFZO0FBQ3hCLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CLElBQUksbUJBQU8sQ0FBQyx1REFBWTtBQUN4QjtBQUNBLEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5TUFBMEI7QUFDOUIsSUFBSSwwTEFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZTtBQUNqQixpQkFBaUI7QUFDakIsZ0JBQWdCLG1CQUFtQjtBQUNuQywwQztBQUNBO0FBQ0E7QUFDQSxzRDtBQUNBLGtEO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0Q7QUFDQSxrRDtBQUNBLE1BQU07QUFDTixrRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7Ozs7Ozs7OztBQVNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsNEM7QUFDQSxrRDtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNEO0FBQ0Esa0Q7QUFDQSxNQUFNO0FBQ04sa0Q7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4uMjgyMTZlMGU4M2FmZmUzMWU1MzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyBGb290ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxMzQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19pbm5lciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19sb2dvIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19kZXNjcmlwdGlvbiwgLmZvb3Rlcl9fZmVlZGJhY2sge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9faW5uZXJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb290ZXJfX2xvZ29cIiBzcmM9XCIyNWI0MjZmYjc2NjhkZGUzYWJlZi5wbmdcIiBhbHQ9XCLQm9C+0LPQvtGC0LjQvyDQnNC10LPQsNC70LXQvdC0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICDCqSDQpdC+0LvQtNC40L3QsyDCq9Cc0LXQs9Cw0L/QvtC70LjRgcK7LCAyMDA5IOKAlCAyMDIwIDxicj5cclxuICAgICAgICAgICAg0KPRgdC70L7QstC40Y8g0LTQvtCz0L7QstC+0YDQsCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLICjQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Ywg0Lgg0LfQsNGJ0LjRgtCwINC/0LXRgNGB0L7QvdCw0LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCkgPGJyPlxyXG4gICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQv9C+0YHQtdGJ0LXQvdC40Y8gPGJyPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9fZmVlZGJhY2tcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkNlplWkIzbDVtUU9zZHViMDNPVFFMZFNiSnJVbUVDX3Zjd1lQcXJpUHNsZ0w0dGcvdmlld2Zvcm0/ZW50cnkuNjMyNjQwOTc4PSVEMCU5RCVEMCVCOCVEMCVCNiVEMCVCRCVEMCVCOCVEMCVCOSslRDAlQTIlRDAlQjAlRDAlQjMlRDAlQjglRDAlQkJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LI8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Zvb3Rlci1jb21wb25lbnQnLCBGb290ZXIpIiwiY2xhc3MgTWVudU5hdiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIGxldCBjaXJjbGVXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjIyICsgJ3B4J1xyXG5cclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIzZTQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJfX21lbnUtYmcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyX19tZW51LWJnLS1hY3RpdmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1heC13aWR0aDogMTM1MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0LCAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQtLWFjdGl2ZSwgLm1lbnVfX3JpZ2h0LS1hY3RpdmUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgIG9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0LCBcclxuICAgICAgICAgICAgdHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAuMzIsIDEuMik7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuN3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC45cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4zcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdCB7XHJcbiAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgd2lkdGg6IDIyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbSBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U1ZmZmZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMzBweCA5cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X190b2dnbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjcwcHgpIHtcclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoJHtjaXJjbGVXaWR0aH0gYXQgdG9wIHJpZ2h0KTtcclxuICAgICAgICAgICAgaGVpZ3RoOiAxMDAlO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIC5oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDczMHB4IGF0IGNlbnRlcik7XHJcbiAgICAgICAgICAgIGhlaWd0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDY1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51LS1hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLnRvZ2dsZV9fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICAgIG9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0LCBcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIC4zMiwgMS4yKTsgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC43cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjlzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4ycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fbGVmdCB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnUtYmdcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCdLtCi0LDQs9C40Ls8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0J/QsNGA0Lo8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JrQsNGE0LU8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QnNC10YDQvtC/0YDQuNGP0YLQuNGPPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCQ0LrRhtC40Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0KbQtdC90Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JrQvtC90YLQsNC60YLRizwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwic3JjL2Fzc2V0cy9pbWFnZXMvbG9nby53ZWJwXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgdHlwZT1cImFcIiBjbGFzcz1cIm1lbnVfX2J0blwiPtCX0LDQutCw0LfQsNGC0Ywg0L/RgNCw0LfQtNC90LjQujwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZV9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZW51X190b2dnbGVcIj7QnNC10L3RjjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ25hdi1jb21wb25lbnQnLCBNZW51TmF2KVxyXG5cclxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlX193cmFwcGVyJylcclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKVxyXG5sZXQgbWVudUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGVmdCcpXHJcbmxldCBtZW51TGVmdExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKVxyXG5sZXQgbWVudVJpZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3JpZ2h0JylcclxubGV0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190b2dnbGUnKVxyXG5cclxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tYWN0aXZlJylcclxuICBtZW51TGVmdC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19sZWZ0LS1hY3RpdmUnKVxyXG4gIG1lbnVSaWd0aC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19yaWdodC0tYWN0aXZlJylcclxuICB0b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fdG9nZ2xlLS1hY3RpdmUnKVxyXG4gIG1lbnVMZWZ0TGkuZm9yRWFjaChlbGVtID0+IHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9faXRlbS0tYWN0aXZlJylcclxuICB9KVxyXG59XHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpXHJcbiIsImNsYXNzIE1vZGFsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fd3JhcHBlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2Zvcm0ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J1dHRvbnMge1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0NnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0biB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIC5uZXh0LWJ0biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5MGRjO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCAucHJldi1idG4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuLWNsb3NlIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuLWNsb3NlIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA3MztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODV2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4OHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX193cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2Zvcm1cIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj7QlNCw0YLQsCDQv9GA0L7QstC10LTQtdC90LjRjyDQv9GA0LDQt9C00L3QuNC60LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImRhdGVcIiBcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0KTQmNCePC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YdcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj7QnNC+0LHQuNC70YzQvdGL0Lkg0YLQtdC70LXRhNC+0L08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGhvbmVcIiB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCI4OTk5MTIzNDU2N1wiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxAZW1pYWwucnVcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIHByZXYtYnRuXCI+0J3QsNC30LDQtDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbmV4dC1idG5cIj7QlNCw0LvQtdC1PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtbW9kYWwtYnRuXCIgY2xhc3M9XCJtb2RhbF9fYnRuLWNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtd2luZG93LWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtb2RhbC1jb21wb25lbnQnLCBNb2RhbClcclxuXHJcbi8qIE9wZW4gbW9kYWwgKi9cclxubGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcclxuXHJcbm5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcblxyXG4vKiBDbG9zZSBtb2RhbCB3aW5kb3cgKi9cclxubGV0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtbW9kYWwtYnRuJylcclxubGV0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX193cmFwcGVyJylcclxuY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoZXZlbnQpIHtcclxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWVcclxuXHJcbiAgaWYodGFyZ2V0ICE9ICdCVVRUT04nKSByZXR1cm5cclxuICBcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSkge1xyXG4gICAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIH1cclxufSlcclxuXHJcbi8qIEN1cnJlbnQgZGF0ZSAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKVxyXG4iLCIvKiBTaG93IGl0ZW0gYnRuICovXHJcbmxldCBzaG93QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctYnRuJylcclxubGV0IGNhcmRIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fd3JhcHBlcicpXHJcblxyXG5mdW5jdGlvbiBzaG93SXRlbSgpIHtcclxuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICBjYXJkSGlkZGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmQtLWhpZGRlbicpXHJcbn1cclxuXHJcbnNob3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SXRlbSlcclxuXHJcbi8vIC8qIEN1cnJlbnQgZGF0ZSAqL1xyXG4vLyBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuLy8gbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XHJcblxyXG4vLyBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuLy8gICBsZXQgZGQgPSBkYXRlLmdldERhdGUoKVxyXG4vLyAgIGlmIChkZCA8IDEwKSBkZCA9ICcwJyArIGRkXHJcblxyXG4vLyAgIGxldCBNTSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuLy8gICBpZiAoTU0gPCAxMCkgTU0gPSAnMCcgKyBNTVxyXG5cclxuLy8gICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4vLyAgIGlmICh5eXl5IDwgMTApIHl5eXkgPSAnMCcgKyB5eXl5XHJcblxyXG4vLyAgIHJldHVybiB5eXl5ICsgJy0nICsgTU0gKyAnLScgKyBkZFxyXG4vLyB9XHJcblxyXG4vLyBsZXQgY3VycmVudERhdGUgPSBmb3JtYXREYXRlKGRhdGUpXHJcbi8vIGRhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlXHJcblxyXG5pbXBvcnQgJy4vb3JkZXIuY3NzJ1xyXG5cclxuLyogT3BlbiBtb2RhbCAqL1xyXG5sZXQgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcnNfX2xpc3QnKVxyXG5sZXQgcGhvbmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lJylcclxubGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcclxubGV0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX193cmFwcGVyJylcclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoZXZlbnQpIHtcclxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWVcclxuXHJcbiAgaWYodGFyZ2V0ICE9ICdCVVRUT04nKSByZXR1cm5cclxuICBcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcblxyXG5vZmZlcnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG5uYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufSlcclxuXHJcbnBob25lU2VjdGlvbi5mb3JFYWNoKGVsID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxufSkiLCJjbGFzcyBTbGlkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyYWdzdGFydCBhIHsgXHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlci13aW5kb3ctd2lkdGgge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzO1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtaXRlbSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1pdGVtIGltZyB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZTBkZmRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCw2NCw2NywwLjMpLDAgMnB4IDZweCAycHggcmdiYSg2MCw2NCw2NywwLjE1KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAuZHJhZ3N0YXJ0IHtcclxuICAgICAgICAvLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyYWJiaW5nIHtcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saXN0LmdyYWJiaW5nIGltZyB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLmRyYWdzdGFydCBhIHtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmFjdGlvbnMtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmFjdGlvbnNfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXdpbmRvdy13aWR0aFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJhdHRyYWN0aW9ucy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCI2YmI1OTFlZGUwOGVlMjJlOTMyOC5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JHQsNGC0YPRgjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiM2IxYjU2MDRmYWY3OGNiMzgxOGUuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCt0LrRgdGC0YDQuNC8LdC/0LDRgNC6PC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJiOGM2MTMzNzUwZjJiNTM2NjhiYS5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JTQtdGC0YHQutC40Lkg0YHQsNC0PC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCI4MjkzNjllYjVhZmY1ODU0YTYwZC5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JvQsNCx0LjRgNC40L3RgjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiMzk5ZjM2ZWI0OWY5YjExZTI3MzYuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCY0LPRgNC+0LLRi9C1INCw0LLRgtC+0LzQsNGC0Ys8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2xpZGVyLWNvbXBvbmVudCcsIFNsaWRlcilcclxuXHJcbmNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRyYWN0aW9ucy1saXN0JyksXHJcbnNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWNvbnRhaW5lcicpLFxyXG4gIHNsaWRlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dHJhY3Rpb25zLWl0ZW0nKSlcclxuXHJcbmlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgc2xpZGVyV3JhcHBlci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45ICsgXCJweFwiXHJcbn0gZWxzZSB7XHJcbiAgc2xpZGVyV3JhcHBlci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41ICsgXCJweFwiXHJcbn1cclxuXHJcbmxldCBjdXJyZW50SW5kZXggPSAwXHJcbmxldCBzdGFydFBvc2l0aW9uID0gMFxyXG5sZXQgY3VycmVudFRyYW5zbGF0ZSA9IDBcclxubGV0IHByZXZUcmFuc2xhdGUgPSAwXHJcbmxldCBpc0RyYWdnaW5nID0gZmFsc2VcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcbn0sIGZhbHNlKTtcclxuXHJcbnNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgc2xpZGUuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC45ICsgXCJweFwiXHJcbiAgICBzbGlkZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC41ICsgJ3B4J1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjUgKyBcInB4XCJcclxuICAgIHNsaWRlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMgKyAncHgnXHJcbiAgfVxyXG4gIHNsaWRlLnN0eWxlLm1hcmdpblJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuMSArICdweCdcclxuICBzbGlkZXJJbWcgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxyXG5cclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXHJcbiAgXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KGluZGV4KSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZClcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKVxyXG5cclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdG91Y2hTdGFydChpbmRleCkpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0b3VjaEVuZClcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdG91Y2hNb3ZlKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdG91Y2hFbmQpXHJcbn0pXHJcblxyXG5zbGlkZXJDb250YWluZXIub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGluZGV4KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgIGN1cnJlbnRJbmRleCA9IGluZGV4XHJcbiAgICBzdGFydFBvc2l0aW9uID0gZ2V0UG9zaXRpb25YKGUpXHJcbiAgICBpc0RyYWdnaW5nID0gdHJ1ZVxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyYWJiaW5nJylcclxuICAgIGNsZWFySW50ZXJ2YWwoaW5maW5pdHlTbGlkZXIpXHJcbiAgfSBcclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcclxuICBpZihpc0RyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBnZXRQb3NpdGlvblgoZSlcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBwcmV2VHJhbnNsYXRlICsgY3VycmVudFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvblxyXG4gICAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y3VycmVudFRyYW5zbGF0ZX1weClgXHJcbiAgICAgIFxyXG4gICAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAuMDAxc1wiXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaEVuZChlKSB7IFxyXG4gIGlzRHJhZ2dpbmcgPSBmYWxzZVxyXG4gIGNvbnN0IG1vdmVkQnkgPSBjdXJyZW50VHJhbnNsYXRlIC0gcHJldlRyYW5zbGF0ZVxyXG5cclxuICBpZihtb3ZlZEJ5ID4gMTAwICYmIGN1cnJlbnRJbmRleCA+IDApIGN1cnJlbnRJbmRleCAtPSAxXHJcbiAgaWYobW92ZWRCeSA8IC0xMDAgJiYgY3VycmVudEluZGV4IDwgc2xpZGVzLmxlbmd0aCAtIDEpIGN1cnJlbnRJbmRleCArPSAxXHJcblxyXG5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqIC13aW5kb3cuaW5uZXJXaWR0aFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC41IC0gd2luZG93LmlubmVyV2lkdGggKiAuMSlcclxuICB9XHJcblxyXG4gIHByZXZUcmFuc2xhdGUgPSBjdXJyZW50VHJhbnNsYXRlXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y3VycmVudFRyYW5zbGF0ZX1weClgXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAxLjI1c1wiXHJcbiAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWJiaW5nJylcclxuICBpZihtb3ZlZEJ5ICE9IDApIHtcclxuICAgIGxldCBjYXB0dXJlQ2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXB0dXJlQ2xpY2ssIHRydWUpOyAvLyBjbGVhbnVwXHJcbiAgICB9XHJcbiAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUNsaWNrLCB0cnVlKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb3NpdGlvblgoZSkge1xyXG4gIHJldHVybiBlLnR5cGUuaW5jbHVkZXMoJ21vdXNlJykgPyBlLnBhZ2VYIDogZS50b3VjaGVzWzBdLmNsaWVudFhcclxufVxyXG5cclxuY29uc3QgaW5maW5pdHlTbGlkZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgY3VycmVudEluZGV4KysgIFxyXG4gIGlmKGN1cnJlbnRJbmRleCA+IDQpIGN1cnJlbnRUcmFuc2xhdGUgPSAwLCBjdXJyZW50SW5kZXggPSAwXHJcblxyXG4gIG1lZGlhUXVlcmllc1RyYW5zbGF0ZSgpXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y3VycmVudFRyYW5zbGF0ZX1weClgXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAxLjI1c1wiXHJcbn0sIDI1MDApXHJcblxyXG5mdW5jdGlvbiBtZWRpYVF1ZXJpZXNUcmFuc2xhdGUoKSB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAoLXdpbmRvdy5pbm5lcldpZHRoICogLjkgLSBwYXJzZUludChzbGlkZXNbMF0uc3R5bGUubWFyZ2luUmlnaHQpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC41IC0gcGFyc2VJbnQoc2xpZGVzWzBdLnN0eWxlLm1hcmdpblJpZ2h0KSlcclxuICB9XHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW0taGVhZGVyX2pzXCI6XCI2NzNiZmMyMThiZmQzYmE0MzRiYVwiLFwic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2Nzc1wiOlwiMGM0M2MyZWQxYzdkYjllZmI3ODNcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmNzc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjb2RlOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJ2YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xudmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5taW5pQ3NzID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdHZhciBjc3NDaHVua3MgPSB7XCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbS1oZWFkZXJfanNcIjoxLFwic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2Nzc1wiOjF9O1xuXHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcblx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBsb2FkU3R5bGVzaGVldChjaHVua0lkKS50aGVuKCgpID0+IHtcblx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0fSwgKGUpID0+IHtcblx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pKTtcblx0fVxufTtcblxuLy8gbm8gaG1yIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2RlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbi8vIGltcG9ydCAnLi9vcmRlci5jc3MnXHJcbi8vIGltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJ1xyXG4vLyBpbXBvcnQgJy4vZm9vdGVyLmpzJ1xyXG4vLyBpbXBvcnQgJy4vaXRlbS1oZWFkZXIuanMnXHJcbi8vIGltcG9ydCAnLi9oZWFkZXIuanMnXHJcbi8vIGltcG9ydCAnLi9tb2RhbC13aW5kb3cuanMnXHJcbi8vIGltcG9ydCAnLi9vcmRlci5qcydcclxuLy8gaW1wb3J0ICcuL2l0ZW1zLmNzcydcclxuXHJcbi8vIHZhciBpdGVtcyA9IHJlcXVpcmUoXCIuL2l0ZW1zLmNzc1wiKTtcclxuLy8gdmFyIGl0ZW1zSGVhZGVyID0gcmVxdWlyZShcIi4vaXRlbS1oZWFkZXIuanNcIik7XHJcblxyXG4vKiBQYXRoIGNzcy9qcyB0byBpdGVtcyAqL1xyXG5jb25zdCBwYXRIb21lID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vc3R5bGUuY3NzJykgXHJcbiAgICByZXF1aXJlKCcuL2Zvb3Rlci5qcycpIFxyXG4gICAgcmVxdWlyZSgnLi9tZW51LW5hdicpIFxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKSBcclxuICAgIHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi90b3VjaC1zbGlkZXIuanMnKSBcclxuICB9XHJcbiAgcmV0dXJuXHJcbn1cclxucGF0SG9tZSgpXHJcblxyXG5jb25zdCBwYXRoT3JkZXIgPSAoKSA9PiB7XHJcbiAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9vcmRlci5odG1sXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vb3JkZXIuY3NzJylcclxuICAgIHJlcXVpcmUoJy4vbWVudS1uYXYnKVxyXG4gICAgcmVxdWlyZSgnLi9mb290ZXIuanMnKVxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKVxyXG4gICAgcmVxdWlyZSgnLi9vcmRlci5qcycpXHJcbiAgfVxyXG59IFxyXG5wYXRoT3JkZXIoKVxyXG5cclxuY29uc3QgcGF0aEl0ZW1zID0gKHBhdGgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IHBhdGgpIHtcclxuICAgIGltcG9ydCgnLi9pdGVtLWhlYWRlci5qcycpXHJcbiAgICBpbXBvcnQoJy4vaXRlbXMuY3NzJylcclxuICB9XHJcbn1cclxucGF0aEl0ZW1zKFwiL2JlemxpbWl0LXYtbWVnYWxlbmRlLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL290bWV0LWRlbi1yb3poZGVuaXlhLXYta2luby5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi92aXB1c2tub2ktdi1tZWdhbGVuZGUuaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvbWVnYWxlbmQtcG9sbm9zdHl1LW90a3JpdC5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9waXRzdHNhLXYtcG9kYXJvay5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9ib251c25heWEtc2lzdGVtYS5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9pZ3JvdmllLWF2dG9tYXRpLW90a3JpdGkuaHRtbFwiKVxyXG4vLyByZXF1aXJlLmVuc3VyZShbXCJjXCJdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbi8vICAgcmVxdWlyZShcImJcIikueHl6KCk7XHJcbi8vICAgdmFyIGQgPSByZXF1aXJlKFwiZFwiKTtcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gLypNZW51Ki9cclxuLy8gbGV0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtdG9nZ2xlJylcclxuLy8gbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKVxyXG4vLyBsZXQgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4nKVxyXG4vLyBsZXQgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbWVudScpXHJcbi8vIGxldCBsZWZ0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtbmF2JylcclxuLy8gbGV0IHJpZ3RoTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ3RoLW5hdicpXHJcbi8vIGxldCBsb2dvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLXdyYXBwZXInKVxyXG4vLyBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXHJcblxyXG4vLyBmdW5jdGlvbiBtZW51QWN0aXZlKCkge1xyXG4vLyAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4vLyAgIG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuLy8gICBsZWZ0TmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbi8vICAgcmlndGhOYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuLy8gICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuLy8gICBsb2dvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBoaWRlTWVudSgpIHtcclxuLy8gICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgbGVmdE5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgIHJpZ3RoTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgbG9nb1dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gfVxyXG5cclxuLy8gbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUFjdGl2ZSlcclxuXHJcbi8vIC8qIFNjcm9sbCB0byBlbGVtZW50ICovXHJcbi8vIGxldCBwYXJrTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJrJylcclxuLy8gbGV0IGF0dHJhY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dHJhY3Rpb25zJylcclxuLy8gbGV0IGNhZmVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhZmUnKVxyXG4vLyBsZXQgY2FmZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWZlJylcclxuLy8gbGV0IGNvbmNhY3RzTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cycpXHJcbi8vIGxldCBjb250YWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cycpXHJcbi8vIGxldCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKVxyXG4vLyBsZXQgaW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm8nKVxyXG5cclxuLy8gZnVuY3Rpb24gc2Nyb2xsVG9BdHRyYWN0aW9ucygpIHtcclxuLy8gICBhdHRyYWN0aW9ucy5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KVxyXG4vLyAgIGhpZGVNZW51KCkgIFxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzY3JvbGxUb0NhZmUoKSB7XHJcbi8vICAgY2FmZS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KSBcclxuLy8gICBoaWRlTWVudSgpXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNjcm9sbFRvQ29udGFjdHMoKSB7XHJcbi8vICAgY29udGFjdHMuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSlcclxuLy8gICBoaWRlTWVudSgpXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNjcm9sbFRvSGVhZGVyKCkge1xyXG4vLyAgIGludHJvLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbi8vICAgaGlkZU1lbnUoKVxyXG4vLyB9XHJcblxyXG4vLyBwYXJrTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRvQXR0cmFjdGlvbnMpXHJcbi8vIGNhZmVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9DYWZlKVxyXG4vLyBjb25jYWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxUb0NvbnRhY3RzKVxyXG4vLyBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9IZWFkZXIpXHJcblxyXG4vLyAvKiBTY3JvbGwgaGlkZSBtZW51ICovXHJcbi8vIGxldCBzY3JvbGxQb3MgPSAwXHJcbi8vIGxldCB3aW5kb3dZID0gd2luZG93LnNjcm9sbFlcclxuXHJcbi8vIGZ1bmN0aW9uIGNoZWNrUG9zaXRpb24oKSB7XHJcbi8vICAgbGV0IHdpbmRvd1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuLy8gICBpZiAod2luZG93WSA8IHNjcm9sbFBvcykge1xyXG4vLyAgICAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtc2Nyb2xsJylcclxuLy8gICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtYnRuLS1zY3JvbGwnKVxyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1zY3JvbGwnKVxyXG4vLyAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4tLXNjcm9sbCcpXHJcbi8vICAgfVxyXG4vLyAgIHNjcm9sbFBvcyA9IHdpbmRvd1k7XHJcbi8vIH1cclxuXHJcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Bvc2l0aW9uKTtcclxuXHJcbi8qIENhcm91c2VsICovXHJcbi8vIHZhciBzbGlkZUluZGV4ID0gMTtcclxuLy8gc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuXHJcbi8vIGZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xyXG4vLyAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcclxuLy8gICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBuKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbi8vICAgdmFyIGk7XHJcbi8vICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdHRyYWN0aW9ucy1pdGVtXCIpO1xyXG4vLyAgIGlmIChuID4gMykge3NsaWRlSW5kZXggPSAxfSAgICBcclxuLy8gICBpZiAobiA8IDEpIHtzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aH1cclxuLy8gICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcclxuLy8gICB9XHJcbi8vICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTE1cHgpXCIpLm1hdGNoZXMpIHtcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4ICsgMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICB9IGVsc2UgaWYod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2NzBweClcIikubWF0Y2hlcykge1xyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gbGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1idG4nKVxyXG4vLyBsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2LWJ0bicpXHJcbi8vIGxldCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmF0dHJhY3Rpb25zLWl0ZW1cIik7XHJcblxyXG4vLyBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIHNsaWRlcy5mb3JFYWNoKGVsID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVsKTtcclxuLy8gICB9KVxyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHNsaWRlc1swXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUgJylcclxuLy8gfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyDQk9C+0YLQvtCy0YvQuSDRgdC70LDQudC00LXRgFxyXG4vLyBjb25zdCBjYXJvdXNlbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRyYWN0aW9ucy1saXN0JylcclxuLy8gY29uc3QgY2Fyb3VzZWxJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dHJhY3Rpb25zLWl0ZW0nKVxyXG4vLyBjb25zdCBpdGVtV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0cmFjdGlvbnMtbGlzdCcpLmNsaWVudFdpZHRoIC8gKGNhcm91c2VsSXRlbS5sZW5ndGgpXHJcblxyXG4vLyBsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LWJ0bicpXHJcbi8vIGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtYnRuJylcclxuXHJcbi8vIGxldCBjb3VudGVyID0gMFxyXG4vLyBjb25zdCBzaXplID0gNDQ2XHJcblxyXG4vLyBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNvdW50ZXItLVxyXG4vLyAgIGNhcm91c2VsU2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoY291bnRlciAqIC0gc2l6ZSkgKyAncHgpJ1xyXG4vLyAgIGlmKGNvdW50ZXIgPD0gMCkge1xyXG4vLyAgICAgY291bnRlciA9IDNcclxuLy8gICB9IFxyXG4vLyB9KVxyXG5cclxuLy8gbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBjb3VudGVyKytcclxuLy8gICBjYXJvdXNlbFNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKGNvdW50ZXIgKiAtIHNpemUpICsgJ3B4KSdcclxuLy8gICBpZihjb3VudGVyID49IDIpIHtcclxuLy8gICAgIGNvdW50ZXIgPSAtMVxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbi8vIGZ1bmN0aW9uIHNsaWRlck1lZGlhKCkge1xyXG4vLyBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5MTVweClcIikubWF0Y2hlcykge1xyXG4vLyAgIGNhcm91c2VsU2xpZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleCArIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgfSBlbHNlIGlmKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjcwcHgpXCIpLm1hdGNoZXMpIHtcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIHNsaWRlck1lZGlhKClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==