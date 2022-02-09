import React, {useState, useRef} from "react";
import { Input } from "./Input";
import { Btn } from "./Btn";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../store/slices/userSlice";

export const ModalContent = () => {
  const tabSelector = useRef(null)
  const [tab, setTab] = useState(0)
  const [empty, setEmpty] = useState(true)
  const dispatch = useDispatch()
  const description = useSelector(state => state.user.order.description)

  const [inputsFirst, setInputsFirst] = useState([
    {id: 1, htmlFor: 'date', label: 'Дата проведения праздника', type: 'date', error: 'Введите дату', value: '', isError: false },
    {id: 2, htmlFor: 'name', label: 'ФИО', type: 'text', error: 'Введите ФИО', value: '', isError: false },
    {id: 3, htmlFor: 'phone', label: 'Мобильный телефон', type: 'tel', error: 'Введите номер телефона', value: '', isError: false },
    {id: 4, htmlFor: 'email', label: 'E-mai', type: 'email', error: 'Введите email', value: '', isError: false },
  ]),
    inputsSecond = [
    {id: 1, htmlFor: 'count', label: 'Количество детей', type: 'number', error: 'Введите число детей' },
    {id: 2, htmlFor: 'package', label: 'Пакетное предложение', type: 'text', error: 'Введите ФИО' },
  ]

  
  const onChange = e => {
    setInputsFirst(
      inputsFirst.map(input => {
        if(input.htmlFor === e.target.name) {
          input.value = e.target.value
        }
        return input
      })
    )
  }
  // console.log(input);

  const next = () => {
    dispatch(createOrder({
      order: {
        date: document.querySelectorAll('input')[0].value,
        name: document.querySelectorAll('input')[1].value,
        phone: document.querySelectorAll('input')[2].value,
        email: document.querySelectorAll('input')[3].value,
        description: description
      }
    }))
    // setTab(tab + 1)
    // if(tab >= 1) setTab(1)

  }

  const prev = () => {
    if(tab <= 0) return
    setTab(tab - 1)
  }

  const hidePrevBtn = () => {
    if(tab === 0) {
      return 'prev-btn--hide'
    } else {
      return ''
    }
  }

  return(
    <form id="regForm" className="form">
      <div className="tab__list" style={{transform: `translateX(-${tab * 175}%)`}}>
        <div className="tab__wrap">
          <div ref={tabSelector} className="tab">
            {inputsFirst.map(input => {
              return(
                <Input
                  input={input}
                  key={input.id}
                  name={input.htmlFor}
                  setEmpty={setEmpty}
                  value={input.value}
                  onChange={onChange}
                  isError={input.isError}
                />
              )
            })}
          </div>
        </div>

        <div className="tab__wrap">
          <div className="tab">
            {inputsSecond.map(input => {
              return(
                <Input 
                  key={input.id}
                  input={input}
                />
              )
            })}
            {/* <div className="modal__field">
              <label htmlFor="count">Количество детей</label>
              <input id="count" type="number" placeholder="Введите число детей"/>
              <small>Error message</small>
            </div>
            <div className="modal__field">
              <label htmlFor="package">Пакетное предложение</label>
              <select className="package" name="package" id="package">
                <option value="6606">Базовый (до 10 чел.) - 4700.00 RUB</option>
                <option value="6608">Премиум (до 10 чел.) - 7900.00 RUB</option>
              </select>
            </div> */}
            <p className="package__description">
              Квест с 1 аниматором -1 час. Аренда банкетной комнаты -1 час. украшение банкетного стола (скатерть, посуда, салфетки).Гелиевые шары-10шт. пригласительные в кино-10шт. Торжественный вынос торта.
            </p>
          </div>
        </div>
        
      </div>
      <div className="modal__buttons">

        <Btn  
          type="button"        
          text="Назад"
          className={"modal__btn prev-btn " + hidePrevBtn() }
          onClick={() => prev()}
        />

        <Btn 
          // disabled={empty}
          type="button"
          text="Далее"
          className="modal__btn next-btn"
          onClick={() => next()}
        />

      </div>
    </form>
  )
}