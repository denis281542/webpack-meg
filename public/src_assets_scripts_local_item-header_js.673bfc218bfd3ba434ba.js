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
            <a class="nav__news" href="javascript:history.back()">
                Мегаленд Тагил - Новости
            </a>
        </nav>
      </header>
    `
  }
}

customElements.define('item-header-component', HeaderItem)

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2l0ZW1zLmNzcz8yYjY4Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvaXRlbS1oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwRCIsImZpbGUiOiJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbS1oZWFkZXJfanMuNjczYmZjMjE4YmZkM2JhNDM0YmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vaXRlbXMuY3NzJ1xyXG5cclxuY2xhc3MgSGVhZGVySXRlbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC45KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE3MyUpIGJsdXIoMTBweCk7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2IGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2X19idG4tYmFjayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdl9fYnRuLWJhY2sgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdl9fbmV3cyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNzVweCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZfX2J0bi1iYWNrXCIgaHJlZj1cImphdmFzY3JpcHQ6aGlzdG9yeS5iYWNrKClcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdl9fbmV3c1wiIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCI+XHJcbiAgICAgICAgICAgICAgICDQnNC10LPQsNC70LXQvdC0INCi0LDQs9C40LsgLSDQndC+0LLQvtGB0YLQuFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpdGVtLWhlYWRlci1jb21wb25lbnQnLCBIZWFkZXJJdGVtKSJdLCJzb3VyY2VSb290IjoiIn0=