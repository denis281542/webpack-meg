class singIn extends HTMLElement {
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
            display: block;
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
            background-color: #6c757d;

          }
          .modal .next-btn {
            background-color: #3490dc;
            margin-left: 10px;
            cursor: pointer;
            position: relative;
          }
          .modal .prev-btn {
            display: inline;
            background-color: #1a73e8;
            cursor: pointer;
            position: relative;
            font-weight: 600;
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
          .form {
            max-width: 400px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }   
          .error {
            border-color: red;
            background-color: rgb(250, 234, 234);
          } 
          .success {
            border-color: #2ecc71;
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
        <button id="modal-open">Создать</button>
        <div class="modal__wrapper">
          <div class="modal">
            <div class="modal__form">
              <form id="sing-in" class="form">
                <div class="tab">
                  <div class="modal__field">
                    <label for="name">Введите имя</label>
                    <input id="name" type="text" placeholder="Введите имя">
                  </div>
                  <div class="modal__field">
                    <label for="email">Введите email</label>
                    <input id="email" type="email" placeholder="Введите email">
                  </div>
                  <div class="modal__field">
                    <label for="password">Введите пароль</label>
                    <input id="password" type="password" placeholder="Введите password">
                  </div>
                  <div class="modal__field">
                    <label for="password-confirm">Повторите пароль</label>
                    <input id="password-confirm" type="password" placeholder="Повторите пароль">
                  </div>                  
                </div>
                <div class="modal__buttons">
                  <button type="submit" class="modal__btn prev-btn">Создать</button>    
                </div>
              </form>
            </div>
            
          </div>
        </div>
      `
    }
  }
 
  
customElements.define('sing-in', singIn)


const modalBtn = document.getElementById('modal-open')
const modal = document.querySelector('.modal__wrapper')
const form = document.getElementById('sing-in')
const input = form.querySelector('input')

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

form.addEventListener('submit', e => {
  e.preventDefault()
  let email = e.target.querySelector('#email').value.trim()
  let name = e.target.querySelector('#name').value.trim()
  let password = e.target.querySelector('#password').value.trim()
  let passwordConfirm = e.target.querySelector('#password-confirm').value.trim()

  isValid(email)

  createUser(name, email, password)

  form.querySelectorAll('input').forEach(el => {
    el.value = ""
  })
})

function createUser(name, email, password) {
  fetch('https://megalandpark-default-rtdb.europe-west1.firebasedatabase.app/users.json ', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    })
  })
}

function isValid(input) {
  if(input.length <=2) {
    input.className = 'error'
  } else {
    input.className = 'success'
  }
}



