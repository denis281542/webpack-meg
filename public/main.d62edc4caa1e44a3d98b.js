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
          <img class="footer__logo" src="25b426fb7668dde3abef.png" alt="?????????????? ????????????????">
          <div class="footer__description">
            ?? ?????????????? ??????????????????????, 2009 ??? 2020 <br>
            ?????????????? ???????????????? ?????????????????? ???????????? (???????????????????????????????????? ?? ???????????? ???????????????????????? ????????????????????) <br>
            ?????????????? ?????????????????? <br>
            <a class="footer__feedback"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZeZB3l5mQOsdub03OTQLdSbJrUmEC_vcwYPqriPslgL4tg/viewform?entry.632640978=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB"
              target="_blank"
            >???????????????? ??????????</a>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer)



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
//                 ??????????
//             </a>
//             <a class="nav__news">
//                 ???????????????? ?????????? - ??????????????
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
        ??????????
      </a>
      <a class="nav__news">
        ???????????????? ?????????? - ??????????????
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
const listItems1 = [
  {id: 1, li: '?????????? ???????????????? ??????????'},
  {id: 2, li: '???????????????? ????????'},
  {id: 3, li: '????????????????'},
  {id: 4, li: '?????????????? ??????'},
  {id: 5, li: '?????????????? ????????'}
]

const listItems2 = [
  {id: 1, li: '???????????????? ????????????'},
  {id: 2, li: '?????????????? ?? ?????????????? ?????????????? ??????????????'},
  {id: 3, li: '?????????????????? ????????????????????????'},
  {id: 4, li: '?????????????? ??????'},
  {id: 5, li: '1000 ?????????????? ???? ?????????????? ?????????? ????????????????????'}
]

const listItems3 = [
  {id: 1, li: '?????????????? ???????????????? ???? ??????????, 2????. ???? 40 ??????., 200 ??????.'},
  {id: 2, li: '?????????????? ?????????? ???? ?????????? 1+1 (250 ??????. ?????? 300 ??????.)'},
  {id: 3, li: '?????????? (?????????????? + ??????????????), 190 ??????.'},
  {id: 4, li: '???????????????? ????????, 120 ??????.'},
  {id: 5, li: '????????, 190 ??????.'}
]

const items = [
	{id: 1, title: '???????????????? ?? ??????????????????', img: "/src/assets/images/item1-1.webp", li: listItems1, description: '???? 590 ??????. ?? ?????????? ?????????? ???????????? ?????????????? ???????????? ???? ?????????? ??????????????????.', datetime: "2021-04-15 11:00"},
	{id: 2, title: '???????????? ???????? ???????????????? ?? ????????!', img: "/src/assets/images/item2-1.webp", li: listItems2, description: "???????????????? ?????????????? ?????? ??????, ?????? ?????????????????? ???????????????? ???????? ???????????????? ??????????????! ???????????? ?????????????????? DEPO ?? ???????????????? ???????? ?????????????????????? ???????????????????? ???????????????????????? ?????????? ?????????????????? ?????????? ???????????????? ?? ??????????.", datetime: "05.03.2021 16:35"},
	{id: 3, title: '?????????????????? ?? ??????????????????!', img: "/src/assets/images/item3-1.webp", li: listItems2, description: "?? ???????????????? ?????????? ?????????????????????? ???????????????????? ???????????????????? ?????? ?????? ?????????????? ??????????????????. ?????????????? ???????? ?????????????????? ?????? ???? ???????????? ???????????????????????? ????????????????????:", datetime: "09.02.2021 11:50"},
	{id: 4, title: '???????????????? ?????????????????? ????????????!', img: "/src/assets/images/item4-1.webp", description: "????????????, ?????? ???????? ???????????????????? ????????????! ???????????? ?? ???????????????? ?????????? ?? 2 ???????? ???????????? ???? ???? ???? ????????????! ???????????? ?????????????????? ?????????????? ?????????? ???? 700, 1000, 2000 ?????? 3000 ????????????, ?? ???? ???? ????????????!", datetime: "18.09.2020 11:26"},
	{id: 5, title: '?????????? ?? ??????????????', img: "/src/assets/images/item5-1.webp", description: "?? ???????????????????????? ???? ?????????????? ???????????????? ?????????? ???? ?????????? ???? 500 ??????. ?? ???????????????? '??????????! ??????????!' ?? ???????????????? ?????????? ???? ?????????? ?? ??????????????! ?????????? ?????????????????? ???? ?????????????????? ???????? ????????: ??????????????????, ????????????, ??????????????????. ?? ?????????? ?????????????? ??????????????????????. ?????????????????????? ?? ?????????????????? ??????????????????.", datetime: "17.09.2020 17:52"},
	{id: 6, title: '?????????????? ???????????????? ??????????????!', img: "/src/assets/images/item6-1.webp", description: "???? ?????????????????? ???????????? ?????????????? ??????????????????. ???????????? ?? ???????????????? ?????????? ?? 2 ???????? ???????????? ???? ???? ???? ????????????! ???????????? ?????????????????? ?????????????? ?????????? ???? 700, 1000, 2000 ?????? 3000 ????????????, ?? ???? ???? ????????????.", datetime: "20.08.2020 11:00"},
	{id: 7, title: '???????????????? ??????????????', img: "/src/assets/images/item7-1.webp", description: "?????? ???????????????????? ?????????????? ?????????? ???????????????????? ???? 700 ???????????? ?????? ???? ?????????? ?????????? ?????????????????? ???????????????? ??????????. 1 ?????????? = 1 ??????????. ???????????????????? ???????????????? ???????????? ?????????????? ???? ?????????? ???????????????????? ?? ?????????????????????? ???? 700 ???? 3000 ??????????????. ?????? ???????????????? ??????????, ?????????????????????? ?????????? ???????????????????? ????????????????????, ?????????????????????? ???????????????????? ??????????????, ?????????????????????????????? ???????????? ?????????????????? ??????????. ?????????????????? ?? ???????????????? ?????????????????? ?? ???????????????? ???????????????????? ?????????? ???????????? ???? ?????????? ?????????????????? ?????????? ?????????????????????? ????????????????????.", datetime: "20.08.2020 10:59"},  
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
					<p>?? ?????????? ??????????????????:</p>
					<ul>
							${item.li || ''}
					</ul>
					<small>
							*?????????? ???? ???????????????????????????????? ???? ?????????????? ????????????????. ?????????????????? ?????????????????????? ???? ?????????? ?? ????????????????. ?????????? ???? ?????????????????? ?? ????????????????.
					</small>
					<br>    
					<a href="tel:83435379797">??????. : 37-97-97</a>
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
const items = [
  {id: 1, title: '???????????????? ?? ??????????????????', img: "/src/assets/images/item1-1.webp", datetime: "2021-04-15 11:00"},
  {id: 2, title: '???????????? ???????? ???????????????? ?? ????????!', img: "/src/assets/images/item2-1.webp", datetime: "05.03.2021 16:35"},
  {id: 3, title: '?????????????????? ?? ??????????????????!', img: "/src/assets/images/item3-1.webp", datetime: "09.02.2021 11:50"},
  {id: 4, title: '???????????????? ?????????????????? ????????????!', img: "/src/assets/images/item4-1.webp", datetime: "18.09.2020 11:26"},
  {id: 5, title: '?????????? ?? ??????????????', img: "/src/assets/images/item5-1.webp", datetime: "17.09.2020 17:52"},
  {id: 6, title: '?????????????? ???????????????? ??????????????!', img: "/src/assets/images/item6-1.webp", datetime: "20.08.2020 11:00"},
  {id: 7, title: '???????????????? ??????????????', img: "/src/assets/images/item7-1.webp", datetime: "20.08.2020 10:59"},  
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
                <a href="">??.??????????</a>
              </li>
              <li class="menu__item">
                <a href="">????????</a>
              </li>
              <li class="menu__item">
                <a href="">????????</a>
              </li>
              <li class="menu__item">
                <a href="">???????? ????????????????</a>
              </li>
              <li class="menu__item">
                <a href="">??????????????????????</a>
              </li>
            </ul>
            <ul class="menu__right">
              <li class="menu__item right">
                <a href="">??????????</a>
              </li>
              <li class="menu__item right">
                <a href="">????????</a>
              </li>
              <li class="menu__item right">
                <a href="">????????????????</a>
              </li>
            </ul>
            <a href="/">
              <img src="baa2b45d7c9bed4a275f.png" alt="">
            </a>
            <a type="a" class="menu__btn">???????????????? ????????????????</a>
            <div class="toggle__wrapper">
              <button class="menu__toggle">????????</button>
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
                <label for="date">???????? ???????????????????? ??????????????????</label>
                <input id="date" type="date">
                <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="name">??????</label>
                  <input id="name" type="text" placeholder="???????????? ???????? ????????????????">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="phone">?????????????????? ??????????????</label>
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
                  <label for="count">???????????????????? ??????????</label>
                  <input id="count" type="number" placeholder="?????????????? ?????????? ??????????">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="package">???????????????? ??????????????????????</label>
                  <select class="package" name="package" id="package">
                    <option value="6606">?????????????? (???? 10 ??????.) - 4700.00 RUB</option>
                    <option value="6608">?????????????? (???? 10 ??????.) - 7900.00 RUB</option>
                  </select>
                </div>
                <p class="package__description">
                  ?????????? ?? 1 ???????????????????? -1 ??????. ???????????? ?????????????????? ?????????????? -1 ??????. ?????????????????? ???????????????????? ?????????? (????????????????, ????????????, ????????????????).???????????????? ????????-10????. ?????????????????????????????? ?? ????????-10????. ?????????????????????????? ?????????? ??????????.
                </p>
              </div>
              <div class="modal__buttons">
                <button type="button" class="modal__btn prev-btn">??????????</button>
                <button type="button" class="modal__btn next-btn">??????????</button>

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
    nextTab.innerHTML = '??????????????????'
  } else {
    nextTab.innerHTML = '??????????'
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
    setErrorFor(username, "?????????????? ??????")
  } else if(usernameValue.length <= 2) {
    setErrorFor(username, "?????????????? ???????????????? ??????")
  } else if(!validateLnag(usernameValue)) {
    setErrorFor(username, "?????????????? ?????????????? ??????????")
  } else {
    setSuccessFor(username)
  }

  if(phoneValue === '') {
    setErrorFor(phone, "?????????????? ?????????? ????????????????")
  } else if(phoneValue.length < 18) {
    setErrorFor(phone, "?????????? ???????????????? ?????????????? ????????????????")
  } else {
    setSuccessFor(phone)
  }

  if(emailValue === '') {
    setErrorFor(email, "?????????????? email")
  } else if(!validateEmail(emailValue)) {
    setErrorFor(email, "?????????????? ???????????????????? email")
  }

  if(countValue === '') {
    setErrorFor(count, "?????????????? ???????????????????? ??????????" )
  }
  }

	
}

