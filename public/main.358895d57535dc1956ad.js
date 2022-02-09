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

/***/ "./src/assets/scripts/local/animation/animation.css":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/local/animation/animation.css ***!
  \**********************************************************/
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

/***/ "./src/assets/scripts/local/showFullLink/showFullLink.css":
/*!****************************************************************!*\
  !*** ./src/assets/scripts/local/showFullLink/showFullLink.css ***!
  \****************************************************************/
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

/***/ "./src/assets/scripts/local/animation/animation.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/local/animation/animation.js ***!
  \*********************************************************/
/***/ (() => {

const link = document.querySelector('.item-link')

let screenPositionShow = window.innerHeight/1.2
let screenPositionRemove = window.innerHeight/6

document.addEventListener('scroll', () => {
    showElemAnimation(link, screenPositionShow, 'active')
})

document.addEventListener('scroll', () => {
    removeElemAnimation(link, screenPositionRemove, 'active')
})

function showElemAnimation(elemen, screenPositionShow, classCss) {
    if(elemen.getBoundingClientRect().top < screenPositionShow) { 
    elemen.classList.add(classCss) 
    }
}

function removeElemAnimation(elemen, screenPositionRemove, classCss) {
    if(elemen.getBoundingClientRect().bottom < screenPositionRemove) {
    elemen.classList.remove(classCss) 
    }
} 

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

/***/ "./src/assets/scripts/local/lazyLoadImg.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/local/lazyLoadImg.js ***!
  \*************************************************/
/***/ (() => {

let imgs = document.querySelectorAll('img')
imgs.forEach(i => {
    if(!i.loading) {
        i.style.backgroundColor = '#ccc'
    }
})

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
              <img src="baa2b45d7c9bed4a275f.png" alt="">
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
        .tab {
          display: none;
        }        
        input.invalid {
          background-color: rgb(250, 234, 234);
        }
        .success {
          border-color: #2ecc71;
        }
        .modal {
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(3px);
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
          border-radius: 10px;
          overflow-y: auto;
        }
        .modal__field {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          max-width: 400px;
          width: 100%;
          position: relative;
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
          display: none;
          background-color: #6c757d;
          cursor: pointer;
          position: relative;
        }
        .modal__btn-close {
          border: none;
          position: absolute;
          z-index: 9999;
          right: 0;
          top: 2px;
          background-color: transparent;
          cursor: pointer;
        }
        .modal__btn-close i {
          color: #fff;
          font-size: 32px;
          line-height: 0.8;
          background-color: #ff0073;
        }     
        .package {
          height: 37px;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
        }   
        .form {
          max-width: 400px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }     
        small {
          color: #e74c3c;
          position: absolute;
          bottom: -15px;
          left: 16px;
          visibility: hidden;
        } 
        small.invalid {
          visibility: visible;
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
          small.invalid {
            font-size: 10px;
          } 
        }
      </style>
      <div class="modal__wrapper">
        <div class="modal">
          <div class="modal__form">
            <form id="regForm" class="form">
              <div class="tab">
                <div class="modal__field">
                <label for="date">Дата проведения праздника</label>
                <input id="date" type="date">
                <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="name">ФИО</label>
                  <input id="name" type="text" placeholder="Иванов Иван Иванович">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="phone">Мобильный телефон</label>
                  <input id="phone" type="tel" placeholder="+7 (999) 123-45-67">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="email">E-mail</label>
                  <input id="email" type="email" placeholder="email@email.ru">
                  <small>Error message</small>
                </div>
              </div>

              <div class="tab">
                <div class="modal__field">
                  <label for="count">Количество детей</label>
                  <input id="count" type="number" placeholder="Введите число детей">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="package">Пакетное предложение</label>
                  <select class="package" name="package" id="package">
                    <option value="6606">Базовый (до 10 чел.) - 4700.00 RUB</option>
                    <option value="6608">Премиум (до 10 чел.) - 7900.00 RUB</option>
                  </select>
                </div>
                <p class="package__description">
                  Квест с 1 аниматором -1 час. Аренда банкетной комнаты -1 час. украшение банкетного стола (скатерть, посуда, салфетки).Гелиевые шары-10шт. пригласительные в кино-10шт. Торжественный вынос торта.
                </p>
              </div>
              <div class="modal__buttons">
                <button type="button" class="modal__btn prev-btn">Назад</button>
                <button type="button" class="modal__btn next-btn">Далее</button>

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

/* Multiple steps */
const tabs = document.querySelectorAll('.tab'),
  nextTab = document.querySelector('.next-btn'),
  prevTab = document.querySelector('.prev-btn'),
  username = document.querySelector('input[id="name"]'),
  phone = document.querySelector('input[id="phone"]'),
  email = document.querySelector('input[id="email"]'),
  count = document.getElementById('count') 

let currentTab = 0
tabs[currentTab].style.display = 'block'


/* Remove class invalid focused */
function removeInvalid(el) {
  if(el.classList.contains('invalid')) {
    el.classList.remove('invalid')
    el.nextElementSibling.style.visibility = 'hidden'
  }
}
username.onfocus = () => removeInvalid(username)
phone.onfocus = () => removeInvalid(phone)
email.onfocus = () => removeInvalid(email)
count.onfocus = () => removeInvalid(count)

nextTab.addEventListener('click', () => {
  validateForm()

  let invalidName = username.classList.contains('invalid'),
    invalidClass = tabs[currentTab].querySelector('.invalid')

    if(invalidClass) return

  currentTab++
  
  if(currentTab >= tabs.length) {
    const form = document.getElementById('regForm');
    form.style.display = 'none';
    let processing = document.createElement('span');
    processing.appendChild(document.createTextNode('processing ...'));
    form.parentNode.insertBefore(processing, form);

    redirectMainPage()

    return false
  }
  Array.from(tabs).find(showTab)
  showBtn()
})

function showTab(el, idx) {
  if(idx === currentTab) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}

function showBtn() {
  if(currentTab >= tabs.length - 1) {
    nextTab.innerHTML = 'Отправить'
  } else {
    nextTab.innerHTML = 'Далее'
  }

  currentTab > 0
    ? prevTab.style.display = 'inline'
    : prevTab.style.display = 'none'
}

prevTab.addEventListener('click', () => {
  currentTab--
  if(currentTab < 0) {
    currentTab = 0
    return false
  }
  Array.from(tabs).find(showTab)
  showBtn()
})

function redirectMainPage() {
  let timer = 11
  setInterval(()=> {
    timer--
    document.querySelector('.modal__form').innerHTML = timer
    if(timer === 1) {
      window.location.href = "https://megalandpark.web.app/" 
    }
  }, 1000)
}


function validateForm() {
  let tab = document.getElementsByClassName("tab"),
    currentTabs = tab[currentTab].getElementsByTagName("input")
    valid = true

  const usernameValue = username.value.trim(),
    phoneValue = phone.value.trim(),
    emailValue = email.value.trim(),
    countValue = count.value.trim(),
    containsCount = document.querySelector('input[type="number"]')

  for (i = 0; i < currentTabs.length; i++) {
  if(usernameValue === '') {
    setErrorFor(username, "Введите ФИО")
  } else if(usernameValue.length <= 2) {
    setErrorFor(username, "Слишком короткое ФИО")
  } else if(!validateLnag(usernameValue)) {
    setErrorFor(username, "Введите русские буквы")
  } else {
    setSuccessFor(username)
  }

  if(phoneValue === '') {
    setErrorFor(phone, "Введите номер телефона")
  } else if(phoneValue.length < 18) {
    setErrorFor(phone, "Номер телефона слишком короткий")
  } else {
    setSuccessFor(phone)
  }

  if(emailValue === '') {
    setErrorFor(email, "Введите email")
  } else if(!validateEmail(emailValue)) {
    setErrorFor(email, "Введите правильный email")
  }

  if(countValue === '') {
    setErrorFor(count, "Введите количество детей" )
  }
  }

	
}

function validateLnag(username) {
  return (/^[а-яА-Я]/).test(username)
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  input.className = 'invalid'

  if(input.classList.contains('invalid')) {
    small.className = 'invalid'
    small.innerText = message
    small.style.visibility = 'visible'
  }
}

function setSuccessFor(input) {
  input.className = 'success'
  const smalls = document.querySelectorAll('small')
  smalls.forEach(el => {
    el.classList.remove('invalid')
  })
}





















function minMaxCoun(num) {
  if(num > 30) {
    console.log('f');
  }
}



/* Add phone mask +7(999)123-45-67 */
phone.addEventListener('keydown', function(event) {
  if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
   var mask = '+7 (111) 111-11-11'; // Задаем маску

   if (/[0-9\+\ \-\(\)]/.test(event.key)) {
       // Здесь начинаем сравнивать this.value и mask
       // к примеру опять же
       var currentString = this.value;
       var currentLength = currentString.length;
       if (/[0-9]/.test(event.key)) {
           if (mask[currentLength] == '1') {
               this.value = currentString + event.key;
           } else {
               for (var i=currentLength; i<mask.length; i++) {
              if (mask[i] == '1') {
                  this.value = currentString + event.key;
                  break;
                }
               currentString += mask[i];
               }
           }
       }
   } 
});


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

/***/ "./src/assets/scripts/local/showFullLink/showLinkFull.js":
/*!***************************************************************!*\
  !*** ./src/assets/scripts/local/showFullLink/showLinkFull.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showFullLink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showFullLink.css */ "./src/assets/scripts/local/showFullLink/showFullLink.css");


let links = document.querySelectorAll('.item')

links.forEach(link => {
  link.addEventListener('click', animationElement)
})

function animationElement(ev) {
  ev.preventDefault()
  
  this.style.marginLeft = '0px'
  this.style.marginRight = '0px'

  const ANIMATION_SPEED = '.4s'

  let elemWidth = this.offsetWidth/2,
    elemHeight = this.offsetHeight/2,      
    movingElemX = document.documentElement.clientWidth/2 - (this.getBoundingClientRect().left + elemWidth),
    movingElemY = document.documentElement.clientHeight/2 - (this.getBoundingClientRect().top + elemHeight),
    scaleX = (document.documentElement.clientWidth/2) / (elemWidth),
    scaleY = (document.documentElement.clientHeight/2) / (elemHeight),
    itemPath = this.childNodes[1].getAttribute("href")


  /*Create wrapper on element*/
  let wrap = document.createElement('div') 
  wrap.className = 'start'
  this.before(wrap)     
  
  // Create bg
  setTimeout(() => {
    let backgroundWrap = document.createElement('div')
    backgroundWrap.className = 'empty'      
    document.body.append(backgroundWrap)
    backgroundWrap.className += ' filter'

    /*Center element*/
    setTimeout(() => {          
      wrap.style.transitionDuration = ANIMATION_SPEED
      wrap.style.transitionProperty = 'left, top'
      wrap.style.width = this.clientWidth + 'px'
      // wrap.style.height = this.clientHeight + 'px'
      this.style.position = 'relative'
      wrap.append(this)
      wrap.style.left = movingElemX + 'px'
      wrap.style.top = movingElemY + 'px'
      
      /*Increase element*/
      setTimeout(() => {
        this.style.transitionDuration = ANIMATION_SPEED
        this.style.transitionProperty = 'transform'
        this.style.transform = `scale(${scaleX}, ${scaleY})`

        // redirect to item
        setTimeout(() => {
          window.location.pathname = itemPath
        }, 450)
      }, 100)      
    }, 0)
  }, 0)  

  // Element border none  
  // this.style.borderRadius = window.getComputedStyle(this).getPropertyValue('border-radius') 
  // this.style.transitionDuration = '3s'
  // this.style.transitionProperty = 'borderRadius'
  this.style.borderRadius = '0px'
}  

    
  

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

function loadScript(src) {
  return new Promise(function (resolve, reject) {
      var s;
      s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
  });
}

/***/ }),

/***/ "./src/assets/scripts/local/ya-maps.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/local/ya-maps.js ***!
  \*********************************************/
/***/ (() => {

  function loadMaps() {
    setTimeout(() => {
        const script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39b19df971b7bfaaafe81f4d102954799a6bca83d1a5ee5f21154437236016e6&amp;width=auto&amp;height=460&amp;lang=ru_RU&amp;srcoll=true";
        script.async = true;
        let divMaps = document.querySelector('.contacts-map')
        divMaps.append(script)
    }, 1000);
  }  

  window.addEventListener('load', loadMaps())

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
/******/ 			return "" + chunkId + "." + {"src_assets_scripts_local_item-header_js":"e2e2aa5613f3c9672a8c","src_assets_scripts_local_items_css":"0c43c2ed1c7db9efb783"}[chunkId] + ".js";
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
/* Path css/js to items */
const patHome = () => {
  if(window.location.pathname === "/") {
    __webpack_require__(/*! ./style.css */ "./src/assets/scripts/local/style.css") 
    __webpack_require__(/*! ./animation/animation.css */ "./src/assets/scripts/local/animation/animation.css") 
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js") 
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js") 
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js") 
    __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css") 
    __webpack_require__(/*! ./touch-slider.js */ "./src/assets/scripts/local/touch-slider.js") 
    __webpack_require__(/*! ./ya-maps.js */ "./src/assets/scripts/local/ya-maps.js") 
    __webpack_require__(/*! ./animation//animation */ "./src/assets/scripts/local/animation/animation.js")
    __webpack_require__(/*! ./showFullLink/showLinkFull */ "./src/assets/scripts/local/showFullLink/showLinkFull.js")
    __webpack_require__(/*! ./lazyLoadImg */ "./src/assets/scripts/local/lazyLoadImg.js")
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYW5pbWF0aW9uL2FuaW1hdGlvbi5jc3M/NGJhNyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL29yZGVyLmNzcz9jMGM3Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvc2hvd0Z1bGxMaW5rL3Nob3dGdWxsTGluay5jc3M/ZWNjMyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3N0eWxlLmNzcz84NjQ2Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2xhenlMb2FkSW1nLmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbWVudS1uYXYuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9vcmRlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3Nob3dGdWxsTGluay9zaG93TGlua0Z1bGwuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC90b3VjaC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC95YS1tYXBzLmpzIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRDs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0EsK0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7QUNuVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHdCQUF3Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsR0FBRztBQUNoSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsbUhBQW1IO0FBQ25ILG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWix3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcmVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUN2RDBCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPLElBQUksT0FBTzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjs7QUFFckU7QUFDQTtBQUNBOztBQUVBLHNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsaUJBQWlCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7QUNuUEE7QUFDQTtBQUNBO0FBQ0Esb0tBQW9LLGVBQWUsZUFBZSxlQUFlO0FBQ2pOO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHOztBQUVBLDZDOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGLEU7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLDZIQUE2SDtXQUMzSixFOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLDRCQUE0QixRQUFRO1dBQzFEO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQixvQkFBb0I7V0FDcEM7V0FDQSxrR0FBa0csWUFBWSxPQUFPO1dBQ3JIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtFQUFrRSxrQ0FBa0M7V0FDcEc7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDZkE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNkJBQTZCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDhCQUE4QjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxrQkFBa0I7V0FDbEI7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBOztXQUVBLFM7Ozs7O1dDbkVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0M7O1dBRWhDO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSixjQUFjO1dBQ2Q7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLHFGQUEyQjtBQUN2QyxJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLDBEQUFZO0FBQ3hCLElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLG1IQUErQztBQUMzRCxJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CLElBQUksbUJBQU8sQ0FBQywyREFBYztBQUMxQixJQUFJLG1CQUFPLENBQUMsaUZBQXdCO0FBQ3BDLElBQUksbUJBQU8sQ0FBQyw0RkFBNkI7QUFDekMsSUFBSSxtQkFBTyxDQUFDLGdFQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLDBEQUFZO0FBQ3hCLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CLElBQUksbUJBQU8sQ0FBQyx1REFBWTtBQUN4QjtBQUNBLEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5TUFBMEI7QUFDOUIsSUFBSSwwTEFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uMzU4ODk1ZDU3NTM1ZGMxOTU2YWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tbGluaycpXHJcblxyXG5sZXQgc2NyZWVuUG9zaXRpb25TaG93ID0gd2luZG93LmlubmVySGVpZ2h0LzEuMlxyXG5sZXQgc2NyZWVuUG9zaXRpb25SZW1vdmUgPSB3aW5kb3cuaW5uZXJIZWlnaHQvNlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgc2hvd0VsZW1BbmltYXRpb24obGluaywgc2NyZWVuUG9zaXRpb25TaG93LCAnYWN0aXZlJylcclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIHJlbW92ZUVsZW1BbmltYXRpb24obGluaywgc2NyZWVuUG9zaXRpb25SZW1vdmUsICdhY3RpdmUnKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2hvd0VsZW1BbmltYXRpb24oZWxlbWVuLCBzY3JlZW5Qb3NpdGlvblNob3csIGNsYXNzQ3NzKSB7XHJcbiAgICBpZihlbGVtZW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgc2NyZWVuUG9zaXRpb25TaG93KSB7IFxyXG4gICAgZWxlbWVuLmNsYXNzTGlzdC5hZGQoY2xhc3NDc3MpIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFbGVtQW5pbWF0aW9uKGVsZW1lbiwgc2NyZWVuUG9zaXRpb25SZW1vdmUsIGNsYXNzQ3NzKSB7XHJcbiAgICBpZihlbGVtZW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgc2NyZWVuUG9zaXRpb25SZW1vdmUpIHtcclxuICAgIGVsZW1lbi5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzQ3NzKSBcclxuICAgIH1cclxufSAiLCJjbGFzcyBGb290ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxMzQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19pbm5lciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19sb2dvIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19kZXNjcmlwdGlvbiwgLmZvb3Rlcl9fZmVlZGJhY2sge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9faW5uZXJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb290ZXJfX2xvZ29cIiBzcmM9XCIyNWI0MjZmYjc2NjhkZGUzYWJlZi5wbmdcIiBhbHQ9XCLQm9C+0LPQvtGC0LjQvyDQnNC10LPQsNC70LXQvdC0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICDCqSDQpdC+0LvQtNC40L3QsyDCq9Cc0LXQs9Cw0L/QvtC70LjRgcK7LCAyMDA5IOKAlCAyMDIwIDxicj5cclxuICAgICAgICAgICAg0KPRgdC70L7QstC40Y8g0LTQvtCz0L7QstC+0YDQsCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLICjQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Ywg0Lgg0LfQsNGJ0LjRgtCwINC/0LXRgNGB0L7QvdCw0LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCkgPGJyPlxyXG4gICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQv9C+0YHQtdGJ0LXQvdC40Y8gPGJyPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9fZmVlZGJhY2tcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkNlplWkIzbDVtUU9zZHViMDNPVFFMZFNiSnJVbUVDX3Zjd1lQcXJpUHNsZ0w0dGcvdmlld2Zvcm0/ZW50cnkuNjMyNjQwOTc4PSVEMCU5RCVEMCVCOCVEMCVCNiVEMCVCRCVEMCVCOCVEMCVCOSslRDAlQTIlRDAlQjAlRDAlQjMlRDAlQjglRDAlQkJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LI8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Zvb3Rlci1jb21wb25lbnQnLCBGb290ZXIpIiwibGV0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG5pbWdzLmZvckVhY2goaSA9PiB7XHJcbiAgICBpZighaS5sb2FkaW5nKSB7XHJcbiAgICAgICAgaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYydcclxuICAgIH1cclxufSkiLCJjbGFzcyBNZW51TmF2IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgbGV0IGNpcmNsZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuMjIgKyAncHgnXHJcblxyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjNlNDtcclxuICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlcl9fbWVudS1iZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJfX21lbnUtYmctLWFjdGl2ZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMzUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQsIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdC0tYWN0aXZlLCAubWVudV9fcmlnaHQtLWFjdGl2ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAgXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQsIFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIC4zMiwgMS4yKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC43cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0IHtcclxuICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICB3aWR0aDogMjIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVmZmZlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDlweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX3RvZ2dsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNzBweCkge1xyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgke2NpcmNsZVdpZHRofSBhdCB0b3AgcmlnaHQpO1xyXG4gICAgICAgICAgICBoZWlndGg6IDEwMCU7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgLmhlYWRlci0tYWN0aXZlIHtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNzMwcHggYXQgY2VudGVyKTtcclxuICAgICAgICAgICAgaGVpZ3RoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlOjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAudG9nZ2xlX193cmFwcGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0ge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgICAgb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQsIFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgLjMyLCAxLjIpOyAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjdzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4xcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19sZWZ0IHtcclxuICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudS1iZ1wiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xlZnRcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0J0u0KLQsNCz0LjQuzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7Qn9Cw0YDQujwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QmtCw0YTQtTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QlNC10L3RjCDRgNC+0LbQtNC10L3QuNGPPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCc0LXRgNC+0L/RgNC40Y/RgtC40Y88L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JDQutGG0LjQuDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QptC10L3RizwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJiYWEyYjQ1ZDdjOWJlZDRhMjc1Zi5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSB0eXBlPVwiYVwiIGNsYXNzPVwibWVudV9fYnRuXCI+0JfQsNC60LDQt9Cw0YLRjCDQv9GA0LDQt9C00L3QuNC6PC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnVfX3RvZ2dsZVwiPtCc0LXQvdGOPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbmF2LWNvbXBvbmVudCcsIE1lbnVOYXYpXHJcblxyXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVfX3dyYXBwZXInKVxyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcbmxldCBtZW51TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19sZWZ0JylcclxubGV0IG1lbnVMZWZ0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpXHJcbmxldCBtZW51UmlndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fcmlnaHQnKVxyXG5sZXQgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RvZ2dsZScpXHJcblxyXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1hY3RpdmUnKVxyXG4gIG1lbnVMZWZ0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2xlZnQtLWFjdGl2ZScpXHJcbiAgbWVudVJpZ3RoLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3JpZ2h0LS1hY3RpdmUnKVxyXG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X190b2dnbGUtLWFjdGl2ZScpXHJcbiAgbWVudUxlZnRMaS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19pdGVtLS1hY3RpdmUnKVxyXG4gIH0pXHJcbn1cclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuIiwiY2xhc3MgTW9kYWwgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIC50YWIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpbnB1dC5pbnZhbGlkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIzNCwgMjM0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX193cmFwcGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkIGxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J1dHRvbnMge1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0NnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0biB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIC5uZXh0LWJ0biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5MGRjO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCAucHJldi1idG4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuLWNsb3NlIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuLWNsb3NlIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA3MztcclxuICAgICAgICB9ICAgICBcclxuICAgICAgICAucGFja2FnZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xNXB4O1xyXG4gICAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHNtYWxsLmludmFsaWQge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODV2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4OHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc21hbGwuaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZm9ybVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cInJlZ0Zvcm1cIiBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPtCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPINC/0YDQsNC30LTQvdC40LrQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlXCIgdHlwZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCk0JjQnjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiPtCc0L7QsdC40LvRjNC90YvQuSDRgtC10LvQtdGE0L7QvTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiKzcgKDk5OSkgMTIzLTQ1LTY3XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxAZW1haWwucnVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvdW50XCI+0JrQvtC70LjRh9C10YHRgtCy0L4g0LTQtdGC0LXQuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvdW50XCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQviDQtNC10YLQtdC5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFja2FnZVwiPtCf0LDQutC10YLQvdC+0LUg0L/RgNC10LTQu9C+0LbQtdC90LjQtTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwYWNrYWdlXCIgbmFtZT1cInBhY2thZ2VcIiBpZD1cInBhY2thZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjYwNlwiPtCR0LDQt9C+0LLRi9C5ICjQtNC+IDEwINGH0LXQuy4pIC0gNDcwMC4wMCBSVUI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjYwOFwiPtCf0YDQtdC80LjRg9C8ICjQtNC+IDEwINGH0LXQuy4pIC0gNzkwMC4wMCBSVUI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFja2FnZV9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAg0JrQstC10YHRgiDRgSAxINCw0L3QuNC80LDRgtC+0YDQvtC8IC0xINGH0LDRgS4g0JDRgNC10L3QtNCwINCx0LDQvdC60LXRgtC90L7QuSDQutC+0LzQvdCw0YLRiyAtMSDRh9Cw0YEuINGD0LrRgNCw0YjQtdC90LjQtSDQsdCw0L3QutC10YLQvdC+0LPQviDRgdGC0L7Qu9CwICjRgdC60LDRgtC10YDRgtGMLCDQv9C+0YHRg9C00LAsINGB0LDQu9GE0LXRgtC60LgpLtCT0LXQu9C40LXQstGL0LUg0YjQsNGA0YstMTDRiNGCLiDQv9GA0LjQs9C70LDRgdC40YLQtdC70YzQvdGL0LUg0LIg0LrQuNC90L4tMTDRiNGCLiDQotC+0YDQttC10YHRgtCy0LXQvdC90YvQuSDQstGL0L3QvtGBINGC0L7RgNGC0LAuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1vZGFsX19idG4gcHJldi1idG5cIj7QndCw0LfQsNC0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1vZGFsX19idG4gbmV4dC1idG5cIj7QlNCw0LvQtdC1PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1tb2RhbC1idG5cIiBjbGFzcz1cIm1vZGFsX19idG4tY2xvc2VcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS13aW5kb3ctY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21vZGFsLWNvbXBvbmVudCcsIE1vZGFsKVxyXG5cclxuLyogT3BlbiBtb2RhbCAqL1xyXG5sZXQgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKVxyXG5cclxubmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufSlcclxuXHJcbi8qIENsb3NlIG1vZGFsIHdpbmRvdyAqL1xyXG5sZXQgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1tb2RhbC1idG4nKVxyXG5sZXQgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3dyYXBwZXInKVxyXG5jbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChldmVudCkge1xyXG4gIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQudGFnTmFtZVxyXG5cclxuICBpZih0YXJnZXQgIT0gJ0JVVFRPTicpIHJldHVyblxyXG4gIFxyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpKSB7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgfVxyXG59KVxyXG5cclxuLyogQ3VycmVudCBkYXRlICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpXHJcblxyXG4vKiBNdWx0aXBsZSBzdGVwcyAqL1xyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpLFxyXG4gIG5leHRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1idG4nKSxcclxuICBwcmV2VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtYnRuJyksXHJcbiAgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cIm5hbWVcIl0nKSxcclxuICBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwicGhvbmVcIl0nKSxcclxuICBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZW1haWxcIl0nKSxcclxuICBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpIFxyXG5cclxubGV0IGN1cnJlbnRUYWIgPSAwXHJcbnRhYnNbY3VycmVudFRhYl0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcblxyXG4vKiBSZW1vdmUgY2xhc3MgaW52YWxpZCBmb2N1c2VkICovXHJcbmZ1bmN0aW9uIHJlbW92ZUludmFsaWQoZWwpIHtcclxuICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSkge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpXHJcbiAgICBlbC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgfVxyXG59XHJcbnVzZXJuYW1lLm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKHVzZXJuYW1lKVxyXG5waG9uZS5vbmZvY3VzID0gKCkgPT4gcmVtb3ZlSW52YWxpZChwaG9uZSlcclxuZW1haWwub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQoZW1haWwpXHJcbmNvdW50Lm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKGNvdW50KVxyXG5cclxubmV4dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB2YWxpZGF0ZUZvcm0oKVxyXG5cclxuICBsZXQgaW52YWxpZE5hbWUgPSB1c2VybmFtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSxcclxuICAgIGludmFsaWRDbGFzcyA9IHRhYnNbY3VycmVudFRhYl0ucXVlcnlTZWxlY3RvcignLmludmFsaWQnKVxyXG5cclxuICAgIGlmKGludmFsaWRDbGFzcykgcmV0dXJuXHJcblxyXG4gIGN1cnJlbnRUYWIrK1xyXG4gIFxyXG4gIGlmKGN1cnJlbnRUYWIgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnRm9ybScpO1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbGV0IHByb2Nlc3NpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9jZXNzaW5nLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdwcm9jZXNzaW5nIC4uLicpKTtcclxuICAgIGZvcm0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvY2Vzc2luZywgZm9ybSk7XHJcblxyXG4gICAgcmVkaXJlY3RNYWluUGFnZSgpXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIEFycmF5LmZyb20odGFicykuZmluZChzaG93VGFiKVxyXG4gIHNob3dCdG4oKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2hvd1RhYihlbCwgaWR4KSB7XHJcbiAgaWYoaWR4ID09PSBjdXJyZW50VGFiKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QnRuKCkge1xyXG4gIGlmKGN1cnJlbnRUYWIgPj0gdGFicy5sZW5ndGggLSAxKSB7XHJcbiAgICBuZXh0VGFiLmlubmVySFRNTCA9ICfQntGC0L/RgNCw0LLQuNGC0YwnXHJcbiAgfSBlbHNlIHtcclxuICAgIG5leHRUYWIuaW5uZXJIVE1MID0gJ9CU0LDQu9C10LUnXHJcbiAgfVxyXG5cclxuICBjdXJyZW50VGFiID4gMFxyXG4gICAgPyBwcmV2VGFiLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xyXG4gICAgOiBwcmV2VGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufVxyXG5cclxucHJldlRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJyZW50VGFiLS1cclxuICBpZihjdXJyZW50VGFiIDwgMCkge1xyXG4gICAgY3VycmVudFRhYiA9IDBcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBBcnJheS5mcm9tKHRhYnMpLmZpbmQoc2hvd1RhYilcclxuICBzaG93QnRuKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIHJlZGlyZWN0TWFpblBhZ2UoKSB7XHJcbiAgbGV0IHRpbWVyID0gMTFcclxuICBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgIHRpbWVyLS1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9ybScpLmlubmVySFRNTCA9IHRpbWVyXHJcbiAgICBpZih0aW1lciA9PT0gMSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9tZWdhbGFuZHBhcmsud2ViLmFwcC9cIiBcclxuICAgIH1cclxuICB9LCAxMDAwKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gIGxldCB0YWIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpLFxyXG4gICAgY3VycmVudFRhYnMgPSB0YWJbY3VycmVudFRhYl0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVxyXG4gICAgdmFsaWQgPSB0cnVlXHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lVmFsdWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICBwaG9uZVZhbHVlID0gcGhvbmUudmFsdWUudHJpbSgpLFxyXG4gICAgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKSxcclxuICAgIGNvdW50VmFsdWUgPSBjb3VudC52YWx1ZS50cmltKCksXHJcbiAgICBjb250YWluc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cIm51bWJlclwiXScpXHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50VGFicy5sZW5ndGg7IGkrKykge1xyXG4gIGlmKHVzZXJuYW1lVmFsdWUgPT09ICcnKSB7XHJcbiAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCLQktCy0LXQtNC40YLQtSDQpNCY0J5cIilcclxuICB9IGVsc2UgaWYodXNlcm5hbWVWYWx1ZS5sZW5ndGggPD0gMikge1xyXG4gICAgc2V0RXJyb3JGb3IodXNlcm5hbWUsIFwi0KHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60L7QtSDQpNCY0J5cIilcclxuICB9IGVsc2UgaWYoIXZhbGlkYXRlTG5hZyh1c2VybmFtZVZhbHVlKSkge1xyXG4gICAgc2V0RXJyb3JGb3IodXNlcm5hbWUsIFwi0JLQstC10LTQuNGC0LUg0YDRg9GB0YHQutC40LUg0LHRg9C60LLRi1wiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRTdWNjZXNzRm9yKHVzZXJuYW1lKVxyXG4gIH1cclxuXHJcbiAgaWYocGhvbmVWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKHBob25lLCBcItCS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiKVxyXG4gIH0gZWxzZSBpZihwaG9uZVZhbHVlLmxlbmd0aCA8IDE4KSB7XHJcbiAgICBzZXRFcnJvckZvcihwaG9uZSwgXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0YHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60LjQuVwiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRTdWNjZXNzRm9yKHBob25lKVxyXG4gIH1cclxuXHJcbiAgaWYoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKGVtYWlsLCBcItCS0LLQtdC00LjRgtC1IGVtYWlsXCIpXHJcbiAgfSBlbHNlIGlmKCF2YWxpZGF0ZUVtYWlsKGVtYWlsVmFsdWUpKSB7XHJcbiAgICBzZXRFcnJvckZvcihlbWFpbCwgXCLQktCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbFwiKVxyXG4gIH1cclxuXHJcbiAgaWYoY291bnRWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKGNvdW50LCBcItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC00LXRgtC10LlcIiApXHJcbiAgfVxyXG4gIH1cclxuXHJcblx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlTG5hZyh1c2VybmFtZSkge1xyXG4gIHJldHVybiAoL15b0LAt0Y/QkC3Qr10vKS50ZXN0KHVzZXJuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cclxuICByZXR1cm4gcmUudGVzdChlbWFpbClcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3Qgc21hbGwgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpXHJcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ2ludmFsaWQnXHJcblxyXG4gIGlmKGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKSB7XHJcbiAgICBzbWFsbC5jbGFzc05hbWUgPSAnaW52YWxpZCdcclxuICAgIHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2VcclxuICAgIHNtYWxsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuICBpbnB1dC5jbGFzc05hbWUgPSAnc3VjY2VzcydcclxuICBjb25zdCBzbWFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzbWFsbCcpXHJcbiAgc21hbGxzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtaW5NYXhDb3VuKG51bSkge1xyXG4gIGlmKG51bSA+IDMwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZicpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBBZGQgcGhvbmUgbWFzayArNyg5OTkpMTIzLTQ1LTY3ICovXHJcbnBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmKCAhKGV2ZW50LmtleSA9PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT0gJ0Fycm93UmlnaHQnIHx8IGV2ZW50LmtleSA9PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT0gJ1RhYicpKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxyXG4gICB2YXIgbWFzayA9ICcrNyAoMTExKSAxMTEtMTEtMTEnOyAvLyDQl9Cw0LTQsNC10Lwg0LzQsNGB0LrRg1xyXG5cclxuICAgaWYgKC9bMC05XFwrXFwgXFwtXFwoXFwpXS8udGVzdChldmVudC5rZXkpKSB7XHJcbiAgICAgICAvLyDQl9C00LXRgdGMINC90LDRh9C40L3QsNC10Lwg0YHRgNCw0LLQvdC40LLQsNGC0YwgdGhpcy52YWx1ZSDQuCBtYXNrXHJcbiAgICAgICAvLyDQuiDQv9GA0LjQvNC10YDRgyDQvtC/0Y/RgtGMINC20LVcclxuICAgICAgIHZhciBjdXJyZW50U3RyaW5nID0gdGhpcy52YWx1ZTtcclxuICAgICAgIHZhciBjdXJyZW50TGVuZ3RoID0gY3VycmVudFN0cmluZy5sZW5ndGg7XHJcbiAgICAgICBpZiAoL1swLTldLy50ZXN0KGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICBpZiAobWFza1tjdXJyZW50TGVuZ3RoXSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRTdHJpbmcgKyBldmVudC5rZXk7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgZm9yICh2YXIgaT1jdXJyZW50TGVuZ3RoOyBpPG1hc2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZiAobWFza1tpXSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRTdHJpbmcgKyBldmVudC5rZXk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IG1hc2tbaV07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH0gXHJcbn0pO1xyXG4iLCIvKiBTaG93IGl0ZW0gYnRuICovXHJcbmxldCBzaG93QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctYnRuJylcclxubGV0IGNhcmRIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fd3JhcHBlcicpXHJcblxyXG5mdW5jdGlvbiBzaG93SXRlbSgpIHtcclxuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICBjYXJkSGlkZGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmQtLWhpZGRlbicpXHJcbn1cclxuXHJcbnNob3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SXRlbSlcclxuXHJcbi8vIC8qIEN1cnJlbnQgZGF0ZSAqL1xyXG4vLyBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuLy8gbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XHJcblxyXG4vLyBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuLy8gICBsZXQgZGQgPSBkYXRlLmdldERhdGUoKVxyXG4vLyAgIGlmIChkZCA8IDEwKSBkZCA9ICcwJyArIGRkXHJcblxyXG4vLyAgIGxldCBNTSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuLy8gICBpZiAoTU0gPCAxMCkgTU0gPSAnMCcgKyBNTVxyXG5cclxuLy8gICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4vLyAgIGlmICh5eXl5IDwgMTApIHl5eXkgPSAnMCcgKyB5eXl5XHJcblxyXG4vLyAgIHJldHVybiB5eXl5ICsgJy0nICsgTU0gKyAnLScgKyBkZFxyXG4vLyB9XHJcblxyXG4vLyBsZXQgY3VycmVudERhdGUgPSBmb3JtYXREYXRlKGRhdGUpXHJcbi8vIGRhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlXHJcblxyXG5pbXBvcnQgJy4vb3JkZXIuY3NzJ1xyXG5cclxuLyogT3BlbiBtb2RhbCAqL1xyXG5sZXQgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcnNfX2xpc3QnKVxyXG5sZXQgcGhvbmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lJylcclxubGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcclxubGV0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX193cmFwcGVyJylcclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoZXZlbnQpIHtcclxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWVcclxuXHJcbiAgaWYodGFyZ2V0ICE9ICdCVVRUT04nKSByZXR1cm5cclxuICBcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcblxyXG5vZmZlcnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG5uYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufSlcclxuXHJcbnBob25lU2VjdGlvbi5mb3JFYWNoKGVsID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxufSkiLCJpbXBvcnQgJy4vc2hvd0Z1bGxMaW5rLmNzcydcclxuXHJcbmxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJylcclxuXHJcbmxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFuaW1hdGlvbkVsZW1lbnQpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25FbGVtZW50KGV2KSB7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gIFxyXG4gIHRoaXMuc3R5bGUubWFyZ2luTGVmdCA9ICcwcHgnXHJcbiAgdGhpcy5zdHlsZS5tYXJnaW5SaWdodCA9ICcwcHgnXHJcblxyXG4gIGNvbnN0IEFOSU1BVElPTl9TUEVFRCA9ICcuNHMnXHJcblxyXG4gIGxldCBlbGVtV2lkdGggPSB0aGlzLm9mZnNldFdpZHRoLzIsXHJcbiAgICBlbGVtSGVpZ2h0ID0gdGhpcy5vZmZzZXRIZWlnaHQvMiwgICAgICBcclxuICAgIG1vdmluZ0VsZW1YID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLzIgLSAodGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgZWxlbVdpZHRoKSxcclxuICAgIG1vdmluZ0VsZW1ZID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodC8yIC0gKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZWxlbUhlaWdodCksXHJcbiAgICBzY2FsZVggPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLzIpIC8gKGVsZW1XaWR0aCksXHJcbiAgICBzY2FsZVkgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodC8yKSAvIChlbGVtSGVpZ2h0KSxcclxuICAgIGl0ZW1QYXRoID0gdGhpcy5jaGlsZE5vZGVzWzFdLmdldEF0dHJpYnV0ZShcImhyZWZcIilcclxuXHJcblxyXG4gIC8qQ3JlYXRlIHdyYXBwZXIgb24gZWxlbWVudCovXHJcbiAgbGV0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcclxuICB3cmFwLmNsYXNzTmFtZSA9ICdzdGFydCdcclxuICB0aGlzLmJlZm9yZSh3cmFwKSAgICAgXHJcbiAgXHJcbiAgLy8gQ3JlYXRlIGJnXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBsZXQgYmFja2dyb3VuZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYmFja2dyb3VuZFdyYXAuY2xhc3NOYW1lID0gJ2VtcHR5JyAgICAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFja2dyb3VuZFdyYXApXHJcbiAgICBiYWNrZ3JvdW5kV3JhcC5jbGFzc05hbWUgKz0gJyBmaWx0ZXInXHJcblxyXG4gICAgLypDZW50ZXIgZWxlbWVudCovXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgICAgICAgICAgXHJcbiAgICAgIHdyYXAuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gQU5JTUFUSU9OX1NQRUVEXHJcbiAgICAgIHdyYXAuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2xlZnQsIHRvcCdcclxuICAgICAgd3JhcC5zdHlsZS53aWR0aCA9IHRoaXMuY2xpZW50V2lkdGggKyAncHgnXHJcbiAgICAgIC8vIHdyYXAuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jbGllbnRIZWlnaHQgKyAncHgnXHJcbiAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgICAgIHdyYXAuYXBwZW5kKHRoaXMpXHJcbiAgICAgIHdyYXAuc3R5bGUubGVmdCA9IG1vdmluZ0VsZW1YICsgJ3B4J1xyXG4gICAgICB3cmFwLnN0eWxlLnRvcCA9IG1vdmluZ0VsZW1ZICsgJ3B4J1xyXG4gICAgICBcclxuICAgICAgLypJbmNyZWFzZSBlbGVtZW50Ki9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBBTklNQVRJT05fU1BFRURcclxuICAgICAgICB0aGlzLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXHJcbiAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZVh9LCAke3NjYWxlWX0pYFxyXG5cclxuICAgICAgICAvLyByZWRpcmVjdCB0byBpdGVtXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBpdGVtUGF0aFxyXG4gICAgICAgIH0sIDQ1MClcclxuICAgICAgfSwgMTAwKSAgICAgIFxyXG4gICAgfSwgMClcclxuICB9LCAwKSAgXHJcblxyXG4gIC8vIEVsZW1lbnQgYm9yZGVyIG5vbmUgIFxyXG4gIC8vIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXJhZGl1cycpIFxyXG4gIC8vIHRoaXMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzNzJ1xyXG4gIC8vIHRoaXMuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2JvcmRlclJhZGl1cydcclxuICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcwcHgnXHJcbn0gIFxyXG5cclxuICAgIFxyXG4gICIsImNsYXNzIFNsaWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJhZ3N0YXJ0IGEgeyBcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpZGVyLXdpbmRvdy13aWR0aCB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGlzdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXM7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1pdGVtIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWl0ZW0gaW1nIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNlMGRmZGU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMyksMCAycHggNnB4IDJweCByZ2JhKDYwLDY0LDY3LDAuMTUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5kcmFnc3RhcnQge1xyXG4gICAgICAgIC8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JhYmJpbmcge1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpc3QuZ3JhYmJpbmcgaW1nIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAuZHJhZ3N0YXJ0IGEge1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAuYXR0cmFjdGlvbnMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdHRyYWN0aW9ucy1oZWFkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdHRyYWN0aW9uc19fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItd2luZG93LXdpZHRoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cImF0dHJhY3Rpb25zLWxpc3RcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjZiYjU5MWVkZTA4ZWUyMmU5MzI4LmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QkdCw0YLRg9GCPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIzYjFiNTYwNGZhZjc4Y2IzODE4ZS5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0K3QutGB0YLRgNC40Lwt0L/QsNGA0Lo8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImI4YzYxMzM3NTBmMmI1MzY2OGJhLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QlNC10YLRgdC60LjQuSDRgdCw0LQ8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjgyOTM2OWViNWFmZjU4NTRhNjBkLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7Qm9Cw0LHQuNGA0LjQvdGCPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIzOTlmMzZlYjQ5ZjliMTFlMjczNi5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JjQs9GA0L7QstGL0LUg0LDQstGC0L7QvNCw0YLRizwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbGlkZXItY29tcG9uZW50JywgU2xpZGVyKVxyXG5cclxuY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dHJhY3Rpb25zLWxpc3QnKSxcclxuc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udGFpbmVyJyksXHJcbiAgc2xpZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0cmFjdGlvbnMtaXRlbScpKVxyXG5cclxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICBzbGlkZXJXcmFwcGVyLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjkgKyBcInB4XCJcclxufSBlbHNlIHtcclxuICBzbGlkZXJXcmFwcGVyLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjUgKyBcInB4XCJcclxufVxyXG5cclxubGV0IGN1cnJlbnRJbmRleCA9IDBcclxubGV0IHN0YXJ0UG9zaXRpb24gPSAwXHJcbmxldCBjdXJyZW50VHJhbnNsYXRlID0gMFxyXG5sZXQgcHJldlRyYW5zbGF0ZSA9IDBcclxubGV0IGlzRHJhZ2dpbmcgPSBmYWxzZVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cclxufSwgZmFsc2UpO1xyXG5cclxuc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmRleCkgPT4ge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjkgKyBcInB4XCJcclxuICAgIHNsaWRlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjUgKyAncHgnXHJcbiAgfSBlbHNlIHtcclxuICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuNSArIFwicHhcIlxyXG4gICAgc2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuMyArICdweCdcclxuICB9XHJcbiAgc2xpZGUuc3R5bGUubWFyZ2luUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4xICsgJ3B4J1xyXG4gIHNsaWRlckltZyA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXHJcblxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSlcclxuICBcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQoaW5kZXgpKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpXHJcblxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b3VjaFN0YXJ0KGluZGV4KSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRvdWNoRW5kKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0b3VjaE1vdmUpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0b3VjaEVuZClcclxufSlcclxuXHJcbnNsaWRlckNvbnRhaW5lci5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoU3RhcnQoaW5kZXgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oZSkge1xyXG4gICAgY3VycmVudEluZGV4ID0gaW5kZXhcclxuICAgIHN0YXJ0UG9zaXRpb24gPSBnZXRQb3NpdGlvblgoZSlcclxuICAgIGlzRHJhZ2dpbmcgPSB0cnVlXHJcbiAgICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JhYmJpbmcnKVxyXG4gICAgY2xlYXJJbnRlcnZhbChpbmZpbml0eVNsaWRlcilcclxuICB9IFxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xyXG4gIGlmKGlzRHJhZ2dpbmcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGdldFBvc2l0aW9uWChlKVxyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IHByZXZUcmFuc2xhdGUgKyBjdXJyZW50UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uXHJcbiAgICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50VHJhbnNsYXRlfXB4KWBcclxuICAgICAgXHJcbiAgICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIC4wMDFzXCJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoRW5kKGUpIHsgXHJcbiAgaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgY29uc3QgbW92ZWRCeSA9IGN1cnJlbnRUcmFuc2xhdGUgLSBwcmV2VHJhbnNsYXRlXHJcblxyXG4gIGlmKG1vdmVkQnkgPiAxMDAgJiYgY3VycmVudEluZGV4ID4gMCkgY3VycmVudEluZGV4IC09IDFcclxuICBpZihtb3ZlZEJ5IDwgLTEwMCAmJiBjdXJyZW50SW5kZXggPCBzbGlkZXMubGVuZ3RoIC0gMSkgY3VycmVudEluZGV4ICs9IDFcclxuXHJcblxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogLXdpbmRvdy5pbm5lcldpZHRoXHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAoLXdpbmRvdy5pbm5lcldpZHRoICogLjUgLSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4xKVxyXG4gIH1cclxuXHJcbiAgcHJldlRyYW5zbGF0ZSA9IGN1cnJlbnRUcmFuc2xhdGVcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50VHJhbnNsYXRlfXB4KWBcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDEuMjVzXCJcclxuICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYmJpbmcnKVxyXG4gIGlmKG1vdmVkQnkgIT0gMCkge1xyXG4gICAgbGV0IGNhcHR1cmVDbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcHR1cmVDbGljaywgdHJ1ZSk7IC8vIGNsZWFudXBcclxuICAgIH1cclxuICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXB0dXJlQ2xpY2ssIHRydWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvc2l0aW9uWChlKSB7XHJcbiAgcmV0dXJuIGUudHlwZS5pbmNsdWRlcygnbW91c2UnKSA/IGUucGFnZVggOiBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG59XHJcblxyXG5jb25zdCBpbmZpbml0eVNsaWRlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICBjdXJyZW50SW5kZXgrKyAgXHJcbiAgaWYoY3VycmVudEluZGV4ID4gNCkgY3VycmVudFRyYW5zbGF0ZSA9IDAsIGN1cnJlbnRJbmRleCA9IDBcclxuXHJcbiAgbWVkaWFRdWVyaWVzVHJhbnNsYXRlKClcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50VHJhbnNsYXRlfXB4KWBcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDEuMjVzXCJcclxufSwgMjUwMClcclxuXHJcbmZ1bmN0aW9uIG1lZGlhUXVlcmllc1RyYW5zbGF0ZSgpIHtcclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuOSAtIHBhcnNlSW50KHNsaWRlc1swXS5zdHlsZS5tYXJnaW5SaWdodCkpXHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAoLXdpbmRvdy5pbm5lcldpZHRoICogLjUgLSBwYXJzZUludChzbGlkZXNbMF0uc3R5bGUubWFyZ2luUmlnaHQpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNjcmlwdChzcmMpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgcztcclxuICAgICAgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzLnNyYyA9IHNyYztcclxuICAgICAgcy5vbmxvYWQgPSByZXNvbHZlO1xyXG4gICAgICBzLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XHJcbiAgfSk7XHJcbn0iLCIgIGZ1bmN0aW9uIGxvYWRNYXBzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvc2VydmljZXMvY29uc3RydWN0b3IvMS4wL2pzLz91bT1jb25zdHJ1Y3RvciUzQTM5YjE5ZGY5NzFiN2JmYWFhZmU4MWY0ZDEwMjk1NDc5OWE2YmNhODNkMWE1ZWU1ZjIxMTU0NDM3MjM2MDE2ZTYmYW1wO3dpZHRoPWF1dG8mYW1wO2hlaWdodD00NjAmYW1wO2xhbmc9cnVfUlUmYW1wO3NyY29sbD10cnVlXCI7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGl2TWFwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1tYXAnKVxyXG4gICAgICAgIGRpdk1hcHMuYXBwZW5kKHNjcmlwdClcclxuICAgIH0sIDEwMDApO1xyXG4gIH0gIFxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRNYXBzKCkpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbS1oZWFkZXJfanNcIjpcImUyZTJhYTU2MTNmM2M5NjcyYThjXCIsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfY3NzXCI6XCIwYzQzYzJlZDFjN2RiOWVmYjc4M1wifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImNvZGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG52YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLm1pbmlDc3MgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0dmFyIGNzc0NodW5rcyA9IHtcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtLWhlYWRlcl9qc1wiOjEsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfY3NzXCI6MX07XG5cdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuXHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IGxvYWRTdHlsZXNoZWV0KGNodW5rSWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXTtcblx0XHRcdHRocm93IGU7XG5cdFx0fSkpO1xuXHR9XG59O1xuXG4vLyBubyBobXIiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29kZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLyogUGF0aCBjc3MvanMgdG8gaXRlbXMgKi9cclxuY29uc3QgcGF0SG9tZSA9ICgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICByZXF1aXJlKCcuL3N0eWxlLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi9hbmltYXRpb24vYW5pbWF0aW9uLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi9mb290ZXIuanMnKSBcclxuICAgIHJlcXVpcmUoJy4vbWVudS1uYXYnKSBcclxuICAgIHJlcXVpcmUoJy4vbW9kYWwtd2luZG93LmpzJykgXHJcbiAgICByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKSBcclxuICAgIHJlcXVpcmUoJy4vdG91Y2gtc2xpZGVyLmpzJykgXHJcbiAgICByZXF1aXJlKCcuL3lhLW1hcHMuanMnKSBcclxuICAgIHJlcXVpcmUoJy4vYW5pbWF0aW9uLy9hbmltYXRpb24nKVxyXG4gICAgcmVxdWlyZSgnLi9zaG93RnVsbExpbmsvc2hvd0xpbmtGdWxsJylcclxuICAgIHJlcXVpcmUoJy4vbGF6eUxvYWRJbWcnKVxyXG4gIH1cclxuICByZXR1cm5cclxufVxyXG5wYXRIb21lKClcclxuXHJcbmNvbnN0IHBhdGhPcmRlciA9ICgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL29yZGVyLmh0bWxcIikge1xyXG4gICAgcmVxdWlyZSgnLi9vcmRlci5jc3MnKVxyXG4gICAgcmVxdWlyZSgnLi9tZW51LW5hdicpXHJcbiAgICByZXF1aXJlKCcuL2Zvb3Rlci5qcycpXHJcbiAgICByZXF1aXJlKCcuL21vZGFsLXdpbmRvdy5qcycpXHJcbiAgICByZXF1aXJlKCcuL29yZGVyLmpzJylcclxuICB9XHJcbn0gXHJcbnBhdGhPcmRlcigpXHJcblxyXG5jb25zdCBwYXRoSXRlbXMgPSAocGF0aCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gcGF0aCkge1xyXG4gICAgaW1wb3J0KCcuL2l0ZW0taGVhZGVyLmpzJylcclxuICAgIGltcG9ydCgnLi9pdGVtcy5jc3MnKVxyXG4gIH1cclxufVxyXG5wYXRoSXRlbXMoXCIvYmV6bGltaXQtdi1tZWdhbGVuZGUuaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvb3RtZXQtZGVuLXJvemhkZW5peWEtdi1raW5vLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL3ZpcHVza25vaS12LW1lZ2FsZW5kZS5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9tZWdhbGVuZC1wb2xub3N0eXUtb3Rrcml0Lmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL3BpdHN0c2Etdi1wb2Rhcm9rLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL2JvbnVzbmF5YS1zaXN0ZW1hLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL2lncm92aWUtYXZ0b21hdGktb3Rrcml0aS5odG1sXCIpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=