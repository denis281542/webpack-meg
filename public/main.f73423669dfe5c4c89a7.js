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

/***/ "./src/assets/images/item1-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item1-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "afed8d59c1a59b4d024b.webp";

/***/ }),

/***/ "./src/assets/images/item2-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item2-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e1f2755f81b1063b80ce.webp";

/***/ }),

/***/ "./src/assets/images/item3-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item3-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5cc2dd16cffdc09453bf.webp";

/***/ }),

/***/ "./src/assets/images/item4-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item4-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31bc7b641204e8248b43.webp";

/***/ }),

/***/ "./src/assets/images/item5-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item5-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b90bd10da9b8e2a9ac0f.webp";

/***/ }),

/***/ "./src/assets/images/item6-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item6-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0912f511ae524245ece6.webp";

/***/ }),

/***/ "./src/assets/images/item7-1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/item7-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "256a2bf94132698cd1d0.webp";

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

/***/ "./src/assets/scripts/local/items/img.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/local/items/img.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imgItem1": () => (/* reexport default export from named module */ _src_assets_images_item1_1_webp__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "imgItem2": () => (/* reexport default export from named module */ _src_assets_images_item2_1_webp__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "imgItem3": () => (/* reexport default export from named module */ _src_assets_images_item3_1_webp__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "imgItem4": () => (/* reexport default export from named module */ _src_assets_images_item4_1_webp__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "imgItem5": () => (/* reexport default export from named module */ _src_assets_images_item5_1_webp__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "imgItem6": () => (/* reexport default export from named module */ _src_assets_images_item6_1_webp__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "imgItem7": () => (/* reexport default export from named module */ _src_assets_images_item7_1_webp__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _src_assets_images_item1_1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/images/item1-1.webp */ "./src/assets/images/item1-1.webp");
/* harmony import */ var _src_assets_images_item2_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/assets/images/item2-1.webp */ "./src/assets/images/item2-1.webp");
/* harmony import */ var _src_assets_images_item3_1_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/images/item3-1.webp */ "./src/assets/images/item3-1.webp");
/* harmony import */ var _src_assets_images_item4_1_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/images/item4-1.webp */ "./src/assets/images/item4-1.webp");
/* harmony import */ var _src_assets_images_item5_1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/images/item5-1.webp */ "./src/assets/images/item5-1.webp");
/* harmony import */ var _src_assets_images_item6_1_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/assets/images/item6-1.webp */ "./src/assets/images/item6-1.webp");
/* harmony import */ var _src_assets_images_item7_1_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/assets/images/item7-1.webp */ "./src/assets/images/item7-1.webp");










/***/ }),

/***/ "./src/assets/scripts/local/items/item-header.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/local/items/item-header.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
// import '../items/items.css'

// class HeaderItem extends HTMLElement {
//   constructor() {
//     super()
//   }

//   connectedCallback() {
//     this.innerHTML = `
//       <style>
//         .header {
//           padding: 18px 20px;
//           background-color: rgba(250, 250, 250, 0.9);
//           position: relative;
//           max-width: 100vw;
//           width: 100%;
//           border-bottom: 1px solid rgba(0, 0, 0, 0.2);
//           position: fixed;
//           backdrop-filter: saturate(173%) blur(10px);
//         }      
//         .nav {
//           text-align: center;
//         }
//         .nav a {
//           text-decoration: none;
//         }
//         .nav__btn-back {
//           font-size: 0;
//           padding: 20px;
//           position: absolute;
//           top: 0;
//           left: 0;
//         }
//         .nav__btn-back i {
//           font-size: 20px;
//           color: #333;
//         }
//         .nav__news {
//           font-size: 12px;
//           font-weight: 600;
//           color: #333;
//         }
//         @media (max-width: 640px) {
//           .nav {
//             height: auto;
//           }
//           .item {
//             padding: 75px 20px;
//           }
//         }
//       </style>
//       <header class="header">
//         <nav class="nav">
//             <a class="nav__btn-back">
//                 <i class="fas fa-chevron-left"></i>
//                 Назад
//             </a>
//             <a class="nav__news">
//                 Мегаленд Тагил - Новости
//             </a>
//         </nav>
//       </header>
//     `
//   }
// }

// customElements.define('item-header-component', HeaderItem)

// 


const headerHTML = `
  <header class="header-item">
    <nav class="nav">
      <a class="nav__btn-back">
        <i class="fas fa-chevron-left"></i>
        Назад
      </a>
      <a class="nav__news">
        Мегаленд Тагил - Новости
      </a>
    </nav>
  </header>
`

let header = document.createElement('div')
header.innerHTML = headerHTML
// const btnBack = document.querySelector('.nav__btn-back')

// btnBack.addEventListener('click', () => {
//   window.location.pathname = '/'
// })



/***/ }),

/***/ "./src/assets/scripts/local/items/item.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/local/items/item.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items),
/* harmony export */   "renderItem": () => (/* binding */ renderItem),
/* harmony export */   "renderLi": () => (/* binding */ renderLi)
/* harmony export */ });
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img */ "./src/assets/scripts/local/items/img.js");


const listItems1 = [
  {id: 1, li: 'Батут Надувная Горка'},
  {id: 2, li: 'Батутный парк'},
  {id: 3, li: 'Лабиринт'},
  {id: 4, li: 'Детский сад'},
  {id: 5, li: 'Экстрим парк'}
]

const listItems2 = [
  {id: 1, li: 'просмотр фильма'},
  {id: 2, li: 'попкорн и напиток каждому ребёнку'},
  {id: 3, li: 'посещение аттракционов'},
  {id: 4, li: 'Детский сад'},
  {id: 5, li: '1000 бонусов на игровую карту имениннику'}
]

const listItems3 = [
  {id: 1, li: 'Игровая площадка на выбор, 2шт. по 40 мин., 200 руб.'},
  {id: 2, li: 'Игровая карта на выбор 1+1 (250 руб. или 300 руб.)'},
  {id: 3, li: 'Комбо (попкорн + напиток), 190 руб.'},
  {id: 4, li: 'Просмотр кино, 120 руб.'},
  {id: 5, li: 'Ланч, 190 руб.'}
]