function validateLnag(username) {
  return (/^[??-????-??]/).test(username)
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
   var mask = '+7 (111) 111-11-11'; // ???????????? ??????????

   if (/[0-9\+\ \-\(\)]/.test(event.key)) {
       // ?????????? ???????????????? ???????????????????? this.value ?? mask
       // ?? ?????????????? ?????????? ????
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
  
  __webpack_require__.e(/*! import() */ "src_assets_scripts_local_items_header-item_css").then(__webpack_require__.bind(__webpack_require__, /*! ../items/header-item.css */ "./src/assets/scripts/local/items/header-item.css"))
  document.querySelector('.item__wrapper').before(_items_item_header__WEBPACK_IMPORTED_MODULE_2__.header)

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
                <h3 class="attractions-description">??????????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="3b1b5604faf78cb3818e.jpg" alt="">
                <h3 class="attractions-description">??????????????-????????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="b8c6133750f2b53668ba.jpg" alt="">
                <h3 class="attractions-description">?????????????? ??????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="829369eb5aff5854a60d.jpg" alt="">
                <h3 class="attractions-description">????????????????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="399f36eb49f9b11e2736.jpg" alt="">
                <h3 class="attractions-description">?????????????? ????????????????</h3>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuY3NzP2MwYzciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9zaG93RnVsbExpbmsvc2hvd0Z1bGxMaW5rLmNzcz9lY2MzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvc3R5bGUuY3NzPzg2NDYiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9pdGVtcy9pdGVtLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2l0ZW1zL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9pdGVtcy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2xhenlMb2FkSW1nLmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbWVudS1uYXYuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9vcmRlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3Nob3dGdWxsTGluay9zaG93TGlua0Z1bGwuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC90b3VjaC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC95YS1tYXBzLmpzIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZKO0FBQ0EsR0FBRyxrQ0FBa0M7QUFDckMsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxzQkFBc0I7QUFDekIsR0FBRyx5QkFBeUI7QUFDNUIsR0FBRztBQUNIOztBQUVBO0FBQ0EsR0FBRyw2QkFBNkI7QUFDaEMsR0FBRywrQ0FBK0M7QUFDbEQsR0FBRyxvQ0FBb0M7QUFDdkMsR0FBRyx5QkFBeUI7QUFDNUIsR0FBRztBQUNIOztBQUVBO0FBQ0EsR0FBRyxrRUFBa0U7QUFDckUsR0FBRyxnRUFBZ0U7QUFDbkUsR0FBRyxpREFBaUQ7QUFDcEQsR0FBRyxxQ0FBcUM7QUFDeEMsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSwrTUFBK007QUFDak4sRUFBRSw2VUFBNlU7QUFDL1UsRUFBRSx5UkFBeVI7QUFDM1IsRUFBRSxpVEFBaVQ7QUFDblQsRUFBRSwwWEFBMFg7QUFDNVgsRUFBRSxtVEFBbVQ7QUFDclQsRUFBRSxra0JBQWtrQjtBQUNwa0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLFNBQVMsV0FBVztBQUM1QztBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0EsR0FBRywyR0FBMkc7QUFDOUcsR0FBRyxtSEFBbUg7QUFDdEgsR0FBRyw2R0FBNkc7QUFDaEgsR0FBRyxpSEFBaUg7QUFDcEgsR0FBRyxzR0FBc0c7QUFDekcsR0FBRyxnSEFBZ0g7QUFDbkgsR0FBRyx1R0FBdUc7QUFDMUc7O0FBRUE7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBLG1DQUFtQyxTQUFTLFNBQVMsV0FBVztBQUNoRTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDLDRDQUE0QyxjQUFjLElBQUksY0FBYztBQUM1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWM7Ozs7Ozs7Ozs7OztBQzVCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0EsK0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHdCQUF3Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsR0FBRztBQUNoSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsbUhBQW1IO0FBQ25ILG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWix3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcmVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEMEI7QUFDOEI7QUFDZDs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQSxXQUFXLG1EQUFVO0FBQ3JCOztBQUVBLEVBQUUsc05BQStCO0FBQ2pDLEVBQUUsd0RBQVU7O0FBRVosRUFBRSwrTkFBa0M7QUFDcEMsa0RBQWtELHNEQUFNOztBQUV4RDtBQUNBO0FBQ0EsR0FBRyxNQUFNLHFEQUFROztBQUVqQjs7QUFFQSw2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQjtBQUNBOztBQUVBLHdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU8sSUFBSSxPQUFPO0FBQ2xEOztBQUVBLDBCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjs7QUFFckU7QUFDQTtBQUNBOztBQUVBLHNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsaUJBQWlCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7QUNuUEE7QUFDQTtBQUNBO0FBQ0Esb0tBQW9LLGVBQWUsZUFBZSxlQUFlO0FBQ2pOO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHOztBQUVBLDZDOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRixFOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBLDhCQUE4Qiw2SUFBNkk7V0FDM0ssRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQiw0QkFBNEIsUUFBUTtXQUMxRDtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0Isb0JBQW9CO1dBQ3BDO1dBQ0Esa0dBQWtHLFlBQVksT0FBTztXQUNySDtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrRUFBa0Usa0NBQWtDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDekNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2ZBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDZCQUE2QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSw4QkFBOEI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCO1dBQ2xCO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTs7V0FFQSxTOzs7OztXQ25FQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDOztXQUVoQztXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0osY0FBYztXQUNkO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCO0FBQ0EsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCLElBQUksbUJBQU8sQ0FBQywwREFBWTtBQUN4QixJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CLElBQUksbUJBQU8sQ0FBQyxtSEFBK0M7QUFDM0QsSUFBSSxtQkFBTyxDQUFDLHFFQUFtQjtBQUMvQixJQUFJLG1CQUFPLENBQUMsMkRBQWM7QUFDMUI7QUFDQSxJQUFJLG1CQUFPLENBQUMsZ0VBQWU7QUFDM0IsSUFBSSxtQkFBTyxDQUFDLDRGQUE2QjtBQUN6QyxJQUFJLG1CQUFPLENBQUMsZ0VBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMsMERBQVk7QUFDeEIsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCLElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLHVEQUFZO0FBQ3hCO0FBQ0EsQztBQUNBIiwiZmlsZSI6Im1haW4uZDYyZWRjNGNhYTFlNDRhM2Q5OGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyBGb290ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxMzQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19pbm5lciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19sb2dvIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyX19kZXNjcmlwdGlvbiwgLmZvb3Rlcl9fZmVlZGJhY2sge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9faW5uZXJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb290ZXJfX2xvZ29cIiBzcmM9XCIyNWI0MjZmYjc2NjhkZGUzYWJlZi5wbmdcIiBhbHQ9XCLQm9C+0LPQvtGC0LjQvyDQnNC10LPQsNC70LXQvdC0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICDCqSDQpdC+0LvQtNC40L3QsyDCq9Cc0LXQs9Cw0L/QvtC70LjRgcK7LCAyMDA5IOKAlCAyMDIwIDxicj5cclxuICAgICAgICAgICAg0KPRgdC70L7QstC40Y8g0LTQvtCz0L7QstC+0YDQsCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLICjQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Ywg0Lgg0LfQsNGJ0LjRgtCwINC/0LXRgNGB0L7QvdCw0LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCkgPGJyPlxyXG4gICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQv9C+0YHQtdGJ0LXQvdC40Y8gPGJyPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9fZmVlZGJhY2tcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkNlplWkIzbDVtUU9zZHViMDNPVFFMZFNiSnJVbUVDX3Zjd1lQcXJpUHNsZ0w0dGcvdmlld2Zvcm0/ZW50cnkuNjMyNjQwOTc4PSVEMCU5RCVEMCVCOCVEMCVCNiVEMCVCRCVEMCVCOCVEMCVCOSslRDAlQTIlRDAlQjAlRDAlQjMlRDAlQjglRDAlQkJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LI8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Zvb3Rlci1jb21wb25lbnQnLCBGb290ZXIpXHJcblxyXG4iLCIvLyBpbXBvcnQgJy4uL2l0ZW1zL2l0ZW1zLmNzcydcclxuXHJcbi8vIGNsYXNzIEhlYWRlckl0ZW0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbi8vICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICBzdXBlcigpXHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuLy8gICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4vLyAgICAgICA8c3R5bGU+XHJcbi8vICAgICAgICAgLmhlYWRlciB7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOSk7XHJcbi8vICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4vLyAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxNzMlKSBibHVyKDEwcHgpO1xyXG4vLyAgICAgICAgIH0gICAgICBcclxuLy8gICAgICAgICAubmF2IHtcclxuLy8gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLm5hdiBhIHtcclxuLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLm5hdl9fYnRuLWJhY2sge1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5uYXZfX2J0bi1iYWNrIGkge1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5uYXZfX25ld3Mge1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuLy8gICAgICAgICAgIC5uYXYge1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAuaXRlbSB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDc1cHggMjBweDtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIDwvc3R5bGU+XHJcbi8vICAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuLy8gICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbi8vICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2X19idG4tYmFja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4vLyAgICAgICAgICAgICAgICAg0J3QsNC30LDQtFxyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2X19uZXdzXCI+XHJcbi8vICAgICAgICAgICAgICAgICDQnNC10LPQsNC70LXQvdC0INCi0LDQs9C40LsgLSDQndC+0LLQvtGB0YLQuFxyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgPC9uYXY+XHJcbi8vICAgICAgIDwvaGVhZGVyPlxyXG4vLyAgICAgYFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpdGVtLWhlYWRlci1jb21wb25lbnQnLCBIZWFkZXJJdGVtKVxyXG5cclxuLy8gXHJcblxyXG5cclxuY29uc3QgaGVhZGVySFRNTCA9IGBcclxuICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyLWl0ZW1cIj5cclxuICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgPGEgY2xhc3M9XCJuYXZfX2J0bi1iYWNrXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4gICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzcz1cIm5hdl9fbmV3c1wiPlxyXG4gICAgICAgINCc0LXQs9Cw0LvQtdC90LQg0KLQsNCz0LjQuyAtINCd0L7QstC+0YHRgtC4XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbmF2PlxyXG4gIDwvaGVhZGVyPlxyXG5gXHJcblxyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuaGVhZGVyLmlubmVySFRNTCA9IGhlYWRlckhUTUxcclxuXHJcbi8vIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4tYmFjaycpXHJcblxyXG4vLyBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9ICcvJ1xyXG4vLyB9KVxyXG5cclxuZXhwb3J0IHtoZWFkZXJ9IiwiY29uc3QgbGlzdEl0ZW1zMSA9IFtcclxuICB7aWQ6IDEsIGxpOiAn0JHQsNGC0YPRgiDQndCw0LTRg9Cy0L3QsNGPINCT0L7RgNC60LAnfSxcclxuICB7aWQ6IDIsIGxpOiAn0JHQsNGC0YPRgtC90YvQuSDQv9Cw0YDQuid9LFxyXG4gIHtpZDogMywgbGk6ICfQm9Cw0LHQuNGA0LjQvdGCJ30sXHJcbiAge2lkOiA0LCBsaTogJ9CU0LXRgtGB0LrQuNC5INGB0LDQtCd9LFxyXG4gIHtpZDogNSwgbGk6ICfQrdC60YHRgtGA0LjQvCDQv9Cw0YDQuid9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RJdGVtczIgPSBbXHJcbiAge2lkOiAxLCBsaTogJ9C/0YDQvtGB0LzQvtGC0YAg0YTQuNC70YzQvNCwJ30sXHJcbiAge2lkOiAyLCBsaTogJ9C/0L7Qv9C60L7RgNC9INC4INC90LDQv9C40YLQvtC6INC60LDQttC00L7QvNGDINGA0LXQsdGR0L3QutGDJ30sXHJcbiAge2lkOiAzLCBsaTogJ9C/0L7RgdC10YnQtdC90LjQtSDQsNGC0YLRgNCw0LrRhtC40L7QvdC+0LInfSxcclxuICB7aWQ6IDQsIGxpOiAn0JTQtdGC0YHQutC40Lkg0YHQsNC0J30sXHJcbiAge2lkOiA1LCBsaTogJzEwMDAg0LHQvtC90YPRgdC+0LIg0L3QsCDQuNCz0YDQvtCy0YPRjiDQutCw0YDRgtGDINC40LzQtdC90LjQvdC90LjQutGDJ31cclxuXVxyXG5cclxuY29uc3QgbGlzdEl0ZW1zMyA9IFtcclxuICB7aWQ6IDEsIGxpOiAn0JjQs9GA0L7QstCw0Y8g0L/Qu9C+0YnQsNC00LrQsCDQvdCwINCy0YvQsdC+0YAsIDLRiNGCLiDQv9C+IDQwINC80LjQvS4sIDIwMCDRgNGD0LEuJ30sXHJcbiAge2lkOiAyLCBsaTogJ9CY0LPRgNC+0LLQsNGPINC60LDRgNGC0LAg0L3QsCDQstGL0LHQvtGAIDErMSAoMjUwINGA0YPQsS4g0LjQu9C4IDMwMCDRgNGD0LEuKSd9LFxyXG4gIHtpZDogMywgbGk6ICfQmtC+0LzQsdC+ICjQv9C+0L/QutC+0YDQvSArINC90LDQv9C40YLQvtC6KSwgMTkwINGA0YPQsS4nfSxcclxuICB7aWQ6IDQsIGxpOiAn0J/RgNC+0YHQvNC+0YLRgCDQutC40L3QviwgMTIwINGA0YPQsS4nfSxcclxuICB7aWQ6IDUsIGxpOiAn0JvQsNC90YcsIDE5MCDRgNGD0LEuJ31cclxuXVxyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcblx0e2lkOiAxLCB0aXRsZTogJ9CR0LXQt9C70LjQvNC40YIg0LIg0JzQtdCz0LDQu9GN0L3QtNC1JywgaW1nOiBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pdGVtMS0xLndlYnBcIiwgbGk6IGxpc3RJdGVtczEsIGRlc2NyaXB0aW9uOiAn0JfQsCA1OTAg0YDRg9CxLiDQsiDQsdGD0LTQvdC4INC80L7QttC90L4g0LjQs9GA0LDRgtGMINGB0LrQvtC70YzQutC+INGF0L7Rh9C10YjRjCDQvdCwINC70Y7QsdGL0YUg0L/Qu9C+0YnQsNC00LrQsNGFLicsIGRhdGV0aW1lOiBcIjIwMjEtMDQtMTUgMTE6MDBcIn0sXHJcblx0e2lkOiAyLCB0aXRsZTogJ9Ce0YLQvNC10YLRjCDQtNC10L3RjCDRgNC+0LbQtNC10L3QuNGPINCyINC60LjQvdC+IScsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTItMS53ZWJwXCIsIGxpOiBsaXN0SXRlbXMyLCBkZXNjcmlwdGlvbjogXCLQntGC0LvQuNGH0L3QsNGPINC90L7QstC+0YHRgtGMINC00LvRjyDRgtC10YUsINC60YLQviDQs9C+0YLQvtCy0LjRgtGB0Y8g0L7RgtC80LXRgtC40YLRjCDQtNC10L3RjCDRgNC+0LbQtNC10L3QuNGPINGA0LXQsdGR0L3QutCwISDQnNGP0LPQutC40Lkg0LrQuNC90L7RgtC10LDRgtGAIERFUE8g0Lgg0YHQtdC80LXQudC90YvQuSDQv9Cw0YDQuiDRgNCw0LfQstC70LXRh9C10L3QuNC5IMKr0JzQtdCz0LDQu9GN0L3QtMK7INC/0YDQtdC00YHRgtCw0LLQu9GP0Y7RgiDQvdC+0LLRg9GOINC/0YDQvtCz0YDQsNC80LzRgyDCq9CU0LXQvdGMINGA0L7QttC00LXQvdC40Y8g0LIg0LrQuNC90L7Cuy5cIiwgZGF0ZXRpbWU6IFwiMDUuMDMuMjAyMSAxNjozNVwifSxcclxuXHR7aWQ6IDMsIHRpdGxlOiAn0JLRi9C/0YPRgdC60L3QvtC5INCyINCc0LXQs9Cw0LvQtdC90LTQtSEnLCBpbWc6IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2l0ZW0zLTEud2VicFwiLCBsaTogbGlzdEl0ZW1zMiwgZGVzY3JpcHRpb246IFwi0JIg0YHQtdC80LXQudC90L7QvCDQv9Cw0YDQutC1INGA0LDQt9Cy0LvQtdGH0LXQvdC40LkgwqvQnNC10LPQsNC70Y3QvdC0wrsg0YHQv9C10YbQuNCw0LvRjNC90L4g0LTQu9GPINCy0LDRgSDQv9GA0L7QudC00YPRgiDQstGL0L/Rg9GB0LrQvdGL0LUuINCh0L7RgdGC0LDQstGMINGB0LLQvtGOINC/0YDQvtCz0YDQsNC80LzRgyDRgdCw0Lwg0LjQtyDQvdCw0YjQtdCz0L4g0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwINCy0YvQv9GD0YHQutC90L7Qs9C+OlwiLCBkYXRldGltZTogXCIwOS4wMi4yMDIxIDExOjUwXCJ9LFxyXG5cdHtpZDogNCwgdGl0bGU6ICfQnNC10LPQsNC70LXQvdC0INC/0L7Qu9C90L7RgdGC0YzRjiDQvtGC0LrRgNGL0YIhJywgaW1nOiBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pdGVtNC0xLndlYnBcIiwgZGVzY3JpcHRpb246IFwi0JTRgNGD0LfRjNGPLCDQvdCw0Ygg0L/QsNGA0Log0LLQvtC30L7QsdC90L7QstC40Lsg0YDQsNCx0L7RgtGDISDQmNCz0YDQsNGC0Ywg0LIg0JzQtdCz0LDQu9GN0L3QtCDQvNC+0LbQvdC+INCyIDIg0YDQsNC30LAg0LHQvtC70YzRiNC1INC30LAg0YLQtSDQttC1INC00LXQvdGM0LPQuCEg0J/RgNC+0YHRgtC+INC/0L7Qv9C+0LvQvdC40YLQtSDQuNCz0YDQvtCy0YPRjiDQutCw0YDRgtGDINC90LAgNzAwLCAxMDAwLCAyMDAwINC40LvQuCAzMDAwINGA0YPQsdC70LXQuSwg0LAg0LzRiyDQuNGFINGD0LTQstC+0LjQvCFcIiwgZGF0ZXRpbWU6IFwiMTguMDkuMjAyMCAxMToyNlwifSxcclxuXHR7aWQ6IDUsIHRpdGxlOiAn0J/QuNGG0YbQsCDQsiDQv9C+0LTQsNGA0L7QuicsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTUtMS53ZWJwXCIsIGRlc2NyaXB0aW9uOiBcItChINC/0L7QvdC10LTQtdC70YzQvdC40LrQsCDQv9C+INC/0Y/RgtC90LjRhtGDINGB0LTQtdC70LDQudGC0LUg0LfQsNC60LDQtyDQvdCwINGB0YPQvNC80YMg0L7RgiA1MDAg0YDRg9CxLiDQsiDQv9C40YbRhtC10YDQuNC4ICfQn9C40YbRhtCwISDQn9C40YbRhtCwIScg0Lgg0L/QvtC70YPRh9C40YLQtSDQv9C40YbRhtGDINC90LAg0LLRi9Cx0L7RgCDQsiDQv9C+0LTQsNGA0L7QuiEg0JDQutGG0LjRjyDQtNC10LnRgdGC0LLRg9C10YIg0L3QsCDRgdC70LXQtNGD0Y7RidC40LUg0LLQuNC00Ysg0L/QuNGG0YY6INCa0LDRgNCx0L7QvdCw0YDQsCwg0JzRj9GB0L3QsNGPLCDQnNCw0YDQs9Cw0YDQuNGC0LAuINCSINCw0LrRhtC40Lgg0LjQvNC10Y7RgtGB0Y8g0L7Qs9GA0LDQvdC40YfQtdC90LjRjy4g0J/QvtC00YDQvtCx0L3QvtGB0YLQuCDRgyDQvNC10L3QtdC00LbQtdGA0LAg0LfQsNCy0LXQtNC10L3QuNGPLlwiLCBkYXRldGltZTogXCIxNy4wOS4yMDIwIDE3OjUyXCJ9LFxyXG5cdHtpZDogNiwgdGl0bGU6ICfQmNCz0YDQvtCy0YvQtSDQsNCy0YLQvtC80LDRgtGLINC+0YLQutGA0YvRgtGLIScsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTYtMS53ZWJwXCIsIGRlc2NyaXB0aW9uOiBcItCc0Ysg0LfQsNC/0YPRgdC60LDQtdC8INGA0LDQsdC+0YLRgyDQuNCz0YDQvtCy0YvRhSDQsNCy0YLQvtC80LDRgtC+0LIuINCY0LPRgNCw0YLRjCDQsiDQnNC10LPQsNC70Y3QvdC0INC80L7QttC90L4g0LIgMiDRgNCw0LfQsCDQsdC+0LvRjNGI0LUg0LfQsCDRgtC1INC20LUg0LTQtdC90YzQs9C4ISDQn9GA0L7RgdGC0L4g0L/QvtC/0L7Qu9C90LjRgtC1INC40LPRgNC+0LLRg9GOINC60LDRgNGC0YMg0L3QsCA3MDAsIDEwMDAsIDIwMDAg0LjQu9C4IDMwMDAg0YDRg9Cx0LvQtdC5LCDQsCDQvNGLINC40YUg0YPQtNCy0L7QuNC8LlwiLCBkYXRldGltZTogXCIyMC4wOC4yMDIwIDExOjAwXCJ9LFxyXG5cdHtpZDogNywgdGl0bGU6ICfQkdC+0L3Rg9GB0L3QsNGPINGB0LjRgdGC0LXQvNCwJywgaW1nOiBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pdGVtNy0xLndlYnBcIiwgZGVzY3JpcHRpb246IFwi0J/RgNC4INC/0L7Qv9C+0LvQvdC10L3QuNC4INC40LPRgNC+0LLQvtC5INC60LDRgNGC0YsgwqvQnNC10LPQsNC70Y3QvdC0wrsg0L7RgiA3MDAg0YDRg9Cx0LvQtdC5INCS0LDQvCDQvdCwINC60LDRgNGC0YMg0LHRg9C00YPRgiDQvdCw0YfQuNGB0LvQtdC90Ysg0LHQvtC90YPRgdC90YvQtSDQsdCw0LvQu9GLLiAxINCx0L7QvdGD0YEgPSAxINGA0YPQsdC70Y4uINCa0L7Qu9C40YfQtdGB0YLQstC+INCx0L7QvdGD0YHQvdGL0YUg0LHQsNC70LvQvtCyINC30LDQstC40YHQuNGCINC+0YIg0YHRg9C80LzRiyDQv9C+0L/QvtC70L3QtdC90LjRjyDQuCDQstCw0YDRjNC40YDRg9C10YLRgdGPINC+0YIgNzAwINC00L4gMzAwMCDQsdC+0L3Rg9GB0L7Qsi4g0J/RgNC4INCy0L3QtdGB0LXQvdC40Lgg0YHRg9C80LzRiywg0L3QsNGF0L7QtNGP0YnQtdC50YHRjyDQvNC10LbQtNGDINC/0L7RgNC+0LPQvtCy0YvQvNC4INC30L3QsNGH0LXQvdC40Y/QvNC4LCDQvdCw0YfQuNGB0LvRj9C10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INCx0L7QvdGD0YHQvtCyLCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LUg0L3QuNC20L3QtdC5INC/0L7RgNC+0LPQvtCy0L7QuSDRgdGD0LzQvNC1LiDQn9C+0LTRgNC+0LHQvdC10LUg0L4g0LHQvtC90YPRgdC90L7QuSDQv9GA0L7Qs9GA0LDQvNC80LUg0Lgg0YDQsNC30LzQtdGA0LDRhSDQvdCw0YfQuNGB0LvQtdC90LjQuSDQvNC+0LbQvdC+INGD0LfQvdCw0YLRjCDQvdCwINC60LDRgdGB0LUg0YHQtdC80LXQudC90L7Qs9C+INC/0LDRgNC60LAg0YDQsNC30LLQu9C10YfQtdC90LjQuSDCq9Cc0LXQs9Cw0LvRjdC90LTCuy5cIiwgZGF0ZXRpbWU6IFwiMjAuMDguMjAyMCAxMDo1OVwifSwgIFxyXG5dXHJcbiAgXHJcbmNvbnN0IHRvSFRNTCA9IGl0ZW0gPT4gYFxyXG5cdDxkaXYgY2xhc3M9XCJpdGVtX193cmFwcGVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHQ8aW1nIHNyYz1cIiR7aXRlbS5pbWd9XCIgYWx0PVwiJHtpdGVtLnRpdGxlfVwiIHdpZHRoPVwiNDYwXCIgaGVpZ2h0PVwiNDYwXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJpdGVtX19kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzPVwiaXRlbV9fdGl0bGVcIj4ke2l0ZW0udGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHQke2l0ZW0uZGVzY3JpcHRpb24gfHwgJyd9XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD7QkiDQsNC60YbQuNC4INGD0YfQsNGB0YLQstGD0Y7Rgjo8L3A+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0JHtpdGVtLmxpIHx8ICcnfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDxzbWFsbD5cclxuXHRcdFx0XHRcdFx0XHQq0JDQutGG0LjRjyDQvdC1INGA0LDRgdC/0YDQvtGB0YLRgNCw0L3Rj9C10YLRgdGPINC90LAg0LjQs9GA0L7QstGL0LUg0LDQstGC0L7QvNCw0YLRiy4g0JTQtdC50YHRgtCy0YPRjtGCINC+0LPRgNCw0L3QuNGH0LXQvdC40Y8g0L/QviDRgNC+0YHRgtGDINC4INCy0L7Qt9GA0LDRgdGC0YMuINCQ0LrRhtC40Y8g0L3QtSDQtNC10LnRgdGC0LLRg9C10YIg0LIg0LLRi9GF0L7QtNC90YvQtS5cclxuXHRcdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0XHQ8YnI+ICAgIFxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cInRlbDo4MzQzNTM3OTc5N1wiPtGC0LXQuy4gOiAzNy05Ny05NzwvYT5cclxuXHRcdFx0XHRcdDxicj5cclxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzcz1cIml0ZW1fX2RhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGltZSBkYXRldGltZT1cIjIwMjEtMDQtMTUgMTE6MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTUuMDQuMjAyMSAxMToxMFxyXG5cdFx0XHRcdFx0XHRcdDwvdGltZT5cclxuXHRcdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbmBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckl0ZW0oZWwsIGl0ZW0pIHtcclxuICBlbC5pbm5lckhUTUwgPSB0b0hUTUwoaXRlbSkgXHJcbn1cclxuXHJcbmNvbnN0IHRvSFRNTExpID0gKGxpKSA9PiBgXHJcbiAgPGxpPlxyXG4gICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+XHJcbiAgICAke2xpfVxyXG4gIDwvbGk+XHJcbmBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxpKGxpc3QpIHtcclxuICBjb25zdCBodG1sID0gbGlzdC5tYXAobCA9PiB0b0hUTUxMaShsLmxpKSkuam9pbignJylcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fZGVzY3JpcHRpb24gdWwnKS5pbm5lckhUTUwgPSBodG1sXHJcbn1cclxuXHJcbmV4cG9ydCB7aXRlbXMsIHJlbmRlckl0ZW0sIHJlbmRlckxpfSIsImNvbnN0IGl0ZW1zID0gW1xyXG4gIHtpZDogMSwgdGl0bGU6ICfQkdC10LfQu9C40LzQuNGCINCyINCc0LXQs9Cw0LvRjdC90LTQtScsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTEtMS53ZWJwXCIsIGRhdGV0aW1lOiBcIjIwMjEtMDQtMTUgMTE6MDBcIn0sXHJcbiAge2lkOiAyLCB0aXRsZTogJ9Ce0YLQvNC10YLRjCDQtNC10L3RjCDRgNC+0LbQtNC10L3QuNGPINCyINC60LjQvdC+IScsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTItMS53ZWJwXCIsIGRhdGV0aW1lOiBcIjA1LjAzLjIwMjEgMTY6MzVcIn0sXHJcbiAge2lkOiAzLCB0aXRsZTogJ9CS0YvQv9GD0YHQutC90L7QuSDQsiDQnNC10LPQsNC70LXQvdC00LUhJywgaW1nOiBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pdGVtMy0xLndlYnBcIiwgZGF0ZXRpbWU6IFwiMDkuMDIuMjAyMSAxMTo1MFwifSxcclxuICB7aWQ6IDQsIHRpdGxlOiAn0JzQtdCz0LDQu9C10L3QtCDQv9C+0LvQvdC+0YHRgtGM0Y4g0L7RgtC60YDRi9GCIScsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTQtMS53ZWJwXCIsIGRhdGV0aW1lOiBcIjE4LjA5LjIwMjAgMTE6MjZcIn0sXHJcbiAge2lkOiA1LCB0aXRsZTogJ9Cf0LjRhtGG0LAg0LIg0L/QvtC00LDRgNC+0LonLCBpbWc6IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2l0ZW01LTEud2VicFwiLCBkYXRldGltZTogXCIxNy4wOS4yMDIwIDE3OjUyXCJ9LFxyXG4gIHtpZDogNiwgdGl0bGU6ICfQmNCz0YDQvtCy0YvQtSDQsNCy0YLQvtC80LDRgtGLINC+0YLQutGA0YvRgtGLIScsIGltZzogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTYtMS53ZWJwXCIsIGRhdGV0aW1lOiBcIjIwLjA4LjIwMjAgMTE6MDBcIn0sXHJcbiAge2lkOiA3LCB0aXRsZTogJ9CR0L7QvdGD0YHQvdCw0Y8g0YHQuNGB0YLQtdC80LAnLCBpbWc6IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2l0ZW03LTEud2VicFwiLCBkYXRldGltZTogXCIyMC4wOC4yMDIwIDEwOjU5XCJ9LCAgXHJcbl1cclxuXHJcbmNvbnN0IHRvSFRNTCA9IGl0ZW0gPT4gYFxyXG4gIDxsaSBjbGFzcz1cIml0ZW1cIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIGRhdGEtYnRuPVwiYnV0dG9uLWl0ZW1cIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJpdGVtLWxpbmtcIj5cclxuICAgICAgPGltZyBjbGFzcz1cIml0ZW0taW1nXCIgc3JjPVwiJHtpdGVtLmltZ31cIiBhbHQ9XCIke2l0ZW0udGl0bGV9XCIgbG9hZGluZz1cImxhenlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJpdGVtLXRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgPHRpbWUgY2xhc3M9XCJpdGVtLWRhdGVcIiBkYXRldGltZT1cIiR7aXRlbS5kYXRldGltZX1cIj4ke2l0ZW0uZGF0ZXRpbWV9PC90aW1lPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbGk+XHJcbmBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtbGlzdCcpLmlubmVySFRNTCA9IGl0ZW1zLm1hcChpID0+IHRvSFRNTChpKSkuam9pbignJylcclxufVxyXG5cclxucmVuZGVyKClcclxuXHJcbmV4cG9ydCB7aXRlbXN9XHJcblxyXG4iLCJsZXQgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbmltZ3MuZm9yRWFjaChpID0+IHtcclxuICAgIGlmKCFpLmxvYWRpbmcpIHtcclxuICAgICAgICBpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJ1xyXG4gICAgfVxyXG59KSIsImNsYXNzIE1lbnVOYXYgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBsZXQgY2lyY2xlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4yMiArICdweCdcclxuXHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2U0O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyX19tZW51LWJnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlcl9fbWVudS1iZy0tYWN0aXZlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEzNTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdCwgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0LS1hY3RpdmUsIC5tZW51X19yaWdodC0tYWN0aXZlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgLjMyLCAxLjIpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4xcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQge1xyXG4gICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgIHdpZHRoOiAyMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0gYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWZmZmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDMwcHggOXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fdG9nZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI3MHB4KSB7XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKCR7Y2lyY2xlV2lkdGh9IGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgIGhlaWd0aDogMTAwJTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICAuaGVhZGVyLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg3MzBweCBhdCBjZW50ZXIpO1xyXG4gICAgICAgICAgICBoZWlndGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmU6OmFmdGVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC50b2dnbGVfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgICBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAuMzIsIDEuMik7ICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuN3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjhzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC45cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjFzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2xlZnQge1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51LWJnXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPG5hdiBjbGFzcz1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QnS7QotCw0LPQuNC7PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCf0LDRgNC6PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCa0LDRhNC1PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y88L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JzQtdGA0L7Qv9GA0LjRj9GC0LjRjzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QkNC60YbQuNC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCm0LXQvdGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImJhYTJiNDVkN2M5YmVkNGEyNzVmLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIHR5cGU9XCJhXCIgY2xhc3M9XCJtZW51X19idG5cIj7Ql9Cw0LrQsNC30LDRgtGMINC/0YDQsNC30LTQvdC40Lo8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGVfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudV9fdG9nZ2xlXCI+0JzQtdC90Y48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCduYXYtY29tcG9uZW50JywgTWVudU5hdilcclxuXHJcbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZV9fd3JhcHBlcicpXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJylcclxubGV0IG1lbnVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xlZnQnKVxyXG5sZXQgbWVudUxlZnRMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJylcclxubGV0IG1lbnVSaWd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19yaWdodCcpXHJcbmxldCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdG9nZ2xlJylcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLWFjdGl2ZScpXHJcbiAgbWVudUxlZnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fbGVmdC0tYWN0aXZlJylcclxuICBtZW51UmlndGguY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fcmlnaHQtLWFjdGl2ZScpXHJcbiAgdG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3RvZ2dsZS0tYWN0aXZlJylcclxuICBtZW51TGVmdExpLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2l0ZW0tLWFjdGl2ZScpXHJcbiAgfSlcclxufVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KVxyXG5cclxuXHJcblxyXG4iLCJjbGFzcyBNb2RhbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLnRhYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGlucHV0LmludmFsaWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyZWNjNzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX3dyYXBwZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogOTV2aDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1kYXRlXSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnV0dG9ucyB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDQ2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwgLm5leHQtYnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDkwZGM7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIC5wcmV2LWJ0biB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idG4tY2xvc2Uge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idG4tY2xvc2UgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDczO1xyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICAgIC5wYWNrYWdlIHtcclxuICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9ICAgICBcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc21hbGwuaW52YWxpZCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1kYXRlXSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4NXZ3O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjg4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzbWFsbC5pbnZhbGlkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb3JtXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwicmVnRm9ybVwiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+0JTQsNGC0LAg0L/RgNC+0LLQtdC00LXQvdC40Y8g0L/RgNCw0LfQtNC90LjQutCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0KTQmNCePC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRh1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+0JzQvtCx0LjQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGhvbmVcIiB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCIrNyAoOTk5KSAxMjMtNDUtNjdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbEBlbWFpbC5ydVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRcIj7QmtC+0LvQuNGH0LXRgdGC0LLQviDQtNC10YLQtdC5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY291bnRcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+INC00LXRgtC10LlcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYWNrYWdlXCI+0J/QsNC60LXRgtC90L7QtSDQv9GA0LXQtNC70L7QttC10L3QuNC1PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInBhY2thZ2VcIiBuYW1lPVwicGFja2FnZVwiIGlkPVwicGFja2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2NjA2XCI+0JHQsNC30L7QstGL0LkgKNC00L4gMTAg0YfQtdC7LikgLSA0NzAwLjAwIFJVQjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2NjA4XCI+0J/RgNC10LzQuNGD0LwgKNC00L4gMTAg0YfQtdC7LikgLSA3OTAwLjAwIFJVQjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWNrYWdlX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICDQmtCy0LXRgdGCINGBIDEg0LDQvdC40LzQsNGC0L7RgNC+0LwgLTEg0YfQsNGBLiDQkNGA0LXQvdC00LAg0LHQsNC90LrQtdGC0L3QvtC5INC60L7QvNC90LDRgtGLIC0xINGH0LDRgS4g0YPQutGA0LDRiNC10L3QuNC1INCx0LDQvdC60LXRgtC90L7Qs9C+INGB0YLQvtC70LAgKNGB0LrQsNGC0LXRgNGC0YwsINC/0L7RgdGD0LTQsCwg0YHQsNC70YTQtdGC0LrQuCku0JPQtdC70LjQtdCy0YvQtSDRiNCw0YDRiy0xMNGI0YIuINC/0YDQuNCz0LvQsNGB0LjRgtC10LvRjNC90YvQtSDQsiDQutC40L3Qvi0xMNGI0YIuINCi0L7RgNC20LXRgdGC0LLQtdC90L3Ri9C5INCy0YvQvdC+0YEg0YLQvtGA0YLQsC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibW9kYWxfX2J0biBwcmV2LWJ0blwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibW9kYWxfX2J0biBuZXh0LWJ0blwiPtCU0LDQu9C10LU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLW1vZGFsLWJ0blwiIGNsYXNzPVwibW9kYWxfX2J0bi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbW9kYWwtY29tcG9uZW50JywgTW9kYWwpXHJcblxyXG4vKiBPcGVuIG1vZGFsICovXHJcbmxldCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcblxyXG5uYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59KVxyXG5cclxuLyogQ2xvc2UgbW9kYWwgd2luZG93ICovXHJcbmxldCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsLWJ0bicpXHJcbmxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fd3JhcHBlcicpXHJcbmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKGV2ZW50KSB7XHJcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC50YWdOYW1lXHJcblxyXG4gIGlmKHRhcmdldCAhPSAnQlVUVE9OJykgcmV0dXJuXHJcbiAgXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpIHtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn0pXHJcblxyXG4vKiBDdXJyZW50IGRhdGUgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKClcclxuXHJcbi8qIE11bHRpcGxlIHN0ZXBzICovXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyksXHJcbiAgbmV4dFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LWJ0bicpLFxyXG4gIHByZXZUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi1idG4nKSxcclxuICB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibmFtZVwiXScpLFxyXG4gIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJwaG9uZVwiXScpLFxyXG4gIGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJlbWFpbFwiXScpLFxyXG4gIGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykgXHJcblxyXG5sZXQgY3VycmVudFRhYiA9IDBcclxudGFic1tjdXJyZW50VGFiXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuXHJcbi8qIFJlbW92ZSBjbGFzcyBpbnZhbGlkIGZvY3VzZWQgKi9cclxuZnVuY3Rpb24gcmVtb3ZlSW52YWxpZChlbCkge1xyXG4gIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJylcclxuICAgIGVsLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICB9XHJcbn1cclxudXNlcm5hbWUub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQodXNlcm5hbWUpXHJcbnBob25lLm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKHBob25lKVxyXG5lbWFpbC5vbmZvY3VzID0gKCkgPT4gcmVtb3ZlSW52YWxpZChlbWFpbClcclxuY291bnQub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQoY291bnQpXHJcblxyXG5uZXh0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHZhbGlkYXRlRm9ybSgpXHJcblxyXG4gIGxldCBpbnZhbGlkTmFtZSA9IHVzZXJuYW1lLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpLFxyXG4gICAgaW52YWxpZENsYXNzID0gdGFic1tjdXJyZW50VGFiXS5xdWVyeVNlbGVjdG9yKCcuaW52YWxpZCcpXHJcblxyXG4gICAgaWYoaW52YWxpZENsYXNzKSByZXR1cm5cclxuXHJcbiAgY3VycmVudFRhYisrXHJcbiAgXHJcbiAgaWYoY3VycmVudFRhYiA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdGb3JtJyk7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBsZXQgcHJvY2Vzc2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb2Nlc3NpbmcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Byb2Nlc3NpbmcgLi4uJykpO1xyXG4gICAgZm9ybS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9jZXNzaW5nLCBmb3JtKTtcclxuXHJcbiAgICByZWRpcmVjdE1haW5QYWdlKClcclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgQXJyYXkuZnJvbSh0YWJzKS5maW5kKHNob3dUYWIpXHJcbiAgc2hvd0J0bigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzaG93VGFiKGVsLCBpZHgpIHtcclxuICBpZihpZHggPT09IGN1cnJlbnRUYWIpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCdG4oKSB7XHJcbiAgaWYoY3VycmVudFRhYiA+PSB0YWJzLmxlbmd0aCAtIDEpIHtcclxuICAgIG5leHRUYWIuaW5uZXJIVE1MID0gJ9Ce0YLQv9GA0LDQstC40YLRjCdcclxuICB9IGVsc2Uge1xyXG4gICAgbmV4dFRhYi5pbm5lckhUTUwgPSAn0JTQsNC70LXQtSdcclxuICB9XHJcblxyXG4gIGN1cnJlbnRUYWIgPiAwXHJcbiAgICA/IHByZXZUYWIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXHJcbiAgICA6IHByZXZUYWIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59XHJcblxyXG5wcmV2VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGN1cnJlbnRUYWItLVxyXG4gIGlmKGN1cnJlbnRUYWIgPCAwKSB7XHJcbiAgICBjdXJyZW50VGFiID0gMFxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIEFycmF5LmZyb20odGFicykuZmluZChzaG93VGFiKVxyXG4gIHNob3dCdG4oKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gcmVkaXJlY3RNYWluUGFnZSgpIHtcclxuICBsZXQgdGltZXIgPSAxMVxyXG4gIHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgdGltZXItLVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3JtJykuaW5uZXJIVE1MID0gdGltZXJcclxuICAgIGlmKHRpbWVyID09PSAxKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL21lZ2FsYW5kcGFyay53ZWIuYXBwL1wiIFxyXG4gICAgfVxyXG4gIH0sIDEwMDApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgbGV0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJcIiksXHJcbiAgICBjdXJyZW50VGFicyA9IHRhYltjdXJyZW50VGFiXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpXHJcbiAgICB2YWxpZCA9IHRydWVcclxuXHJcbiAgY29uc3QgdXNlcm5hbWVWYWx1ZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgIHBob25lVmFsdWUgPSBwaG9uZS52YWx1ZS50cmltKCksXHJcbiAgICBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpLFxyXG4gICAgY291bnRWYWx1ZSA9IGNvdW50LnZhbHVlLnRyaW0oKSxcclxuICAgIGNvbnRhaW5zQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgaWYodXNlcm5hbWVWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKHVzZXJuYW1lLCBcItCS0LLQtdC00LjRgtC1INCk0JjQnlwiKVxyXG4gIH0gZWxzZSBpZih1c2VybmFtZVZhbHVlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCLQodC70LjRiNC60L7QvCDQutC+0YDQvtGC0LrQvtC1INCk0JjQnlwiKVxyXG4gIH0gZWxzZSBpZighdmFsaWRhdGVMbmFnKHVzZXJuYW1lVmFsdWUpKSB7XHJcbiAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCLQktCy0LXQtNC40YLQtSDRgNGD0YHRgdC60LjQtSDQsdGD0LrQstGLXCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFN1Y2Nlc3NGb3IodXNlcm5hbWUpXHJcbiAgfVxyXG5cclxuICBpZihwaG9uZVZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IocGhvbmUsIFwi0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIpXHJcbiAgfSBlbHNlIGlmKHBob25lVmFsdWUubGVuZ3RoIDwgMTgpIHtcclxuICAgIHNldEVycm9yRm9yKHBob25lLCBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCDRgdC70LjRiNC60L7QvCDQutC+0YDQvtGC0LrQuNC5XCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFN1Y2Nlc3NGb3IocGhvbmUpXHJcbiAgfVxyXG5cclxuICBpZihlbWFpbFZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IoZW1haWwsIFwi0JLQstC10LTQuNGC0LUgZW1haWxcIilcclxuICB9IGVsc2UgaWYoIXZhbGlkYXRlRW1haWwoZW1haWxWYWx1ZSkpIHtcclxuICAgIHNldEVycm9yRm9yKGVtYWlsLCBcItCS0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5IGVtYWlsXCIpXHJcbiAgfVxyXG5cclxuICBpZihjb3VudFZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IoY291bnQsIFwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQtdGC0LXQuVwiIClcclxuICB9XHJcbiAgfVxyXG5cclxuXHRcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVMbmFnKHVzZXJuYW1lKSB7XHJcbiAgcmV0dXJuICgvXlvQsC3Rj9CQLdCvXS8pLnRlc3QodXNlcm5hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xyXG4gIHJldHVybiByZS50ZXN0KGVtYWlsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG4gIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCBzbWFsbCA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJylcclxuICBpbnB1dC5jbGFzc05hbWUgPSAnaW52YWxpZCdcclxuXHJcbiAgaWYoaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJykpIHtcclxuICAgIHNtYWxsLmNsYXNzTmFtZSA9ICdpbnZhbGlkJ1xyXG4gICAgc21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZVxyXG4gICAgc21hbGwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG4gIGlucHV0LmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xyXG4gIGNvbnN0IHNtYWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NtYWxsJylcclxuICBzbWFsbHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJylcclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1pbk1heENvdW4obnVtKSB7XHJcbiAgaWYobnVtID4gMzApIHtcclxuICAgIGNvbnNvbGUubG9nKCdmJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qIEFkZCBwaG9uZSBtYXNrICs3KDk5OSkxMjMtNDUtNjcgKi9cclxucGhvbmUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYoICEoZXZlbnQua2V5ID09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dSaWdodCcgfHwgZXZlbnQua2V5ID09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PSAnVGFiJykpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKSB9XHJcbiAgIHZhciBtYXNrID0gJys3ICgxMTEpIDExMS0xMS0xMSc7IC8vINCX0LDQtNCw0LXQvCDQvNCw0YHQutGDXHJcblxyXG4gICBpZiAoL1swLTlcXCtcXCBcXC1cXChcXCldLy50ZXN0KGV2ZW50LmtleSkpIHtcclxuICAgICAgIC8vINCX0LTQtdGB0Ywg0L3QsNGH0LjQvdCw0LXQvCDRgdGA0LDQstC90LjQstCw0YLRjCB0aGlzLnZhbHVlINC4IG1hc2tcclxuICAgICAgIC8vINC6INC/0YDQuNC80LXRgNGDINC+0L/Rj9GC0Ywg0LbQtVxyXG4gICAgICAgdmFyIGN1cnJlbnRTdHJpbmcgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSBjdXJyZW50U3RyaW5nLmxlbmd0aDtcclxuICAgICAgIGlmICgvWzAtOV0vLnRlc3QoZXZlbnQua2V5KSkge1xyXG4gICAgICAgICAgIGlmIChtYXNrW2N1cnJlbnRMZW5ndGhdID09ICcxJykge1xyXG4gICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFN0cmluZyArIGV2ZW50LmtleTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBmb3IgKHZhciBpPWN1cnJlbnRMZW5ndGg7IGk8bWFzay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmIChtYXNrW2ldID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFN0cmluZyArIGV2ZW50LmtleTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gbWFza1tpXTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfSBcclxufSk7XHJcbiIsIi8qIFNob3cgaXRlbSBidG4gKi9cclxubGV0IHNob3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1idG4nKVxyXG5sZXQgY2FyZEhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX193cmFwcGVyJylcclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtKCkge1xyXG4gIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIGNhcmRIaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC0taGlkZGVuJylcclxufVxyXG5cclxuc2hvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dJdGVtKVxyXG5cclxuLy8gLyogQ3VycmVudCBkYXRlICovXHJcbi8vIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4vLyBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4vLyAgIGxldCBkZCA9IGRhdGUuZ2V0RGF0ZSgpXHJcbi8vICAgaWYgKGRkIDwgMTApIGRkID0gJzAnICsgZGRcclxuXHJcbi8vICAgbGV0IE1NID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4vLyAgIGlmIChNTSA8IDEwKSBNTSA9ICcwJyArIE1NXHJcblxyXG4vLyAgIGxldCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbi8vICAgaWYgKHl5eXkgPCAxMCkgeXl5eSA9ICcwJyArIHl5eXlcclxuXHJcbi8vICAgcmV0dXJuIHl5eXkgKyAnLScgKyBNTSArICctJyArIGRkXHJcbi8vIH1cclxuXHJcbi8vIGxldCBjdXJyZW50RGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSlcclxuLy8gZGF0ZUlucHV0LnZhbHVlID0gY3VycmVudERhdGVcclxuXHJcbmltcG9ydCAnLi9vcmRlci5jc3MnXHJcblxyXG4vKiBPcGVuIG1vZGFsICovXHJcbmxldCBvZmZlcnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmVyc19fbGlzdCcpXHJcbmxldCBwaG9uZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUnKVxyXG5sZXQgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKVxyXG5sZXQgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3dyYXBwZXInKVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChldmVudCkge1xyXG4gIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQudGFnTmFtZVxyXG5cclxuICBpZih0YXJnZXQgIT0gJ0JVVFRPTicpIHJldHVyblxyXG4gIFxyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn1cclxuXHJcbm9mZmVyc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbm5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59KVxyXG5cclxucGhvbmVTZWN0aW9uLmZvckVhY2goZWwgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG59KSIsImltcG9ydCAnLi9zaG93RnVsbExpbmsuY3NzJ1xyXG5pbXBvcnQge2l0ZW1zLCByZW5kZXJJdGVtLCByZW5kZXJMaX0gZnJvbSAnLi4vaXRlbXMvaXRlbSdcclxuaW1wb3J0IHtoZWFkZXJ9IGZyb20gJy4uL2l0ZW1zL2l0ZW0taGVhZGVyJ1xyXG5cclxubGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKVxyXG5cclxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYW5pbWF0aW9uRWxlbWVudClcclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0l0ZW0pXHJcbn0pXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtKGV2ZW50KSB7XHJcbiAgY29uc3QgaWQgPSArZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgaXRlbSA9IGl0ZW1zLmZpbmQoaSA9PiBpLmlkID09PSBpZCksXHJcbiAgICBsaXN0ID0gaXRlbS5saVxyXG5cclxuICBpbXBvcnQoJy4uL2l0ZW1zL2l0ZW0td2luLmNzcycpXHJcbiAgcmVuZGVySXRlbSh0aGlzLCBpdGVtKVxyXG4gIFxyXG4gIGltcG9ydCgnLi4vaXRlbXMvaGVhZGVyLWl0ZW0uY3NzJylcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fd3JhcHBlcicpLmJlZm9yZShoZWFkZXIpXHJcblxyXG4gIGlmKGxpc3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfSBlbHNlIHJlbmRlckxpKGxpc3QpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25FbGVtZW50KCkgeyBcclxuICB0aGlzLnN0eWxlLm1hcmdpbkxlZnQgPSAnMHB4J1xyXG4gIHRoaXMuc3R5bGUubWFyZ2luUmlnaHQgPSAnMHB4J1xyXG5cclxuICBjb25zdCBBTklNQVRJT05fU1BFRUQgPSAnLjY1cydcclxuXHJcbiAgbGV0IGVsZW1XaWR0aCA9IHRoaXMub2Zmc2V0V2lkdGgvMixcclxuICAgIGVsZW1IZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodC8yLCAgICAgIFxyXG4gICAgbW92aW5nRWxlbVggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvMiAtICh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBlbGVtV2lkdGgpLFxyXG4gICAgbW92aW5nRWxlbVkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LzIgLSAodGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBlbGVtSGVpZ2h0KSxcclxuICAgIHNjYWxlWCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvMikgLyAoZWxlbVdpZHRoKSxcclxuICAgIHNjYWxlWSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LzIpIC8gKGVsZW1IZWlnaHQpLFxyXG4gICAgaXRlbVBhdGggPSB0aGlzLmNoaWxkTm9kZXNbMV0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxyXG5cclxuXHJcbiAgLypDcmVhdGUgd3JhcHBlciBvbiBlbGVtZW50Ki9cclxuICBsZXQgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIFxyXG4gIHdyYXAuY2xhc3NOYW1lID0gJ3N0YXJ0J1xyXG4gIHRoaXMuYmVmb3JlKHdyYXApICAgICBcclxuICBcclxuICAvLyBDcmVhdGUgYmdcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNyZWF0ZUJnKClcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgICAgXHJcbiAgICAgIGNlbnRlckVsZW1lbnQod3JhcCwgdGhpcywgbW92aW5nRWxlbVgsIG1vdmluZ0VsZW1ZLCBBTklNQVRJT05fU1BFRUQpXHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIGNyZWF0ZUNsb25lKHRoaXMsIHNjYWxlWCwgc2NhbGVZLCBBTklNQVRJT05fU1BFRUQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICBzaG93SXRlbSh0aGlzKVxyXG4gICAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgICB9LCAxMDApICAgICAgXHJcbiAgICB9LCAwKVxyXG4gIH0sIDApICBcclxuXHJcbiAgdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMHB4J1xyXG59IFxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmcoKSB7XHJcbiAgbGV0IGJhY2tncm91bmRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBiYWNrZ3JvdW5kV3JhcC5jbGFzc05hbWUgPSAnZW1wdHknICAgICAgXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFja2dyb3VuZFdyYXApXHJcbiAgYmFja2dyb3VuZFdyYXAuY2xhc3NOYW1lICs9ICcgZmlsdGVyJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBjZW50ZXJFbGVtZW50KHdyYXAsIGVsLCBtb3ZpbmdFbGVtWCwgbW92aW5nRWxlbVksIEFOSU1BVElPTl9TUEVFRCkge1xyXG4gIHdyYXAuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gQU5JTUFUSU9OX1NQRUVEXHJcbiAgd3JhcC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbGVmdCwgdG9wJ1xyXG4gIHdyYXAuc3R5bGUud2lkdGggPSBlbC5jbGllbnRXaWR0aCArICdweCdcclxuICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcclxuICB3cmFwLmFwcGVuZChlbClcclxuICB3cmFwLnN0eWxlLmxlZnQgPSBtb3ZpbmdFbGVtWCArICdweCdcclxuICB3cmFwLnN0eWxlLnRvcCA9IG1vdmluZ0VsZW1ZICsgJ3B4J1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbG9uZShlbCwgc2NhbGVYLCBzY2FsZVksIEFOSU1BVElPTl9TUEVFRCkge1xyXG4gIGxldCBjbG9uZUhlaWdodCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSxcclxuICAgIGNsb25lV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSxcclxuICAgIGNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgY2xvbmUuc3R5bGUud2lkdGggPSBjbG9uZVdpZHRoXHJcbiAgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gY2xvbmVIZWlnaHRcclxuICBjbG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYydcclxuICBjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICBjbG9uZS5zdHlsZS56SW5kZXggPSAnMSdcclxuICBlbC5iZWZvcmUoY2xvbmUpXHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY292ZXJDbG9uZShjbG9uZSwgc2NhbGVYLCBzY2FsZVksIEFOSU1BVElPTl9TUEVFRClcclxuICB9LCAxMDApICBcclxufVxyXG5cclxuZnVuY3Rpb24gY292ZXJDbG9uZShlbCwgc2NhbGVYLCBzY2FsZVksIEFOSU1BVElPTl9TUEVFRCkge1xyXG4gIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IEFOSU1BVElPTl9TUEVFRFxyXG4gIGVsLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXHJcbiAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGVYfSwgJHtzY2FsZVl9KWBcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gc2hvd0l0ZW0oZWwpIHsgIFxyXG4vLyAgIGltcG9ydCgnLi4vaXRlbXMvaXRlbS13aW4uY3NzJylcclxuXHJcbi8vICAgcmVuZGVySXRlbShlbClcclxuIFxyXG4vLyAgIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4tYmFjaycpXHJcblxyXG4vLyAgIC8vIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrKVxyXG5cclxuLy8gICBmdW5jdGlvbiBiYWNrKCkge1xyXG4vLyAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuLy8gICB9XHJcbi8vIH0iLCJjbGFzcyBTbGlkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyYWdzdGFydCBhIHsgXHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlci13aW5kb3ctd2lkdGgge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzO1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtaXRlbSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1pdGVtIGltZyB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZTBkZmRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCw2NCw2NywwLjMpLDAgMnB4IDZweCAycHggcmdiYSg2MCw2NCw2NywwLjE1KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAuZHJhZ3N0YXJ0IHtcclxuICAgICAgICAvLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyYWJiaW5nIHtcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saXN0LmdyYWJiaW5nIGltZyB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLmRyYWdzdGFydCBhIHtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmFjdGlvbnMtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmFjdGlvbnNfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXdpbmRvdy13aWR0aFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJhdHRyYWN0aW9ucy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCI2YmI1OTFlZGUwOGVlMjJlOTMyOC5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JHQsNGC0YPRgjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiM2IxYjU2MDRmYWY3OGNiMzgxOGUuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCt0LrRgdGC0YDQuNC8LdC/0LDRgNC6PC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJiOGM2MTMzNzUwZjJiNTM2NjhiYS5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JTQtdGC0YHQutC40Lkg0YHQsNC0PC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImF0dHJhY3Rpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImF0dHJhY3Rpb25zLWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCI4MjkzNjllYjVhZmY1ODU0YTYwZC5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImF0dHJhY3Rpb25zLWRlc2NyaXB0aW9uXCI+0JvQsNCx0LjRgNC40L3RgjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiMzk5ZjM2ZWI0OWY5YjExZTI3MzYuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCY0LPRgNC+0LLRi9C1INCw0LLRgtC+0LzQsNGC0Ys8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2xpZGVyLWNvbXBvbmVudCcsIFNsaWRlcilcclxuXHJcbmNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRyYWN0aW9ucy1saXN0JyksXHJcbnNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWNvbnRhaW5lcicpLFxyXG4gIHNsaWRlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dHJhY3Rpb25zLWl0ZW0nKSlcclxuXHJcbmlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgc2xpZGVyV3JhcHBlci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45ICsgXCJweFwiXHJcbn0gZWxzZSB7XHJcbiAgc2xpZGVyV3JhcHBlci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41ICsgXCJweFwiXHJcbn1cclxuXHJcbmxldCBjdXJyZW50SW5kZXggPSAwXHJcbmxldCBzdGFydFBvc2l0aW9uID0gMFxyXG5sZXQgY3VycmVudFRyYW5zbGF0ZSA9IDBcclxubGV0IHByZXZUcmFuc2xhdGUgPSAwXHJcbmxldCBpc0RyYWdnaW5nID0gZmFsc2VcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcbn0sIGZhbHNlKTtcclxuXHJcbnNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgc2xpZGUuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC45ICsgXCJweFwiXHJcbiAgICBzbGlkZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC41ICsgJ3B4J1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjUgKyBcInB4XCJcclxuICAgIHNsaWRlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMgKyAncHgnXHJcbiAgfVxyXG4gIHNsaWRlLnN0eWxlLm1hcmdpblJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuMSArICdweCdcclxuICBzbGlkZXJJbWcgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxyXG5cclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXHJcbiAgXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KGluZGV4KSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZClcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKVxyXG5cclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdG91Y2hTdGFydChpbmRleCkpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0b3VjaEVuZClcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdG91Y2hNb3ZlKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdG91Y2hFbmQpXHJcbn0pXHJcblxyXG5zbGlkZXJDb250YWluZXIub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGluZGV4KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgIGN1cnJlbnRJbmRleCA9IGluZGV4XHJcbiAgICBzdGFydFBvc2l0aW9uID0gZ2V0UG9zaXRpb25YKGUpXHJcbiAgICBpc0RyYWdnaW5nID0gdHJ1ZVxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyYWJiaW5nJylcclxuICAgIGNsZWFySW50ZXJ2YWwoaW5maW5pdHlTbGlkZXIpXHJcbiAgfSBcclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcclxuICBpZihpc0RyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBnZXRQb3NpdGlvblgoZSlcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBwcmV2VHJhbnNsYXRlICsgY3VycmVudFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvblxyXG4gICAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y3VycmVudFRyYW5zbGF0ZX1weClgXHJcbiAgICAgIFxyXG4gICAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAuMDAxc1wiXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaEVuZChlKSB7IFxyXG4gIGlzRHJhZ2dpbmcgPSBmYWxzZVxyXG4gIGNvbnN0IG1vdmVkQnkgPSBjdXJyZW50VHJhbnNsYXRlIC0gcHJldlRyYW5zbGF0ZVxyXG5cclxuICBpZihtb3ZlZEJ5ID4gMTAwICYmIGN1cnJlbnRJbmRleCA+IDApIGN1cnJlbnRJbmRleCAtPSAxXHJcbiAgaWYobW92ZWRCeSA8IC0xMDAgJiYgY3VycmVudEluZGV4IDwgc2xpZGVzLmxlbmd0aCAtIDEpIGN1cnJlbnRJbmRleCArPSAxXHJcblxyXG5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqIC13aW5kb3cuaW5uZXJXaWR0aFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC41IC0gd2luZG93LmlubmVyV2lkdGggKiAuMSlcclxuICB9XHJcblxyXG4gIHByZXZUcmFuc2xhdGUgPSBjdXJyZW50VHJhbnNsYXRlXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y3VycmVudFRyYW5zbGF0ZX1weClgXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAxLjI1c1wiXHJcbiAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWJiaW5nJylcclxuICBpZihtb3ZlZEJ5ICE9IDApIHtcclxuICAgIGxldCBjYXB0dXJlQ2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXB0dXJlQ2xpY2ssIHRydWUpOyAvLyBjbGVhbnVwXHJcbiAgICB9XHJcbiAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUNsaWNrLCB0cnVlKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb3NpdGlvblgoZSkge1xyXG4gIHJldHVybiBlLnR5cGUuaW5jbHVkZXMoJ21vdXNlJykgPyBlLnBhZ2VYIDogZS50b3VjaGVzWzBdLmNsaWVudFhcclxufVxyXG5cclxuY29uc3QgaW5maW5pdHlTbGlkZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgY3VycmVudEluZGV4KysgIFxyXG4gIGlmKGN1cnJlbnRJbmRleCA+IDQpIGN1cnJlbnRUcmFuc2xhdGUgPSAwLCBjdXJyZW50SW5kZXggPSAwXHJcblxyXG4gIG1lZGlhUXVlcmllc1RyYW5zbGF0ZSgpXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y3VycmVudFRyYW5zbGF0ZX1weClgXHJcbiAgc2xpZGVyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAxLjI1c1wiXHJcbn0sIDI1MDApXHJcblxyXG5mdW5jdGlvbiBtZWRpYVF1ZXJpZXNUcmFuc2xhdGUoKSB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAoLXdpbmRvdy5pbm5lcldpZHRoICogLjkgLSBwYXJzZUludChzbGlkZXNbMF0uc3R5bGUubWFyZ2luUmlnaHQpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC41IC0gcGFyc2VJbnQoc2xpZGVzWzBdLnN0eWxlLm1hcmdpblJpZ2h0KSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTY3JpcHQoc3JjKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIHM7XHJcbiAgICAgIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgcy5zcmMgPSBzcmM7XHJcbiAgICAgIHMub25sb2FkID0gcmVzb2x2ZTtcclxuICAgICAgcy5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xyXG4gIH0pO1xyXG59IiwiICBmdW5jdGlvbiBsb2FkTWFwcygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1L3NlcnZpY2VzL2NvbnN0cnVjdG9yLzEuMC9qcy8/dW09Y29uc3RydWN0b3IlM0EzOWIxOWRmOTcxYjdiZmFhYWZlODFmNGQxMDI5NTQ3OTlhNmJjYTgzZDFhNWVlNWYyMTE1NDQzNzIzNjAxNmU2JmFtcDt3aWR0aD1hdXRvJmFtcDtoZWlnaHQ9NDYwJmFtcDtsYW5nPXJ1X1JVJmFtcDtzcmNvbGw9dHJ1ZVwiO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRpdk1hcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtbWFwJylcclxuICAgICAgICBkaXZNYXBzLmFwcGVuZChzY3JpcHQpXHJcbiAgICB9LCAxMDAwKTtcclxuICB9ICBcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsb2FkTWFwcygpKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2l0ZW0td2luX2Nzc1wiOlwiN2NiYmE0ZDdlYmRmYjE3Y2EwNWRcIixcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtc19oZWFkZXItaXRlbV9jc3NcIjpcIjgzMjY2NGEwMjQ3ZTUyZDg5YjJlXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jc3NcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiY29kZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwidmFyIGNyZWF0ZVN0eWxlc2hlZXQgPSAoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0dmFyIG9uTGlua0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzLlxuXHRcdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gbnVsbDtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHR2YXIgcmVhbEhyZWYgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmhyZWYgfHwgZnVsbGhyZWY7XG5cdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlYWxIcmVmICsgXCIpXCIpO1xuXHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuXHRcdFx0ZXJyLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRlcnIucmVxdWVzdCA9IHJlYWxIcmVmO1xuXHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG5cdFx0XHRyZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZTtcblx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbnZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYubWluaUNzcyA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHR2YXIgY3NzQ2h1bmtzID0ge1wic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2l0ZW0td2luX2Nzc1wiOjEsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfaGVhZGVyLWl0ZW1fY3NzXCI6MX07XG5cdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuXHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IGxvYWRTdHlsZXNoZWV0KGNodW5rSWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXTtcblx0XHRcdHRocm93IGU7XG5cdFx0fSkpO1xuXHR9XG59O1xuXG4vLyBubyBobXIiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29kZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLyogUGF0aCBjc3MvanMgdG8gaXRlbXMgKi9cclxuY29uc3QgcGF0SG9tZSA9ICgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICByZXF1aXJlKCcuL3N0eWxlLmNzcycpIFxyXG4gICAgLy8gcmVxdWlyZSgnLi9hbmltYXRpb24vYW5pbWF0aW9uLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi9mb290ZXIuanMnKSBcclxuICAgIHJlcXVpcmUoJy4vbWVudS1uYXYnKSBcclxuICAgIHJlcXVpcmUoJy4vbW9kYWwtd2luZG93LmpzJykgXHJcbiAgICByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKSBcclxuICAgIHJlcXVpcmUoJy4vdG91Y2gtc2xpZGVyLmpzJykgXHJcbiAgICByZXF1aXJlKCcuL3lhLW1hcHMuanMnKSBcclxuICAgIC8vIHJlcXVpcmUoJy4vYW5pbWF0aW9uLy9hbmltYXRpb24nKVxyXG4gICAgcmVxdWlyZSgnLi9pdGVtcy9pdGVtcycpXHJcbiAgICByZXF1aXJlKCcuL3Nob3dGdWxsTGluay9zaG93TGlua0Z1bGwnKVxyXG4gICAgcmVxdWlyZSgnLi9sYXp5TG9hZEltZycpXHJcbiAgfVxyXG4gIHJldHVyblxyXG59XHJcbnBhdEhvbWUoKVxyXG5cclxuY29uc3QgcGF0aE9yZGVyID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvb3JkZXIuaHRtbFwiKSB7XHJcbiAgICByZXF1aXJlKCcuL29yZGVyLmNzcycpXHJcbiAgICByZXF1aXJlKCcuL21lbnUtbmF2JylcclxuICAgIHJlcXVpcmUoJy4vZm9vdGVyLmpzJylcclxuICAgIHJlcXVpcmUoJy4vbW9kYWwtd2luZG93LmpzJylcclxuICAgIHJlcXVpcmUoJy4vb3JkZXIuanMnKVxyXG4gIH1cclxufSBcclxucGF0aE9yZGVyKClcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=