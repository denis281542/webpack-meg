class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .header {
          background-color: #00b3e4;
          position: fixed;
          z-index: 2;
          width: 100%;
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
        .menu__left li, .menu__right li {
          list-style: none;
        }
        .menu__left {
          order: 0;
          width: 498px;
        }
        .menu__right {
          order: 2;
          width: 222px;
        }
        .menu a {
          text-decoration: none;
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
      </style>
      <div class="header__menu-bg">
        <header class="header">
          <nav class="menu">
            <ul class="menu__left">
              <li>
                <a href="">Н.Тагил</a>
              </li>
              <li>
                <a href="">Парк</a>
              </li>
              <li>
                <a href="">Кафе</a>
              </li>
              <li>
                <a href="">День рождения</a>
              </li>
              <li>
                <a href="">Мероприятия</a>
              </li>
            </ul>
            <ul class="menu__right">
              <li>
                <a href="">Акции</a>
              </li>
              <li>
                <a href="">Цены</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
            <a href="/">
              <img src="/src/assets/images/logo.png" alt="">
            </a>
            <a type="a" class="menu__btn" href="#">Заказать праздник</a>
            <div class="toggle__wrapper">
              <button class="menu__toggle">Меню</button>
            </div>
          </nav>
        </header>
      </div>
    `;
  }
}

customElements.define('header-component', Header)
