class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /*Remove arrows*/
        input[type=number].no-spinner::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
          -webkit-appearance: none; 
          margin: 0; 
        }
        input.invalid {
          background-color: rgb(250, 234, 234);
        }
        .tab {
          display: none;
        }
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
          display: block;
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
        .modal__field input, .modal__field select {
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
        .package__description {
          font-family: Nunito,sans-serif;
          font-size: .9rem;
          font-weight: 400;
          line-height: 1.6;
          color: #212529;
          text-align: left;
          padding-top: 10px;
          margin: 0;
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
            <form id="regForm" class="form">
              <div class="tab">
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
              </div>

              <div class="tab">
                <div class="modal__field">
                  <label for="count">Количество детей</label>
                  <input id="count" type="number" placeholder="Введите число детей">
                </div>
                <div class="modal__field">
                  <label for="package">Пакетное предложение</label>
                  <select name="package" id="package">
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
// let navLink = document.querySelector('.menu__btn')

// navLink.addEventListener('click', (e) => {
//   e.preventDefault()
//   modalWindow.style.display = 'block'
// })

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
  nameInp = document.querySelector('input[id="name"]'),
  phone = document.querySelector('input[id="phone"]'),
  email = document.querySelector('input[id="email"]')
  

let currentTab = 0
tabs[currentTab].style.display = 'block'


/* Remove class invalid focused */
function removeInvalid(el) {
  if(el.classList.contains('invalid')) {
    el.classList.remove('invalid')
  }
}
nameInp.onfocus = () => removeInvalid(nameInp)
phone.onfocus = () => removeInvalid(phone)
email.onfocus = () => removeInvalid(email)

nextTab.addEventListener('click', () => {
  validateForm()

  let invalidName = nameInp.classList.contains('invalid'),
  invalidPhone = phone.classList.contains('invalid'),
  invalidEmail = email.classList.contains('invalid')
  
  if(invalidName || invalidPhone || invalidEmail) return
  
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
  currentTab++
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
  let tabs = document.querySelectorAll('.tab'), 
    currentInputs = tabs[currentTab].querySelectorAll('input')
  
  Array.from(currentInputs).forEach(el => {
    if(el.value === '') {
      el.classList.add('invalid')
    }
  })
}


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

// nameInp.onblur = (event) => {
//   console.log(event);
//   if(nameInp.value === '') {
//     nameInp.classList.add('invalid')
//   }
// };







