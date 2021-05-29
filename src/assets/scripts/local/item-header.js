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