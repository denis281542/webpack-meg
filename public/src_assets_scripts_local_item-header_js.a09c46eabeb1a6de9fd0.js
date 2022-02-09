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
  }
}

customElements.define('item-header-component', HeaderItem)

const btnBack = document.querySelector('.nav__btn-back')

btnBack.addEventListener('click', () => {
  console.log(window.location.pathname = '/')
})



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2l0ZW1zLmNzcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2l0ZW0taGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW0taGVhZGVyX2pzLmEwOWM0NmVhYmViMWE2ZGU5ZmQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL2l0ZW1zLmNzcydcclxuXHJcbmNsYXNzIEhlYWRlckl0ZW0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxNzMlKSBibHVyKDEwcHgpO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdiBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdl9fYnRuLWJhY2sge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZfX2J0bi1iYWNrIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZfX25ld3Mge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDc1cHggMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2X19idG4tYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAg0J3QsNC30LDQtFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2X19uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICDQnNC10LPQsNC70LXQvdC0INCi0LDQs9C40LsgLSDQndC+0LLQvtGB0YLQuFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpdGVtLWhlYWRlci1jb21wb25lbnQnLCBIZWFkZXJJdGVtKVxyXG5cclxuY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J0bi1iYWNrJylcclxuXHJcbmJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gJy8nKVxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==