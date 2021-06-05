class Slider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .attractions-list {
          display: inline-flex;
          height: 100vh;
          transform: translateX(0);
          overflow: hidden;
          transition: transform .3s;
          cursor: grab;
        }
        .attractions-item {
          list-style: none;
          width: 100vw;
          max-height: 100vh;
          border-radius: 3px;
          box-shadow: 0 0 0 1px #e0dfde;
          text-align: center;
          max-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .attractions-link {
          color: #444444;
          text-decoration: none;
        }
        .attractions-img {
          list-style: none;
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 20px;
          background-position: center;
          transition: .5s all;
          transition: transform 0.3s ease-in-out;
        }
        .attractions-description {
          font-weight: 700;
          line-height: 1.35;
        }
        .attractions-1 {
          background: url('/src/assets/images/attraction1.jpg');
        }
        
        .attractions-1:hover {
          background: url('/src/assets/images/attraction1-1.jpg');
        }
        
        .attractions-2 {
          background: url('/src/assets/images/attraction2.jpg');
        }
        
        .attractions-2:hover {
          background: url('/src/assets/images/attraction2-1.jpg');
        }
        
        .attractions-3 {
          background: url('/src/assets/images/attraction3.jpg');
        }
        
        .attractions-3:hover {
          background: url('/src/assets/images/attraction3-1.jpg');
          background-position: center;
        
        }
        
        .attractions-4 {
          background: url('/src/assets/images/attraction4.jpg');
        }
        
        .attractions-4:hover {
          background: url('/src/assets/images/attraction4-1.jpg');
          background-position: center;
        }
        
        .attractions-5 {
          background: url('/src/assets/images/attraction5.jpg');
        }
        
        .attractions-5:hover {
          background: url('/src/assets/images/attraction5-1.jpg');
          background-position: center;
        } 
        .grabbing {
          cursor: grabbing;
        }      
        .grabbing ,attractions-item a {
          transform: scale(0.9);
        }      

      </style>

      <ul class="attractions-list">
        <li class="attractions-item">
          <a class="attractions-link" href="#">
            <div class="attractions-img attractions-1"></div>
            <h3 class="attractions-description">Батут</h3>
          </a>
        </li>
        <li class="attractions-item fade">
          <a class="attractions-link" href="#">
            <div class="attractions-img attractions-2"></div>
            <h3 class="attractions-description">Экстрим-парк</h3>
          </a>
        </li>
        <li class="attractions-item fade">
          <a class="attractions-link" href="#">
            <div class="attractions-img attractions-3"></div>
            <h3 class="attractions-description">Детский сад</h3>
          </a>
        </li>
        <li class="attractions-item fade">
          <a class="attractions-link" href="#">
            <div class="attractions-img attractions-4"></div>
            <h3 class="attractions-description">Лабиринт</h3>
          </a>
        </li>
        <li class="attractions-item fade">
          <a class="attractions-link" href="#">
            <div class="attractions-img attractions-5"></div>
            <h3 class="attractions-description">Игровые автоматы</h3>
          </a>
        </li>
      </ul>
    `;
  }
}

customElements.define('slider-component', Slider)

/* Slider */
const slider = document.querySelector('.attractions-list'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))