const items = [
	{id: 1, title: 'Безлимит в Мегалэнде', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem1, li: listItems1, description: 'За 590 руб. в будни можно играть сколько хочешь на любых площадках.', datetime: "2021-04-15 11:00"},
	{id: 2, title: 'Отметь день рождения в кино!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem2, li: listItems2, description: "Отличная новость для тех, кто готовится отметить день рождения ребёнка! Мягкий кинотеатр DEPO и семейный парк развлечений «Мегалэнд» представляют новую программу «День рождения в кино».", datetime: "05.03.2021 16:35"},
	{id: 3, title: 'Выпускной в Мегаленде!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem3, li: listItems2, description: "В семейном парке развлечений «Мегалэнд» специально для вас пройдут выпускные. Составь свою программу сам из нашего конструктора выпускного:", datetime: "09.02.2021 11:50"},
	{id: 4, title: 'Мегаленд полностью открыт!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem4, description: "Друзья, наш парк возобновил работу! Играть в Мегалэнд можно в 2 раза больше за те же деньги! Просто пополните игровую карту на 700, 1000, 2000 или 3000 рублей, а мы их удвоим!", datetime: "18.09.2020 11:26"},
	{id: 5, title: 'Пицца в подарок', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem5, description: "С понедельника по пятницу сделайте заказ на сумму от 500 руб. в пиццерии 'Пицца! Пицца!' и получите пиццу на выбор в подарок! Акция действует на следующие виды пицц: Карбонара, Мясная, Маргарита. В акции имеются ограничения. Подробности у менеджера заведения.", datetime: "17.09.2020 17:52"},
	{id: 6, title: 'Игровые автоматы открыты!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem6, description: "Мы запускаем работу игровых автоматов. Играть в Мегалэнд можно в 2 раза больше за те же деньги! Просто пополните игровую карту на 700, 1000, 2000 или 3000 рублей, а мы их удвоим.", datetime: "20.08.2020 11:00"},
	{id: 7, title: 'Бонусная система', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem7, description: "При пополнении игровой карты «Мегалэнд» от 700 рублей Вам на карту будут начислены бонусные баллы. 1 бонус = 1 рублю. Количество бонусных баллов зависит от суммы пополнения и варьируется от 700 до 3000 бонусов. При внесении суммы, находящейся между пороговыми значениями, начисляется количество бонусов, соответствующее нижней пороговой сумме. Подробнее о бонусной программе и размерах начислений можно узнать на кассе семейного парка развлечений «Мегалэнд».", datetime: "20.08.2020 10:59"},  
]
  
const toHTML = item => `
	<div class="item__wrapper">
		<div class="item">
			<img src="${item.img}" alt="${item.title}" width="460" height="460">
			<div class="item__description">
					<h1 class="item__title">${item.title}</h1>
					<p>
						${item.description || ''}
					</p>
					<p>В акции участвуют:</p>
					<ul>
							${item.li || ''}
					</ul>
					<small>
							*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.
					</small>
					<br>    
					<a href="tel:83435379797">тел. : 37-97-97</a>
					<br>
					<small class="item__date">
							<time datetime="2021-04-15 11:00">
									15.04.2021 11:10
							</time>
					</small>
			</div>
		</div>
	</div>
`

function renderItem(el, item) {
  el.innerHTML = toHTML(item) 
}

const toHTMLLi = (li) => `
  <li>
    <i class="fas fa-check"></i>
    ${li}
  </li>
`

function renderLi(list) {
  const html = list.map(l => toHTMLLi(l.li)).join('')
  document.querySelector('.item__description ul').innerHTML = html
}



/***/ }),

/***/ "./src/assets/scripts/local/items/items.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/local/items/items.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img */ "./src/assets/scripts/local/items/img.js");


const items = [
  {id: 1, title: 'Безлимит в Мегалэнде', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem1, datetime: "2021-04-15 11:00"},
  {id: 2, title: 'Отметь день рождения в кино!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem2, datetime: "05.03.2021 16:35"},
  {id: 3, title: 'Выпускной в Мегаленде!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem3, datetime: "09.02.2021 11:50"},
  {id: 4, title: 'Мегаленд полностью открыт!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem4, datetime: "18.09.2020 11:26"},
  {id: 5, title: 'Пицца в подарок', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem5, datetime: "17.09.2020 17:52"},
  {id: 6, title: 'Игровые автоматы открыты!', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem6, datetime: "20.08.2020 11:00"},
  {id: 7, title: 'Бонусная система', img: _img__WEBPACK_IMPORTED_MODULE_0__.imgItem7, datetime: "20.08.2020 10:59"},  
]

const toHTML = item => `
  <li class="item" data-id="${item.id}" data-btn="button-item">
    <button class="item-link">
      <img class="item-img" src="${item.img}" alt="${item.title}" loading="lazy">
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
/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/item */ "./src/assets/scripts/local/items/item.js");
/* harmony import */ var _items_item_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/item-header */ "./src/assets/scripts/local/items/item-header.js");




let links = document.querySelectorAll('.item')

links.forEach(link => {
  link.addEventListener('click', animationElement)
  link.addEventListener('click', showItem)
})



function showItem(event) {
  const id = +event.currentTarget.dataset.id,
    item = _items_item__WEBPACK_IMPORTED_MODULE_1__.items.find(i => i.id === id),
    list = item.li

  __webpack_require__.e(/*! import() */ "src_assets_scripts_local_items_item-win_css").then(__webpack_require__.bind(__webpack_require__, /*! ../items/item-win.css */ "./src/assets/scripts/local/items/item-win.css"))
  ;(0,_items_item__WEBPACK_IMPORTED_MODULE_1__.renderItem)(this, item)
  
  // Paste header in item
  __webpack_require__.e(/*! import() */ "src_assets_scripts_local_items_header-item_css").then(__webpack_require__.bind(__webpack_require__, /*! ../items/header-item.css */ "./src/assets/scripts/local/items/header-item.css"))
  document.querySelector('.item__wrapper').before(_items_item_header__WEBPACK_IMPORTED_MODULE_2__.header)

  // Add btn back in item-header
  const btnBack = document.querySelector('.nav__btn-back')
  btnBack.addEventListener('click', () => {
    window.location.pathname = '/'
  })
  
  // Return if list item empty
  if(list === undefined) {
    return
  } else (0,_items_item__WEBPACK_IMPORTED_MODULE_1__.renderLi)(list)
}

function animationElement() { 
  this.style.marginLeft = '0px'
  this.style.marginRight = '0px'

  const ANIMATION_SPEED = '.65s'

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
    createBg()

    setTimeout(() => {    
      centerElement(wrap, this, movingElemX, movingElemY, ANIMATION_SPEED)
      
      setTimeout(() => {        
        createClone(this, scaleX, scaleY, ANIMATION_SPEED)
        
        // setTimeout(() => {
        //   showItem(this)
        // }, 1000);
      }, 100)      
    }, 0)
  }, 0)  

  this.style.borderRadius = '0px'
} 

function createBg() {
  let backgroundWrap = document.createElement('div')
  backgroundWrap.className = 'empty'      
  document.body.append(backgroundWrap)
  backgroundWrap.className += ' filter'
}

function centerElement(wrap, el, movingElemX, movingElemY, ANIMATION_SPEED) {
  wrap.style.transitionDuration = ANIMATION_SPEED
  wrap.style.transitionProperty = 'left, top'
  wrap.style.width = el.clientWidth + 'px'
  el.style.position = 'relative'
  wrap.append(el)
  wrap.style.left = movingElemX + 'px'
  wrap.style.top = movingElemY + 'px'
}

function createClone(el, scaleX, scaleY, ANIMATION_SPEED) {
  let cloneHeight = window.getComputedStyle(el).getPropertyValue('height'),
    cloneWidth = window.getComputedStyle(el).getPropertyValue('width'),
    clone = document.createElement('div')

  clone.style.width = cloneWidth
  clone.style.height = cloneHeight
  clone.style.backgroundColor = '#ccc'
  clone.style.position = 'absolute'
  clone.style.zIndex = '1'
  el.before(clone)

  setTimeout(() => {
    coverClone(clone, scaleX, scaleY, ANIMATION_SPEED)
  }, 100)  
}

function coverClone(el, scaleX, scaleY, ANIMATION_SPEED) {
  el.style.transitionDuration = ANIMATION_SPEED
  el.style.transitionProperty = 'transform'
  el.style.transform = `scale(${scaleX}, ${scaleY})`
}

// function showItem(el) {  
//   import('../items/item-win.css')

//   renderItem(el)
 
//   const btnBack = document.querySelector('.nav__btn-back')

//   // btnBack.addEventListener('click', back)

//   function back() {
//     location.reload()
//   }
// }

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			return "" + chunkId + "." + {"src_assets_scripts_local_items_item-win_css":"7cbba4d7ebdfb17ca05d","src_assets_scripts_local_items_header-item_css":"832664a0247e52d89b2e"}[chunkId] + ".js";
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
/******/ 			var cssChunks = {"src_assets_scripts_local_items_item-win_css":1,"src_assets_scripts_local_items_header-item_css":1};
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
    // require('./animation/animation.css') 
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js") 
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js") 
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js") 
    __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css") 
    __webpack_require__(/*! ./touch-slider.js */ "./src/assets/scripts/local/touch-slider.js") 
    __webpack_require__(/*! ./ya-maps.js */ "./src/assets/scripts/local/ya-maps.js") 
    // require('./animation//animation')
    __webpack_require__(/*! ./items/items */ "./src/assets/scripts/local/items/items.js")
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuY3NzP2MwYzciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9zaG93RnVsbExpbmsvc2hvd0Z1bGxMaW5rLmNzcz9lY2MzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvc3R5bGUuY3NzPzg2NDYiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9pdGVtcy9pbWcuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9pdGVtcy9pdGVtLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2l0ZW1zL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9pdGVtcy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2xhenlMb2FkSW1nLmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbWVudS1uYXYuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9vcmRlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3Nob3dGdWxsTGluay9zaG93TGlua0Z1bGwuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC90b3VjaC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC95YS1tYXBzLmpzIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEdUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRnNGOztBQUUxRjtBQUNBLEdBQUcsa0NBQWtDO0FBQ3JDLEdBQUcsMkJBQTJCO0FBQzlCLEdBQUcsc0JBQXNCO0FBQ3pCLEdB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0EsaUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDblZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFD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OztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekI7QUFDQSxJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLDBEQUFZO0FBQ3hCLElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLG1IQUErQztBQUMzRCxJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CLElBQUksbUJBQU8sQ0FBQywyREFBYztBQUMxQjtBQUNBLElBQUksbUJBQU8sQ0FBQyxnRUFBZTtBQUMzQixJQUFJLG1CQUFPLENBQUMsNEZBQTZCO0FBQ3pDLElBQUksbUJBQU8sQ0FBQyxnRUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCLElBQUksbUJBQU8sQ0FBQywwREFBWTtBQUN4QixJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLHFFQUFtQjtBQUMvQixJQUFJLG1CQUFPLENBQUMsdURBQVk7QUFDeEI7QUFDQSxDO0FBQ0EiLCJmaWxlIjoibWFpbi5mNzM0MjM2NjlkZmU1YzRjODlhNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIEZvb3RlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjEzNDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXJfX2lubmVyIHtcclxuICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXJfX2xvZ28ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXJfX2Rlc2NyaXB0aW9uLCAuZm9vdGVyX19mZWVkYmFjayB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2Q2ZDZkNjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19pbm5lclwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cImZvb3Rlcl9fbG9nb1wiIHNyYz1cIjI1YjQyNmZiNzY2OGRkZTNhYmVmLnBuZ1wiIGFsdD1cItCb0L7Qs9C+0YLQuNC/INCc0LXQs9Cw0LvQtdC90LRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIMKpINCl0L7Qu9C00LjQvdCzIMKr0JzQtdCz0LDQv9C+0LvQuNGBwrssIDIwMDkg4oCUIDIwMjAgPGJyPlxyXG4gICAgICAgICAgICDQo9GB0LvQvtCy0LjRjyDQtNC+0LPQvtCy0L7RgNCwINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0YsgKNC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLRjCDQuCDQt9Cw0YnQuNGC0LAg0L/QtdGA0YHQvtC90LDQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4KSA8YnI+XHJcbiAgICAgICAgICAgINCf0YDQsNCy0LjQu9CwINC/0L7RgdC10YnQtdC90LjRjyA8YnI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZm9vdGVyX19mZWVkYmFja1wiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2Q2WmVaQjNsNW1RT3NkdWIwM09UUUxkU2JKclVtRUNfdmN3WVBxcmlQc2xnTDR0Zy92aWV3Zm9ybT9lbnRyeS42MzI2NDA5Nzg9JUQwJTlEJUQwJUI4JUQwJUI2JUQwJUJEJUQwJUI4JUQwJUI5KyVEMCVBMiVEMCVCMCVEMCVCMyVEMCVCOCVEMCVCQlwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPtCe0YHRgtCw0LLQuNGC0Ywg0L7RgtC30YvQsjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZm9vdGVyLWNvbXBvbmVudCcsIEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBpbWdJdGVtMSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTEtMS53ZWJwJztcclxuaW1wb3J0IGltZ0l0ZW0yIGZyb20gJy9zcmMvYXNzZXRzL2ltYWdlcy9pdGVtMi0xLndlYnAnO1xyXG5pbXBvcnQgaW1nSXRlbTMgZnJvbSAnL3NyYy9hc3NldHMvaW1hZ2VzL2l0ZW0zLTEud2VicCc7XHJcbmltcG9ydCBpbWdJdGVtNCBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTQtMS53ZWJwJztcclxuaW1wb3J0IGltZ0l0ZW01IGZyb20gJy9zcmMvYXNzZXRzL2ltYWdlcy9pdGVtNS0xLndlYnAnO1xyXG5pbXBvcnQgaW1nSXRlbTYgZnJvbSAnL3NyYy9hc3NldHMvaW1hZ2VzL2l0ZW02LTEud2VicCc7XHJcbmltcG9ydCBpbWdJdGVtNyBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTctMS53ZWJwJztcclxuXHJcbmV4cG9ydCB7aW1nSXRlbTEsIGltZ0l0ZW0yLCBpbWdJdGVtMywgaW1nSXRlbTQsIGltZ0l0ZW01LCBpbWdJdGVtNiwgaW1nSXRlbTd9IiwiLy8gaW1wb3J0ICcuLi9pdGVtcy9pdGVtcy5jc3MnXHJcblxyXG4vLyBjbGFzcyBIZWFkZXJJdGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgc3VwZXIoKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbi8vICAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuLy8gICAgICAgPHN0eWxlPlxyXG4vLyAgICAgICAgIC5oZWFkZXIge1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMThweCAyMHB4O1xyXG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjkpO1xyXG4vLyAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuLy8gICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTczJSkgYmx1cigxMHB4KTtcclxuLy8gICAgICAgICB9ICAgICAgXHJcbi8vICAgICAgICAgLm5hdiB7XHJcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5uYXYgYSB7XHJcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5uYXZfX2J0bi1iYWNrIHtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAubmF2X19idG4tYmFjayBpIHtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAubmF2X19uZXdzIHtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzMzMztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbi8vICAgICAgICAgICAubmF2IHtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgLml0ZW0ge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA3NXB4IDIwcHg7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICA8L3N0eWxlPlxyXG4vLyAgICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcbi8vICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4vLyAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdl9fYnRuLWJhY2tcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuLy8gICAgICAgICAgICAgICAgINCd0LDQt9Cw0LRcclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdl9fbmV3c1wiPlxyXG4vLyAgICAgICAgICAgICAgICAg0JzQtdCz0LDQu9C10L3QtCDQotCw0LPQuNC7IC0g0J3QvtCy0L7RgdGC0LhcclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgIDwvbmF2PlxyXG4vLyAgICAgICA8L2hlYWRlcj5cclxuLy8gICAgIGBcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaXRlbS1oZWFkZXItY29tcG9uZW50JywgSGVhZGVySXRlbSlcclxuXHJcbi8vIFxyXG5cclxuXHJcbmNvbnN0IGhlYWRlckhUTUwgPSBgXHJcbiAgPGhlYWRlciBjbGFzcz1cImhlYWRlci1pdGVtXCI+XHJcbiAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgIDxhIGNsYXNzPVwibmF2X19idG4tYmFja1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICDQndCw0LfQsNC0XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgY2xhc3M9XCJuYXZfX25ld3NcIj5cclxuICAgICAgICDQnNC10LPQsNC70LXQvdC0INCi0LDQs9C40LsgLSDQndC+0LLQvtGB0YLQuFxyXG4gICAgICA8L2E+XHJcbiAgICA8L25hdj5cclxuICA8L2hlYWRlcj5cclxuYFxyXG5cclxubGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmhlYWRlci5pbm5lckhUTUwgPSBoZWFkZXJIVE1MXHJcbi8vIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4tYmFjaycpXHJcblxyXG4vLyBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9ICcvJ1xyXG4vLyB9KVxyXG5cclxuZXhwb3J0IHtoZWFkZXJ9IiwiaW1wb3J0IHtpbWdJdGVtMSwgaW1nSXRlbTIsIGltZ0l0ZW0zLCBpbWdJdGVtNCwgaW1nSXRlbTUsIGltZ0l0ZW02LCBpbWdJdGVtN30gZnJvbSAnLi9pbWcnXHJcblxyXG5jb25zdCBsaXN0SXRlbXMxID0gW1xyXG4gIHtpZDogMSwgbGk6ICfQkdCw0YLRg9GCINCd0LDQtNGD0LLQvdCw0Y8g0JPQvtGA0LrQsCd9LFxyXG4gIHtpZDogMiwgbGk6ICfQkdCw0YLRg9GC0L3Ri9C5INC/0LDRgNC6J30sXHJcbiAge2lkOiAzLCBsaTogJ9Cb0LDQsdC40YDQuNC90YInfSxcclxuICB7aWQ6IDQsIGxpOiAn0JTQtdGC0YHQutC40Lkg0YHQsNC0J30sXHJcbiAge2lkOiA1LCBsaTogJ9Ct0LrRgdGC0YDQuNC8INC/0LDRgNC6J31cclxuXVxyXG5cclxuY29uc3QgbGlzdEl0ZW1zMiA9IFtcclxuICB7aWQ6IDEsIGxpOiAn0L/RgNC+0YHQvNC+0YLRgCDRhNC40LvRjNC80LAnfSxcclxuICB7aWQ6IDIsIGxpOiAn0L/QvtC/0LrQvtGA0L0g0Lgg0L3QsNC/0LjRgtC+0Log0LrQsNC20LTQvtC80YMg0YDQtdCx0ZHQvdC60YMnfSxcclxuICB7aWQ6IDMsIGxpOiAn0L/QvtGB0LXRidC10L3QuNC1INCw0YLRgtGA0LDQutGG0LjQvtC90L7Qsid9LFxyXG4gIHtpZDogNCwgbGk6ICfQlNC10YLRgdC60LjQuSDRgdCw0LQnfSxcclxuICB7aWQ6IDUsIGxpOiAnMTAwMCDQsdC+0L3Rg9GB0L7QsiDQvdCwINC40LPRgNC+0LLRg9GOINC60LDRgNGC0YMg0LjQvNC10L3QuNC90L3QuNC60YMnfVxyXG5dXHJcblxyXG5jb25zdCBsaXN0SXRlbXMzID0gW1xyXG4gIHtpZDogMSwgbGk6ICfQmNCz0YDQvtCy0LDRjyDQv9C70L7RidCw0LTQutCwINC90LAg0LLRi9Cx0L7RgCwgMtGI0YIuINC/0L4gNDAg0LzQuNC9LiwgMjAwINGA0YPQsS4nfSxcclxuICB7aWQ6IDIsIGxpOiAn0JjQs9GA0L7QstCw0Y8g0LrQsNGA0YLQsCDQvdCwINCy0YvQsdC+0YAgMSsxICgyNTAg0YDRg9CxLiDQuNC70LggMzAwINGA0YPQsS4pJ30sXHJcbiAge2lkOiAzLCBsaTogJ9Ca0L7QvNCx0L4gKNC/0L7Qv9C60L7RgNC9ICsg0L3QsNC/0LjRgtC+0LopLCAxOTAg0YDRg9CxLid9LFxyXG4gIHtpZDogNCwgbGk6ICfQn9GA0L7RgdC80L7RgtGAINC60LjQvdC+LCAxMjAg0YDRg9CxLid9LFxyXG4gIHtpZDogNSwgbGk6ICfQm9Cw0L3RhywgMTkwINGA0YPQsS4nfVxyXG5dXHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuXHR7aWQ6IDEsIHRpdGxlOiAn0JHQtdC30LvQuNC80LjRgiDQsiDQnNC10LPQsNC70Y3QvdC00LUnLCBpbWc6IGltZ0l0ZW0xLCBsaTogbGlzdEl0ZW1zMSwgZGVzY3JpcHRpb246ICfQl9CwIDU5MCDRgNGD0LEuINCyINCx0YPQtNC90Lgg0LzQvtC20L3QviDQuNCz0YDQsNGC0Ywg0YHQutC+0LvRjNC60L4g0YXQvtGH0LXRiNGMINC90LAg0LvRjtCx0YvRhSDQv9C70L7RidCw0LTQutCw0YUuJywgZGF0ZXRpbWU6IFwiMjAyMS0wNC0xNSAxMTowMFwifSxcclxuXHR7aWQ6IDIsIHRpdGxlOiAn0J7RgtC80LXRgtGMINC00LXQvdGMINGA0L7QttC00LXQvdC40Y8g0LIg0LrQuNC90L4hJywgaW1nOiBpbWdJdGVtMiwgbGk6IGxpc3RJdGVtczIsIGRlc2NyaXB0aW9uOiBcItCe0YLQu9C40YfQvdCw0Y8g0L3QvtCy0L7RgdGC0Ywg0LTQu9GPINGC0LXRhSwg0LrRgtC+INCz0L7RgtC+0LLQuNGC0YHRjyDQvtGC0LzQtdGC0LjRgtGMINC00LXQvdGMINGA0L7QttC00LXQvdC40Y8g0YDQtdCx0ZHQvdC60LAhINCc0Y/Qs9C60LjQuSDQutC40L3QvtGC0LXQsNGC0YAgREVQTyDQuCDRgdC10LzQtdC50L3Ri9C5INC/0LDRgNC6INGA0LDQt9Cy0LvQtdGH0LXQvdC40LkgwqvQnNC10LPQsNC70Y3QvdC0wrsg0L/RgNC10LTRgdGC0LDQstC70Y/RjtGCINC90L7QstGD0Y4g0L/RgNC+0LPRgNCw0LzQvNGDIMKr0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjyDQsiDQutC40L3QvsK7LlwiLCBkYXRldGltZTogXCIwNS4wMy4yMDIxIDE2OjM1XCJ9LFxyXG5cdHtpZDogMywgdGl0bGU6ICfQktGL0L/Rg9GB0LrQvdC+0Lkg0LIg0JzQtdCz0LDQu9C10L3QtNC1IScsIGltZzogaW1nSXRlbTMsIGxpOiBsaXN0SXRlbXMyLCBkZXNjcmlwdGlvbjogXCLQkiDRgdC10LzQtdC50L3QvtC8INC/0LDRgNC60LUg0YDQsNC30LLQu9C10YfQtdC90LjQuSDCq9Cc0LXQs9Cw0LvRjdC90LTCuyDRgdC/0LXRhtC40LDQu9GM0L3QviDQtNC70Y8g0LLQsNGBINC/0YDQvtC50LTRg9GCINCy0YvQv9GD0YHQutC90YvQtS4g0KHQvtGB0YLQsNCy0Ywg0YHQstC+0Y4g0L/RgNC+0LPRgNCw0LzQvNGDINGB0LDQvCDQuNC3INC90LDRiNC10LPQviDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg0LLRi9C/0YPRgdC60L3QvtCz0L46XCIsIGRhdGV0aW1lOiBcIjA5LjAyLjIwMjEgMTE6NTBcIn0sXHJcblx0e2lkOiA0LCB0aXRsZTogJ9Cc0LXQs9Cw0LvQtdC90LQg0L/QvtC70L3QvtGB0YLRjNGOINC+0YLQutGA0YvRgiEnLCBpbWc6IGltZ0l0ZW00LCBkZXNjcmlwdGlvbjogXCLQlNGA0YPQt9GM0Y8sINC90LDRiCDQv9Cw0YDQuiDQstC+0LfQvtCx0L3QvtCy0LjQuyDRgNCw0LHQvtGC0YMhINCY0LPRgNCw0YLRjCDQsiDQnNC10LPQsNC70Y3QvdC0INC80L7QttC90L4g0LIgMiDRgNCw0LfQsCDQsdC+0LvRjNGI0LUg0LfQsCDRgtC1INC20LUg0LTQtdC90YzQs9C4ISDQn9GA0L7RgdGC0L4g0L/QvtC/0L7Qu9C90LjRgtC1INC40LPRgNC+0LLRg9GOINC60LDRgNGC0YMg0L3QsCA3MDAsIDEwMDAsIDIwMDAg0LjQu9C4IDMwMDAg0YDRg9Cx0LvQtdC5LCDQsCDQvNGLINC40YUg0YPQtNCy0L7QuNC8IVwiLCBkYXRldGltZTogXCIxOC4wOS4yMDIwIDExOjI2XCJ9LFxyXG5cdHtpZDogNSwgdGl0bGU6ICfQn9C40YbRhtCwINCyINC/0L7QtNCw0YDQvtC6JywgaW1nOiBpbWdJdGVtNSwgZGVzY3JpcHRpb246IFwi0KEg0L/QvtC90LXQtNC10LvRjNC90LjQutCwINC/0L4g0L/Rj9GC0L3QuNGG0YMg0YHQtNC10LvQsNC50YLQtSDQt9Cw0LrQsNC3INC90LAg0YHRg9C80LzRgyDQvtGCIDUwMCDRgNGD0LEuINCyINC/0LjRhtGG0LXRgNC40LggJ9Cf0LjRhtGG0LAhINCf0LjRhtGG0LAhJyDQuCDQv9C+0LvRg9GH0LjRgtC1INC/0LjRhtGG0YMg0L3QsCDQstGL0LHQvtGAINCyINC/0L7QtNCw0YDQvtC6ISDQkNC60YbQuNGPINC00LXQudGB0YLQstGD0LXRgiDQvdCwINGB0LvQtdC00YPRjtGJ0LjQtSDQstC40LTRiyDQv9C40YbRhjog0JrQsNGA0LHQvtC90LDRgNCwLCDQnNGP0YHQvdCw0Y8sINCc0LDRgNCz0LDRgNC40YLQsC4g0JIg0LDQutGG0LjQuCDQuNC80LXRjtGC0YHRjyDQvtCz0YDQsNC90LjRh9C10L3QuNGPLiDQn9C+0LTRgNC+0LHQvdC+0YHRgtC4INGDINC80LXQvdC10LTQttC10YDQsCDQt9Cw0LLQtdC00LXQvdC40Y8uXCIsIGRhdGV0aW1lOiBcIjE3LjA5LjIwMjAgMTc6NTJcIn0sXHJcblx0e2lkOiA2LCB0aXRsZTogJ9CY0LPRgNC+0LLRi9C1INCw0LLRgtC+0LzQsNGC0Ysg0L7RgtC60YDRi9GC0YshJywgaW1nOiBpbWdJdGVtNiwgZGVzY3JpcHRpb246IFwi0JzRiyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YDQsNCx0L7RgtGDINC40LPRgNC+0LLRi9GFINCw0LLRgtC+0LzQsNGC0L7Qsi4g0JjQs9GA0LDRgtGMINCyINCc0LXQs9Cw0LvRjdC90LQg0LzQvtC20L3QviDQsiAyINGA0LDQt9CwINCx0L7Qu9GM0YjQtSDQt9CwINGC0LUg0LbQtSDQtNC10L3RjNCz0LghINCf0YDQvtGB0YLQviDQv9C+0L/QvtC70L3QuNGC0LUg0LjQs9GA0L7QstGD0Y4g0LrQsNGA0YLRgyDQvdCwIDcwMCwgMTAwMCwgMjAwMCDQuNC70LggMzAwMCDRgNGD0LHQu9C10LksINCwINC80Ysg0LjRhSDRg9C00LLQvtC40LwuXCIsIGRhdGV0aW1lOiBcIjIwLjA4LjIwMjAgMTE6MDBcIn0sXHJcblx0e2lkOiA3LCB0aXRsZTogJ9CR0L7QvdGD0YHQvdCw0Y8g0YHQuNGB0YLQtdC80LAnLCBpbWc6IGltZ0l0ZW03LCBkZXNjcmlwdGlvbjogXCLQn9GA0Lgg0L/QvtC/0L7Qu9C90LXQvdC40Lgg0LjQs9GA0L7QstC+0Lkg0LrQsNGA0YLRiyDCq9Cc0LXQs9Cw0LvRjdC90LTCuyDQvtGCIDcwMCDRgNGD0LHQu9C10Lkg0JLQsNC8INC90LAg0LrQsNGA0YLRgyDQsdGD0LTRg9GCINC90LDRh9C40YHQu9C10L3RiyDQsdC+0L3Rg9GB0L3Ri9C1INCx0LDQu9C70YsuIDEg0LHQvtC90YPRgSA9IDEg0YDRg9Cx0LvRji4g0JrQvtC70LjRh9C10YHRgtCy0L4g0LHQvtC90YPRgdC90YvRhSDQsdCw0LvQu9C+0LIg0LfQsNCy0LjRgdC40YIg0L7RgiDRgdGD0LzQvNGLINC/0L7Qv9C+0LvQvdC10L3QuNGPINC4INCy0LDRgNGM0LjRgNGD0LXRgtGB0Y8g0L7RgiA3MDAg0LTQviAzMDAwINCx0L7QvdGD0YHQvtCyLiDQn9GA0Lgg0LLQvdC10YHQtdC90LjQuCDRgdGD0LzQvNGLLCDQvdCw0YXQvtC00Y/RidC10LnRgdGPINC80LXQttC00YMg0L/QvtGA0L7Qs9C+0LLRi9C80Lgg0LfQvdCw0YfQtdC90LjRj9C80LgsINC90LDRh9C40YHQu9GP0LXRgtGB0Y8g0LrQvtC70LjRh9C10YHRgtCy0L4g0LHQvtC90YPRgdC+0LIsINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQtSDQvdC40LbQvdC10Lkg0L/QvtGA0L7Qs9C+0LLQvtC5INGB0YPQvNC80LUuINCf0L7QtNGA0L7QsdC90LXQtSDQviDQsdC+0L3Rg9GB0L3QvtC5INC/0YDQvtCz0YDQsNC80LzQtSDQuCDRgNCw0LfQvNC10YDQsNGFINC90LDRh9C40YHQu9C10L3QuNC5INC80L7QttC90L4g0YPQt9C90LDRgtGMINC90LAg0LrQsNGB0YHQtSDRgdC10LzQtdC50L3QvtCz0L4g0L/QsNGA0LrQsCDRgNCw0LfQstC70LXRh9C10L3QuNC5IMKr0JzQtdCz0LDQu9GN0L3QtMK7LlwiLCBkYXRldGltZTogXCIyMC4wOC4yMDIwIDEwOjU5XCJ9LCAgXHJcbl1cclxuICBcclxuY29uc3QgdG9IVE1MID0gaXRlbSA9PiBgXHJcblx0PGRpdiBjbGFzcz1cIml0ZW1fX3dyYXBwZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdDxpbWcgc3JjPVwiJHtpdGVtLmltZ31cIiBhbHQ9XCIke2l0ZW0udGl0bGV9XCIgd2lkdGg9XCI0NjBcIiBoZWlnaHQ9XCI0NjBcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIml0ZW1fX2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJpdGVtX190aXRsZVwiPiR7aXRlbS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdCR7aXRlbS5kZXNjcmlwdGlvbiB8fCAnJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPtCSINCw0LrRhtC40Lgg0YPRh9Cw0YHRgtCy0YPRjtGCOjwvcD5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHQke2l0ZW0ubGkgfHwgJyd9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PHNtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdCrQkNC60YbQuNGPINC90LUg0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdGP0LXRgtGB0Y8g0L3QsCDQuNCz0YDQvtCy0YvQtSDQsNCy0YLQvtC80LDRgtGLLiDQlNC10LnRgdGC0LLRg9GO0YIg0L7Qs9GA0LDQvdC40YfQtdC90LjRjyDQv9C+INGA0L7RgdGC0YMg0Lgg0LLQvtC30YDQsNGB0YLRgy4g0JDQutGG0LjRjyDQvdC1INC00LXQudGB0YLQstGD0LXRgiDQsiDQstGL0YXQvtC00L3Ri9C1LlxyXG5cdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHRcdDxicj4gICAgXHJcblx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjgzNDM1Mzc5Nzk3XCI+0YLQtdC7LiA6IDM3LTk3LTk3PC9hPlxyXG5cdFx0XHRcdFx0PGJyPlxyXG5cdFx0XHRcdFx0PHNtYWxsIGNsYXNzPVwiaXRlbV9fZGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0aW1lIGRhdGV0aW1lPVwiMjAyMS0wNC0xNSAxMTowMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQxNS4wNC4yMDIxIDExOjEwXHJcblx0XHRcdFx0XHRcdFx0PC90aW1lPlxyXG5cdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuYFxyXG5cclxuZnVuY3Rpb24gcmVuZGVySXRlbShlbCwgaXRlbSkge1xyXG4gIGVsLmlubmVySFRNTCA9IHRvSFRNTChpdGVtKSBcclxufVxyXG5cclxuY29uc3QgdG9IVE1MTGkgPSAobGkpID0+IGBcclxuICA8bGk+XHJcbiAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT5cclxuICAgICR7bGl9XHJcbiAgPC9saT5cclxuYFxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGkobGlzdCkge1xyXG4gIGNvbnN0IGh0bWwgPSBsaXN0Lm1hcChsID0+IHRvSFRNTExpKGwubGkpKS5qb2luKCcnKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19kZXNjcmlwdGlvbiB1bCcpLmlubmVySFRNTCA9IGh0bWxcclxufVxyXG5cclxuZXhwb3J0IHtpdGVtcywgcmVuZGVySXRlbSwgcmVuZGVyTGl9IiwiaW1wb3J0IHtpbWdJdGVtMSwgaW1nSXRlbTIsIGltZ0l0ZW0zLCBpbWdJdGVtNCwgaW1nSXRlbTUsIGltZ0l0ZW02LCBpbWdJdGVtN30gZnJvbSAnLi9pbWcnXHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7aWQ6IDEsIHRpdGxlOiAn0JHQtdC30LvQuNC80LjRgiDQsiDQnNC10LPQsNC70Y3QvdC00LUnLCBpbWc6IGltZ0l0ZW0xLCBkYXRldGltZTogXCIyMDIxLTA0LTE1IDExOjAwXCJ9LFxyXG4gIHtpZDogMiwgdGl0bGU6ICfQntGC0LzQtdGC0Ywg0LTQtdC90Ywg0YDQvtC20LTQtdC90LjRjyDQsiDQutC40L3QviEnLCBpbWc6IGltZ0l0ZW0yLCBkYXRldGltZTogXCIwNS4wMy4yMDIxIDE2OjM1XCJ9LFxyXG4gIHtpZDogMywgdGl0bGU6ICfQktGL0L/Rg9GB0LrQvdC+0Lkg0LIg0JzQtdCz0LDQu9C10L3QtNC1IScsIGltZzogaW1nSXRlbTMsIGRhdGV0aW1lOiBcIjA5LjAyLjIwMjEgMTE6NTBcIn0sXHJcbiAge2lkOiA0LCB0aXRsZTogJ9Cc0LXQs9Cw0LvQtdC90LQg0L/QvtC70L3QvtGB0YLRjNGOINC+0YLQutGA0YvRgiEnLCBpbWc6IGltZ0l0ZW00LCBkYXRldGltZTogXCIxOC4wOS4yMDIwIDExOjI2XCJ9LFxyXG4gIHtpZDogNSwgdGl0bGU6ICfQn9C40YbRhtCwINCyINC/0L7QtNCw0YDQvtC6JywgaW1nOiBpbWdJdGVtNSwgZGF0ZXRpbWU6IFwiMTcuMDkuMjAyMCAxNzo1MlwifSxcclxuICB7aWQ6IDYsIHRpdGxlOiAn0JjQs9GA0L7QstGL0LUg0LDQstGC0L7QvNCw0YLRiyDQvtGC0LrRgNGL0YLRiyEnLCBpbWc6IGltZ0l0ZW02LCBkYXRldGltZTogXCIyMC4wOC4yMDIwIDExOjAwXCJ9LFxyXG4gIHtpZDogNywgdGl0bGU6ICfQkdC+0L3Rg9GB0L3QsNGPINGB0LjRgdGC0LXQvNCwJywgaW1nOiBpbWdJdGVtNywgZGF0ZXRpbWU6IFwiMjAuMDguMjAyMCAxMDo1OVwifSwgIFxyXG5dXHJcblxyXG5jb25zdCB0b0hUTUwgPSBpdGVtID0+IGBcclxuICA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD1cIiR7aXRlbS5pZH1cIiBkYXRhLWJ0bj1cImJ1dHRvbi1pdGVtXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbS1saW5rXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJpdGVtLWltZ1wiIHNyYz1cIiR7aXRlbS5pbWd9XCIgYWx0PVwiJHtpdGVtLnRpdGxlfVwiIGxvYWRpbmc9XCJsYXp5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiaXRlbS10aXRsZVwiPiR7aXRlbS50aXRsZX08L2g0PlxyXG4gICAgICAgIDx0aW1lIGNsYXNzPVwiaXRlbS1kYXRlXCIgZGF0ZXRpbWU9XCIke2l0ZW0uZGF0ZXRpbWV9XCI+JHtpdGVtLmRhdGV0aW1lfTwvdGltZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2xpPlxyXG5gXHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWxpc3QnKS5pbm5lckhUTUwgPSBpdGVtcy5tYXAoaSA9PiB0b0hUTUwoaSkpLmpvaW4oJycpXHJcbn1cclxuXHJcbnJlbmRlcigpXHJcblxyXG5leHBvcnQge2l0ZW1zfVxyXG5cclxuIiwibGV0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG5pbWdzLmZvckVhY2goaSA9PiB7XHJcbiAgICBpZighaS5sb2FkaW5nKSB7XHJcbiAgICAgICAgaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYydcclxuICAgIH1cclxufSkiLCJjbGFzcyBNZW51TmF2IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgbGV0IGNpcmNsZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuMjIgKyAncHgnXHJcblxyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjNlNDtcclxuICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlcl9fbWVudS1iZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJfX21lbnUtYmctLWFjdGl2ZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMzUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQsIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdC0tYWN0aXZlLCAubWVudV9fcmlnaHQtLWFjdGl2ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAgXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQsIFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIC4zMiwgMS4yKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC43cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0IHtcclxuICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICB3aWR0aDogMjIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVmZmZlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDlweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX3RvZ2dsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNzBweCkge1xyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgke2NpcmNsZVdpZHRofSBhdCB0b3AgcmlnaHQpO1xyXG4gICAgICAgICAgICBoZWlndGg6IDEwMCU7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgLmhlYWRlci0tYWN0aXZlIHtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNzMwcHggYXQgY2VudGVyKTtcclxuICAgICAgICAgICAgaGVpZ3RoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlOjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAudG9nZ2xlX193cmFwcGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0ge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgICAgb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQsIFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgLjMyLCAxLjIpOyAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjdzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4xcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19sZWZ0IHtcclxuICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudS1iZ1wiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xlZnRcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0J0u0KLQsNCz0LjQuzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7Qn9Cw0YDQujwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QmtCw0YTQtTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QlNC10L3RjCDRgNC+0LbQtNC10L3QuNGPPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCc0LXRgNC+0L/RgNC40Y/RgtC40Y88L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JDQutGG0LjQuDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QptC10L3RizwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJiYWEyYjQ1ZDdjOWJlZDRhMjc1Zi5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSB0eXBlPVwiYVwiIGNsYXNzPVwibWVudV9fYnRuXCI+0JfQsNC60LDQt9Cw0YLRjCDQv9GA0LDQt9C00L3QuNC6PC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnVfX3RvZ2dsZVwiPtCc0LXQvdGOPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbmF2LWNvbXBvbmVudCcsIE1lbnVOYXYpXHJcblxyXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVfX3dyYXBwZXInKVxyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcbmxldCBtZW51TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19sZWZ0JylcclxubGV0IG1lbnVMZWZ0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpXHJcbmxldCBtZW51UmlndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fcmlnaHQnKVxyXG5sZXQgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RvZ2dsZScpXHJcblxyXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1hY3RpdmUnKVxyXG4gIG1lbnVMZWZ0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2xlZnQtLWFjdGl2ZScpXHJcbiAgbWVudVJpZ3RoLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3JpZ2h0LS1hY3RpdmUnKVxyXG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X190b2dnbGUtLWFjdGl2ZScpXHJcbiAgbWVudUxlZnRMaS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19pdGVtLS1hY3RpdmUnKVxyXG4gIH0pXHJcbn1cclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuXHJcblxyXG5cclxuIiwiY2xhc3MgTW9kYWwgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIC50YWIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpbnB1dC5pbnZhbGlkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIzNCwgMjM0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX193cmFwcGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkIGxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J1dHRvbnMge1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0NnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0biB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIC5uZXh0LWJ0biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5MGRjO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCAucHJldi1idG4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuLWNsb3NlIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuLWNsb3NlIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA3MztcclxuICAgICAgICB9ICAgICBcclxuICAgICAgICAucGFja2FnZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xNXB4O1xyXG4gICAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHNtYWxsLmludmFsaWQge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgIC5tb2RhbF9fZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODV2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4OHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc21hbGwuaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZm9ybVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cInJlZ0Zvcm1cIiBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPtCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPINC/0YDQsNC30LTQvdC40LrQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlXCIgdHlwZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCk0JjQnjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiPtCc0L7QsdC40LvRjNC90YvQuSDRgtC10LvQtdGE0L7QvTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiKzcgKDk5OSkgMTIzLTQ1LTY3XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxAZW1haWwucnVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvdW50XCI+0JrQvtC70LjRh9C10YHRgtCy0L4g0LTQtdGC0LXQuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvdW50XCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQviDQtNC10YLQtdC5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFja2FnZVwiPtCf0LDQutC10YLQvdC+0LUg0L/RgNC10LTQu9C+0LbQtdC90LjQtTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwYWNrYWdlXCIgbmFtZT1cInBhY2thZ2VcIiBpZD1cInBhY2thZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjYwNlwiPtCR0LDQt9C+0LLRi9C5ICjQtNC+IDEwINGH0LXQuy4pIC0gNDcwMC4wMCBSVUI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjYwOFwiPtCf0YDQtdC80LjRg9C8ICjQtNC+IDEwINGH0LXQuy4pIC0gNzkwMC4wMCBSVUI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFja2FnZV9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAg0JrQstC10YHRgiDRgSAxINCw0L3QuNC80LDRgtC+0YDQvtC8IC0xINGH0LDRgS4g0JDRgNC10L3QtNCwINCx0LDQvdC60LXRgtC90L7QuSDQutC+0LzQvdCw0YLRiyAtMSDRh9Cw0YEuINGD0LrRgNCw0YjQtdC90LjQtSDQsdCw0L3QutC10YLQvdC+0LPQviDRgdGC0L7Qu9CwICjRgdC60LDRgtC10YDRgtGMLCDQv9C+0YHRg9C00LAsINGB0LDQu9GE0LXRgtC60LgpLtCT0LXQu9C40LXQstGL0LUg0YjQsNGA0YstMTDRiNGCLiDQv9GA0LjQs9C70LDRgdC40YLQtdC70YzQvdGL0LUg0LIg0LrQuNC90L4tMTDRiNGCLiDQotC+0YDQttC10YHRgtCy0LXQvdC90YvQuSDQstGL0L3QvtGBINGC0L7RgNGC0LAuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1vZGFsX19idG4gcHJldi1idG5cIj7QndCw0LfQsNC0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1vZGFsX19idG4gbmV4dC1idG5cIj7QlNCw0LvQtdC1PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1tb2RhbC1idG5cIiBjbGFzcz1cIm1vZGFsX19idG4tY2xvc2VcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS13aW5kb3ctY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21vZGFsLWNvbXBvbmVudCcsIE1vZGFsKVxyXG5cclxuLyogT3BlbiBtb2RhbCAqL1xyXG5sZXQgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKVxyXG5cclxubmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufSlcclxuXHJcbi8qIENsb3NlIG1vZGFsIHdpbmRvdyAqL1xyXG5sZXQgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1tb2RhbC1idG4nKVxyXG5sZXQgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3dyYXBwZXInKVxyXG5jbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChldmVudCkge1xyXG4gIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQudGFnTmFtZVxyXG5cclxuICBpZih0YXJnZXQgIT0gJ0JVVFRPTicpIHJldHVyblxyXG4gIFxyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpKSB7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgfVxyXG59KVxyXG5cclxuLyogQ3VycmVudCBkYXRlICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpXHJcblxyXG4vKiBNdWx0aXBsZSBzdGVwcyAqL1xyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpLFxyXG4gIG5leHRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1idG4nKSxcclxuICBwcmV2VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtYnRuJyksXHJcbiAgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cIm5hbWVcIl0nKSxcclxuICBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwicGhvbmVcIl0nKSxcclxuICBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZW1haWxcIl0nKSxcclxuICBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpIFxyXG5cclxubGV0IGN1cnJlbnRUYWIgPSAwXHJcbnRhYnNbY3VycmVudFRhYl0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcblxyXG4vKiBSZW1vdmUgY2xhc3MgaW52YWxpZCBmb2N1c2VkICovXHJcbmZ1bmN0aW9uIHJlbW92ZUludmFsaWQoZWwpIHtcclxuICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSkge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpXHJcbiAgICBlbC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgfVxyXG59XHJcbnVzZXJuYW1lLm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKHVzZXJuYW1lKVxyXG5waG9uZS5vbmZvY3VzID0gKCkgPT4gcmVtb3ZlSW52YWxpZChwaG9uZSlcclxuZW1haWwub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQoZW1haWwpXHJcbmNvdW50Lm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKGNvdW50KVxyXG5cclxubmV4dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB2YWxpZGF0ZUZvcm0oKVxyXG5cclxuICBsZXQgaW52YWxpZE5hbWUgPSB1c2VybmFtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSxcclxuICAgIGludmFsaWRDbGFzcyA9IHRhYnNbY3VycmVudFRhYl0ucXVlcnlTZWxlY3RvcignLmludmFsaWQnKVxyXG5cclxuICAgIGlmKGludmFsaWRDbGFzcykgcmV0dXJuXHJcblxyXG4gIGN1cnJlbnRUYWIrK1xyXG4gIFxyXG4gIGlmKGN1cnJlbnRUYWIgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnRm9ybScpO1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbGV0IHByb2Nlc3NpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9jZXNzaW5nLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdwcm9jZXNzaW5nIC4uLicpKTtcclxuICAgIGZvcm0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvY2Vzc2luZywgZm9ybSk7XHJcblxyXG4gICAgcmVkaXJlY3RNYWluUGFnZSgpXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIEFycmF5LmZyb20odGFicykuZmluZChzaG93VGFiKVxyXG4gIHNob3dCdG4oKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2hvd1RhYihlbCwgaWR4KSB7XHJcbiAgaWYoaWR4ID09PSBjdXJyZW50VGFiKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QnRuKCkge1xyXG4gIGlmKGN1cnJlbnRUYWIgPj0gdGFicy5sZW5ndGggLSAxKSB7XHJcbiAgICBuZXh0VGFiLmlubmVySFRNTCA9ICfQntGC0L/RgNCw0LLQuNGC0YwnXHJcbiAgfSBlbHNlIHtcclxuICAgIG5leHRUYWIuaW5uZXJIVE1MID0gJ9CU0LDQu9C10LUnXHJcbiAgfVxyXG5cclxuICBjdXJyZW50VGFiID4gMFxyXG4gICAgPyBwcmV2VGFiLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xyXG4gICAgOiBwcmV2VGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufVxyXG5cclxucHJldlRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJyZW50VGFiLS1cclxuICBpZihjdXJyZW50VGFiIDwgMCkge1xyXG4gICAgY3VycmVudFRhYiA9IDBcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBBcnJheS5mcm9tKHRhYnMpLmZpbmQoc2hvd1RhYilcclxuICBzaG93QnRuKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIHJlZGlyZWN0TWFpblBhZ2UoKSB7XHJcbiAgbGV0IHRpbWVyID0gMTFcclxuICBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgIHRpbWVyLS1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9ybScpLmlubmVySFRNTCA9IHRpbWVyXHJcbiAgICBpZih0aW1lciA9PT0gMSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9tZWdhbGFuZHBhcmsud2ViLmFwcC9cIiBcclxuICAgIH1cclxuICB9LCAxMDAwKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gIGxldCB0YWIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpLFxyXG4gICAgY3VycmVudFRhYnMgPSB0YWJbY3VycmVudFRhYl0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVxyXG4gICAgdmFsaWQgPSB0cnVlXHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lVmFsdWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICBwaG9uZVZhbHVlID0gcGhvbmUudmFsdWUudHJpbSgpLFxyXG4gICAgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKSxcclxuICAgIGNvdW50VmFsdWUgPSBjb3VudC52YWx1ZS50cmltKCksXHJcbiAgICBjb250YWluc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cIm51bWJlclwiXScpXHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50VGFicy5sZW5ndGg7IGkrKykge1xyXG4gIGlmKHVzZXJuYW1lVmFsdWUgPT09ICcnKSB7XHJcbiAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCLQktCy0LXQtNC40YLQtSDQpNCY0J5cIilcclxuICB9IGVsc2UgaWYodXNlcm5hbWVWYWx1ZS5sZW5ndGggPD0gMikge1xyXG4gICAgc2V0RXJyb3JGb3IodXNlcm5hbWUsIFwi0KHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60L7QtSDQpNCY0J5cIilcclxuICB9IGVsc2UgaWYoIXZhbGlkYXRlTG5hZyh1c2VybmFtZVZhbHVlKSkge1xyXG4gICAgc2V0RXJyb3JGb3IodXNlcm5hbWUsIFwi0JLQstC10LTQuNGC0LUg0YDRg9GB0YHQutC40LUg0LHRg9C60LLRi1wiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRTdWNjZXNzRm9yKHVzZXJuYW1lKVxyXG4gIH1cclxuXHJcbiAgaWYocGhvbmVWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKHBob25lLCBcItCS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiKVxyXG4gIH0gZWxzZSBpZihwaG9uZVZhbHVlLmxlbmd0aCA8IDE4KSB7XHJcbiAgICBzZXRFcnJvckZvcihwaG9uZSwgXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0YHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60LjQuVwiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRTdWNjZXNzRm9yKHBob25lKVxyXG4gIH1cclxuXHJcbiAgaWYoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKGVtYWlsLCBcItCS0LLQtdC00LjRgtC1IGVtYWlsXCIpXHJcbiAgfSBlbHNlIGlmKCF2YWxpZGF0ZUVtYWlsKGVtYWlsVmFsdWUpKSB7XHJcbiAgICBzZXRFcnJvckZvcihlbWFpbCwgXCLQktCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbFwiKVxyXG4gIH1cclxuXHJcbiAgaWYoY291bnRWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKGNvdW50LCBcItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC00LXRgtC10LlcIiApXHJcbiAgfVxyXG4gIH1cclxuXHJcblx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlTG5hZyh1c2VybmFtZSkge1xyXG4gIHJldHVybiAoL15b0LAt0Y/QkC3Qr10vKS50ZXN0KHVzZXJuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cclxuICByZXR1cm4gcmUudGVzdChlbWFpbClcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3Qgc21hbGwgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpXHJcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ2ludmFsaWQnXHJcblxyXG4gIGlmKGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKSB7XHJcbiAgICBzbWFsbC5jbGFzc05hbWUgPSAnaW52YWxpZCdcclxuICAgIHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2VcclxuICAgIHNtYWxsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuICBpbnB1dC5jbGFzc05hbWUgPSAnc3VjY2VzcydcclxuICBjb25zdCBzbWFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzbWFsbCcpXHJcbiAgc21hbGxzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtaW5NYXhDb3VuKG51bSkge1xyXG4gIGlmKG51bSA+IDMwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZicpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBBZGQgcGhvbmUgbWFzayArNyg5OTkpMTIzLTQ1LTY3ICovXHJcbnBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmKCAhKGV2ZW50LmtleSA9PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT0gJ0Fycm93UmlnaHQnIHx8IGV2ZW50LmtleSA9PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT0gJ1RhYicpKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxyXG4gICB2YXIgbWFzayA9ICcrNyAoMTExKSAxMTEtMTEtMTEnOyAvLyDQl9Cw0LTQsNC10Lwg0LzQsNGB0LrRg1xyXG5cclxuICAgaWYgKC9bMC05XFwrXFwgXFwtXFwoXFwpXS8udGVzdChldmVudC5rZXkpKSB7XHJcbiAgICAgICAvLyDQl9C00LXRgdGMINC90LDRh9C40L3QsNC10Lwg0YHRgNCw0LLQvdC40LLQsNGC0YwgdGhpcy52YWx1ZSDQuCBtYXNrXHJcbiAgICAgICAvLyDQuiDQv9GA0LjQvNC10YDRgyDQvtC/0Y/RgtGMINC20LVcclxuICAgICAgIHZhciBjdXJyZW50U3RyaW5nID0gdGhpcy52YWx1ZTtcclxuICAgICAgIHZhciBjdXJyZW50TGVuZ3RoID0gY3VycmVudFN0cmluZy5sZW5ndGg7XHJcbiAgICAgICBpZiAoL1swLTldLy50ZXN0KGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICBpZiAobWFza1tjdXJyZW50TGVuZ3RoXSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRTdHJpbmcgKyBldmVudC5rZXk7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgZm9yICh2YXIgaT1jdXJyZW50TGVuZ3RoOyBpPG1hc2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZiAobWFza1tpXSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRTdHJpbmcgKyBldmVudC5rZXk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nICs9IG1hc2tbaV07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH0gXHJcbn0pO1xyXG4iLCIvKiBTaG93IGl0ZW0gYnRuICovXHJcbmxldCBzaG93QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctYnRuJylcclxubGV0IGNhcmRIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fd3JhcHBlcicpXHJcblxyXG5mdW5jdGlvbiBzaG93SXRlbSgpIHtcclxuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICBjYXJkSGlkZGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmQtLWhpZGRlbicpXHJcbn1cclxuXHJcbnNob3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SXRlbSlcclxuXHJcbi8vIC8qIEN1cnJlbnQgZGF0ZSAqL1xyXG4vLyBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuLy8gbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XHJcblxyXG4vLyBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuLy8gICBsZXQgZGQgPSBkYXRlLmdldERhdGUoKVxyXG4vLyAgIGlmIChkZCA8IDEwKSBkZCA9ICcwJyArIGRkXHJcblxyXG4vLyAgIGxldCBNTSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuLy8gICBpZiAoTU0gPCAxMCkgTU0gPSAnMCcgKyBNTVxyXG5cclxuLy8gICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4vLyAgIGlmICh5eXl5IDwgMTApIHl5eXkgPSAnMCcgKyB5eXl5XHJcblxyXG4vLyAgIHJldHVybiB5eXl5ICsgJy0nICsgTU0gKyAnLScgKyBkZFxyXG4vLyB9XHJcblxyXG4vLyBsZXQgY3VycmVudERhdGUgPSBmb3JtYXREYXRlKGRhdGUpXHJcbi8vIGRhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlXHJcblxyXG5pbXBvcnQgJy4vb3JkZXIuY3NzJ1xyXG5cclxuLyogT3BlbiBtb2RhbCAqL1xyXG5sZXQgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcnNfX2xpc3QnKVxyXG5sZXQgcGhvbmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lJylcclxubGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcclxubGV0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX193cmFwcGVyJylcclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoZXZlbnQpIHtcclxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWVcclxuXHJcbiAgaWYodGFyZ2V0ICE9ICdCVVRUT04nKSByZXR1cm5cclxuICBcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcblxyXG5vZmZlcnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG5uYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufSlcclxuXHJcbnBob25lU2VjdGlvbi5mb3JFYWNoKGVsID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxufSkiLCJpbXBvcnQgJy4vc2hvd0Z1bGxMaW5rLmNzcydcclxuaW1wb3J0IHtpdGVtcywgcmVuZGVySXRlbSwgcmVuZGVyTGl9IGZyb20gJy4uL2l0ZW1zL2l0ZW0nXHJcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuLi9pdGVtcy9pdGVtLWhlYWRlcidcclxuXHJcbmxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJylcclxuXHJcbmxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFuaW1hdGlvbkVsZW1lbnQpXHJcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dJdGVtKVxyXG59KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93SXRlbShldmVudCkge1xyXG4gIGNvbnN0IGlkID0gK2V2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZCxcclxuICAgIGl0ZW0gPSBpdGVtcy5maW5kKGkgPT4gaS5pZCA9PT0gaWQpLFxyXG4gICAgbGlzdCA9IGl0ZW0ubGlcclxuXHJcbiAgaW1wb3J0KCcuLi9pdGVtcy9pdGVtLXdpbi5jc3MnKVxyXG4gIHJlbmRlckl0ZW0odGhpcywgaXRlbSlcclxuICBcclxuICAvLyBQYXN0ZSBoZWFkZXIgaW4gaXRlbVxyXG4gIGltcG9ydCgnLi4vaXRlbXMvaGVhZGVyLWl0ZW0uY3NzJylcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fd3JhcHBlcicpLmJlZm9yZShoZWFkZXIpXHJcblxyXG4gIC8vIEFkZCBidG4gYmFjayBpbiBpdGVtLWhlYWRlclxyXG4gIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4tYmFjaycpXHJcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9ICcvJ1xyXG4gIH0pXHJcbiAgXHJcbiAgLy8gUmV0dXJuIGlmIGxpc3QgaXRlbSBlbXB0eVxyXG4gIGlmKGxpc3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfSBlbHNlIHJlbmRlckxpKGxpc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvbkVsZW1lbnQoKSB7IFxyXG4gIHRoaXMuc3R5bGUubWFyZ2luTGVmdCA9ICcwcHgnXHJcbiAgdGhpcy5zdHlsZS5tYXJnaW5SaWdodCA9ICcwcHgnXHJcblxyXG4gIGNvbnN0IEFOSU1BVElPTl9TUEVFRCA9ICcuNjVzJ1xyXG5cclxuICBsZXQgZWxlbVdpZHRoID0gdGhpcy5vZmZzZXRXaWR0aC8yLFxyXG4gICAgZWxlbUhlaWdodCA9IHRoaXMub2Zmc2V0SGVpZ2h0LzIsICAgICAgXHJcbiAgICBtb3ZpbmdFbGVtWCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC8yIC0gKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIGVsZW1XaWR0aCksXHJcbiAgICBtb3ZpbmdFbGVtWSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQvMiAtICh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGVsZW1IZWlnaHQpLFxyXG4gICAgc2NhbGVYID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC8yKSAvIChlbGVtV2lkdGgpLFxyXG4gICAgc2NhbGVZID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQvMikgLyAoZWxlbUhlaWdodCksXHJcbiAgICBpdGVtUGF0aCA9IHRoaXMuY2hpbGROb2Rlc1sxXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXHJcblxyXG5cclxuICAvKkNyZWF0ZSB3cmFwcGVyIG9uIGVsZW1lbnQqL1xyXG4gIGxldCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXHJcbiAgd3JhcC5jbGFzc05hbWUgPSAnc3RhcnQnXHJcbiAgdGhpcy5iZWZvcmUod3JhcCkgICAgIFxyXG4gIFxyXG4gIC8vIENyZWF0ZSBiZ1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY3JlYXRlQmcoKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICBcclxuICAgICAgY2VudGVyRWxlbWVudCh3cmFwLCB0aGlzLCBtb3ZpbmdFbGVtWCwgbW92aW5nRWxlbVksIEFOSU1BVElPTl9TUEVFRClcclxuICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlQ2xvbmUodGhpcywgc2NhbGVYLCBzY2FsZVksIEFOSU1BVElPTl9TUEVFRClcclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgIHNob3dJdGVtKHRoaXMpXHJcbiAgICAgICAgLy8gfSwgMTAwMCk7XHJcbiAgICAgIH0sIDEwMCkgICAgICBcclxuICAgIH0sIDApXHJcbiAgfSwgMCkgIFxyXG5cclxuICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcwcHgnXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCZygpIHtcclxuICBsZXQgYmFja2dyb3VuZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGJhY2tncm91bmRXcmFwLmNsYXNzTmFtZSA9ICdlbXB0eScgICAgICBcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWNrZ3JvdW5kV3JhcClcclxuICBiYWNrZ3JvdW5kV3JhcC5jbGFzc05hbWUgKz0gJyBmaWx0ZXInXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNlbnRlckVsZW1lbnQod3JhcCwgZWwsIG1vdmluZ0VsZW1YLCBtb3ZpbmdFbGVtWSwgQU5JTUFUSU9OX1NQRUVEKSB7XHJcbiAgd3JhcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBBTklNQVRJT05fU1BFRURcclxuICB3cmFwLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdsZWZ0LCB0b3AnXHJcbiAgd3JhcC5zdHlsZS53aWR0aCA9IGVsLmNsaWVudFdpZHRoICsgJ3B4J1xyXG4gIGVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xyXG4gIHdyYXAuYXBwZW5kKGVsKVxyXG4gIHdyYXAuc3R5bGUubGVmdCA9IG1vdmluZ0VsZW1YICsgJ3B4J1xyXG4gIHdyYXAuc3R5bGUudG9wID0gbW92aW5nRWxlbVkgKyAncHgnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNsb25lKGVsLCBzY2FsZVgsIHNjYWxlWSwgQU5JTUFUSU9OX1NQRUVEKSB7XHJcbiAgbGV0IGNsb25lSGVpZ2h0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLFxyXG4gICAgY2xvbmVXaWR0aCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLFxyXG4gICAgY2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICBjbG9uZS5zdHlsZS53aWR0aCA9IGNsb25lV2lkdGhcclxuICBjbG9uZS5zdHlsZS5oZWlnaHQgPSBjbG9uZUhlaWdodFxyXG4gIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJ1xyXG4gIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gIGNsb25lLnN0eWxlLnpJbmRleCA9ICcxJ1xyXG4gIGVsLmJlZm9yZShjbG9uZSlcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjb3ZlckNsb25lKGNsb25lLCBzY2FsZVgsIHNjYWxlWSwgQU5JTUFUSU9OX1NQRUVEKVxyXG4gIH0sIDEwMCkgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3ZlckNsb25lKGVsLCBzY2FsZVgsIHNjYWxlWSwgQU5JTUFUSU9OX1NQRUVEKSB7XHJcbiAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gQU5JTUFUSU9OX1NQRUVEXHJcbiAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcclxuICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZVh9LCAke3NjYWxlWX0pYFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBzaG93SXRlbShlbCkgeyAgXHJcbi8vICAgaW1wb3J0KCcuLi9pdGVtcy9pdGVtLXdpbi5jc3MnKVxyXG5cclxuLy8gICByZW5kZXJJdGVtKGVsKVxyXG4gXHJcbi8vICAgY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J0bi1iYWNrJylcclxuXHJcbi8vICAgLy8gYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2spXHJcblxyXG4vLyAgIGZ1bmN0aW9uIGJhY2soKSB7XHJcbi8vICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4vLyAgIH1cclxuLy8gfSIsImNsYXNzIFNsaWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJhZ3N0YXJ0IGEgeyBcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpZGVyLXdpbmRvdy13aWR0aCB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGlzdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXM7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1pdGVtIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWl0ZW0gaW1nIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNlMGRmZGU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMyksMCAycHggNnB4IDJweCByZ2JhKDYwLDY0LDY3LDAuMTUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5kcmFnc3RhcnQge1xyXG4gICAgICAgIC8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JhYmJpbmcge1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpc3QuZ3JhYmJpbmcgaW1nIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAuZHJhZ3N0YXJ0IGEge1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAuYXR0cmFjdGlvbnMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdHRyYWN0aW9ucy1oZWFkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdHRyYWN0aW9uc19fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItd2luZG93LXdpZHRoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cImF0dHJhY3Rpb25zLWxpc3RcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjZiYjU5MWVkZTA4ZWUyMmU5MzI4LmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QkdCw0YLRg9GCPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIzYjFiNTYwNGZhZjc4Y2IzODE4ZS5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0K3QutGB0YLRgNC40Lwt0L/QsNGA0Lo8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImI4YzYxMzM3NTBmMmI1MzY2OGJhLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QlNC10YLRgdC60LjQuSDRgdCw0LQ8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjgyOTM2OWViNWFmZjU4NTRhNjBkLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7Qm9Cw0LHQuNGA0LjQvdGCPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIzOTlmMzZlYjQ5ZjliMTFlMjczNi5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JjQs9GA0L7QstGL0LUg0LDQstGC0L7QvNCw0YLRizwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbGlkZXItY29tcG9uZW50JywgU2xpZGVyKVxyXG5cclxuY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dHJhY3Rpb25zLWxpc3QnKSxcclxuc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udGFpbmVyJyksXHJcbiAgc2xpZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0cmFjdGlvbnMtaXRlbScpKVxyXG5cclxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICBzbGlkZXJXcmFwcGVyLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjkgKyBcInB4XCJcclxufSBlbHNlIHtcclxuICBzbGlkZXJXcmFwcGVyLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjUgKyBcInB4XCJcclxufVxyXG5cclxubGV0IGN1cnJlbnRJbmRleCA9IDBcclxubGV0IHN0YXJ0UG9zaXRpb24gPSAwXHJcbmxldCBjdXJyZW50VHJhbnNsYXRlID0gMFxyXG5sZXQgcHJldlRyYW5zbGF0ZSA9IDBcclxubGV0IGlzRHJhZ2dpbmcgPSBmYWxzZVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cclxufSwgZmFsc2UpO1xyXG5cclxuc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmRleCkgPT4ge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjkgKyBcInB4XCJcclxuICAgIHNsaWRlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjUgKyAncHgnXHJcbiAgfSBlbHNlIHtcclxuICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuNSArIFwicHhcIlxyXG4gICAgc2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuMyArICdweCdcclxuICB9XHJcbiAgc2xpZGUuc3R5bGUubWFyZ2luUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4xICsgJ3B4J1xyXG4gIHNsaWRlckltZyA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXHJcblxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSlcclxuICBcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQoaW5kZXgpKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpXHJcblxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b3VjaFN0YXJ0KGluZGV4KSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRvdWNoRW5kKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0b3VjaE1vdmUpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0b3VjaEVuZClcclxufSlcclxuXHJcbnNsaWRlckNvbnRhaW5lci5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoU3RhcnQoaW5kZXgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oZSkge1xyXG4gICAgY3VycmVudEluZGV4ID0gaW5kZXhcclxuICAgIHN0YXJ0UG9zaXRpb24gPSBnZXRQb3NpdGlvblgoZSlcclxuICAgIGlzRHJhZ2dpbmcgPSB0cnVlXHJcbiAgICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JhYmJpbmcnKVxyXG4gICAgY2xlYXJJbnRlcnZhbChpbmZpbml0eVNsaWRlcilcclxuICB9IFxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xyXG4gIGlmKGlzRHJhZ2dpbmcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGdldFBvc2l0aW9uWChlKVxyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IHByZXZUcmFuc2xhdGUgKyBjdXJyZW50UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uXHJcbiAgICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50VHJhbnNsYXRlfXB4KWBcclxuICAgICAgXHJcbiAgICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIC4wMDFzXCJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoRW5kKGUpIHsgXHJcbiAgaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgY29uc3QgbW92ZWRCeSA9IGN1cnJlbnRUcmFuc2xhdGUgLSBwcmV2VHJhbnNsYXRlXHJcblxyXG4gIGlmKG1vdmVkQnkgPiAxMDAgJiYgY3VycmVudEluZGV4ID4gMCkgY3VycmVudEluZGV4IC09IDFcclxuICBpZihtb3ZlZEJ5IDwgLTEwMCAmJiBjdXJyZW50SW5kZXggPCBzbGlkZXMubGVuZ3RoIC0gMSkgY3VycmVudEluZGV4ICs9IDFcclxuXHJcblxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogLXdpbmRvdy5pbm5lcldpZHRoXHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAoLXdpbmRvdy5pbm5lcldpZHRoICogLjUgLSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4xKVxyXG4gIH1cclxuXHJcbiAgcHJldlRyYW5zbGF0ZSA9IGN1cnJlbnRUcmFuc2xhdGVcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50VHJhbnNsYXRlfXB4KWBcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDEuMjVzXCJcclxuICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYmJpbmcnKVxyXG4gIGlmKG1vdmVkQnkgIT0gMCkge1xyXG4gICAgbGV0IGNhcHR1cmVDbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcHR1cmVDbGljaywgdHJ1ZSk7IC8vIGNsZWFudXBcclxuICAgIH1cclxuICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXB0dXJlQ2xpY2ssIHRydWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvc2l0aW9uWChlKSB7XHJcbiAgcmV0dXJuIGUudHlwZS5pbmNsdWRlcygnbW91c2UnKSA/IGUucGFnZVggOiBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG59XHJcblxyXG5jb25zdCBpbmZpbml0eVNsaWRlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICBjdXJyZW50SW5kZXgrKyAgXHJcbiAgaWYoY3VycmVudEluZGV4ID4gNCkgY3VycmVudFRyYW5zbGF0ZSA9IDAsIGN1cnJlbnRJbmRleCA9IDBcclxuXHJcbiAgbWVkaWFRdWVyaWVzVHJhbnNsYXRlKClcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50VHJhbnNsYXRlfXB4KWBcclxuICBzbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDEuMjVzXCJcclxufSwgMjUwMClcclxuXHJcbmZ1bmN0aW9uIG1lZGlhUXVlcmllc1RyYW5zbGF0ZSgpIHtcclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuOSAtIHBhcnNlSW50KHNsaWRlc1swXS5zdHlsZS5tYXJnaW5SaWdodCkpXHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAoLXdpbmRvdy5pbm5lcldpZHRoICogLjUgLSBwYXJzZUludChzbGlkZXNbMF0uc3R5bGUubWFyZ2luUmlnaHQpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNjcmlwdChzcmMpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgcztcclxuICAgICAgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzLnNyYyA9IHNyYztcclxuICAgICAgcy5vbmxvYWQgPSByZXNvbHZlO1xyXG4gICAgICBzLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XHJcbiAgfSk7XHJcbn0iLCIgIGZ1bmN0aW9uIGxvYWRNYXBzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvc2VydmljZXMvY29uc3RydWN0b3IvMS4wL2pzLz91bT1jb25zdHJ1Y3RvciUzQTM5YjE5ZGY5NzFiN2JmYWFhZmU4MWY0ZDEwMjk1NDc5OWE2YmNhODNkMWE1ZWU1ZjIxMTU0NDM3MjM2MDE2ZTYmYW1wO3dpZHRoPWF1dG8mYW1wO2hlaWdodD00NjAmYW1wO2xhbmc9cnVfUlUmYW1wO3NyY29sbD10cnVlXCI7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGl2TWFwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1tYXAnKVxyXG4gICAgICAgIGRpdk1hcHMuYXBwZW5kKHNjcmlwdClcclxuICAgIH0sIDEwMDApO1xyXG4gIH0gIFxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRNYXBzKCkpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfaXRlbS13aW5fY3NzXCI6XCI3Y2JiYTRkN2ViZGZiMTdjYTA1ZFwiLFwic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2hlYWRlci1pdGVtX2Nzc1wiOlwiODMyNjY0YTAyNDdlNTJkODliMmVcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmNzc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjb2RlOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJ2YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xudmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5taW5pQ3NzID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdHZhciBjc3NDaHVua3MgPSB7XCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfaXRlbS13aW5fY3NzXCI6MSxcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtc19oZWFkZXItaXRlbV9jc3NcIjoxfTtcblx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG5cdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuXHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbG9hZFN0eWxlc2hlZXQoY2h1bmtJZCkudGhlbigoKSA9PiB7XG5cdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdH0sIChlKSA9PiB7XG5cdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KSk7XG5cdH1cbn07XG5cbi8vIG5vIGhtciIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29kZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2RlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvKiBQYXRoIGNzcy9qcyB0byBpdGVtcyAqL1xyXG5jb25zdCBwYXRIb21lID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vc3R5bGUuY3NzJykgXHJcbiAgICAvLyByZXF1aXJlKCcuL2FuaW1hdGlvbi9hbmltYXRpb24uY3NzJykgXHJcbiAgICByZXF1aXJlKCcuL2Zvb3Rlci5qcycpIFxyXG4gICAgcmVxdWlyZSgnLi9tZW51LW5hdicpIFxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKSBcclxuICAgIHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi90b3VjaC1zbGlkZXIuanMnKSBcclxuICAgIHJlcXVpcmUoJy4veWEtbWFwcy5qcycpIFxyXG4gICAgLy8gcmVxdWlyZSgnLi9hbmltYXRpb24vL2FuaW1hdGlvbicpXHJcbiAgICByZXF1aXJlKCcuL2l0ZW1zL2l0ZW1zJylcclxuICAgIHJlcXVpcmUoJy4vc2hvd0Z1bGxMaW5rL3Nob3dMaW5rRnVsbCcpXHJcbiAgICByZXF1aXJlKCcuL2xhenlMb2FkSW1nJylcclxuICB9XHJcbiAgcmV0dXJuXHJcbn1cclxucGF0SG9tZSgpXHJcblxyXG5jb25zdCBwYXRoT3JkZXIgPSAoKSA9PiB7XHJcbiAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9vcmRlci5odG1sXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vb3JkZXIuY3NzJylcclxuICAgIHJlcXVpcmUoJy4vbWVudS1uYXYnKVxyXG4gICAgcmVxdWlyZSgnLi9mb290ZXIuanMnKVxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKVxyXG4gICAgcmVxdWlyZSgnLi9vcmRlci5qcycpXHJcbiAgfVxyXG59IFxyXG5wYXRoT3JkZXIoKVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==