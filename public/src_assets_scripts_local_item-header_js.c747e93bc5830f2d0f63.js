(self["webpackChunkcode"] = self["webpackChunkcode"] || []).push([["src_assets_scripts_local_item-header_js"],{

/***/ "./src/assets/scripts/local/items.css":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/items.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/item-header.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/local/item-header.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.css */ "./src/assets/scripts/local/items.css");


class HeaderItem extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .header {
          padding: 18px 20px;
          background-color: rgba(250, 250, 250, 0.9);
          position: relative;
          max-width: 100vw;
          width: 100%;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          position: fixed;
          backdrop-filter: saturate(173%) blur(10px);
        }      
        .nav {
          text-align: center;
        }
        .nav a {
          text-decoration: none;
        }
        .nav__btn-back {
          font-size: 0;
          padding: 20px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .nav__btn-back i {
          font-size: 20px;
          color: #333;
        }
        .nav__news {
          font-size: 12px;
          font-weight: 600;
          color: #333;
        }
        @media (max-width: 640px) {
          .nav {
            height: auto;
          }
          .item {
            padding: 75px 20px;
          }
        }
      </style>
      <header class="header">
        <nav class="nav">
            <a class="nav__btn-back" href="javascript:history.back()">
                <i class="fas fa-chevron-left"></i>
                Назад
            </a>
            <a class="nav__news">
                Мегаленд Тагил - Новости
            </a>
        </nav>
      </header>
    `
  }
}

customElements.define('item-header-component', HeaderItem)

let btnBack = document.querySelector('.nav__news')

btnBack.addEventListener('click', () => {
  // javascript:history.back()
  window.location.pathname = "/"
})

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2l0ZW1zLmNzcz8yYjY4Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvaXRlbS1oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJmaWxlIjoic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW0taGVhZGVyX2pzLmM3NDdlOTNiYzU4MzBmMmQwZjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL2l0ZW1zLmNzcydcclxuXHJcbmNsYXNzIEhlYWRlckl0ZW0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxNzMlKSBibHVyKDEwcHgpO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdiBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdl9fYnRuLWJhY2sge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZfX2J0bi1iYWNrIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZfX25ld3Mge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDc1cHggMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2X19idG4tYmFja1wiIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICDQndCw0LfQsNC0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZfX25ld3NcIj5cclxuICAgICAgICAgICAgICAgINCc0LXQs9Cw0LvQtdC90LQg0KLQsNCz0LjQuyAtINCd0L7QstC+0YHRgtC4XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2l0ZW0taGVhZGVyLWNvbXBvbmVudCcsIEhlYWRlckl0ZW0pXHJcblxyXG5sZXQgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX25ld3MnKVxyXG5cclxuYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXHJcbiAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvXCJcclxufSkiXSwic291cmNlUm9vdCI6IiJ9