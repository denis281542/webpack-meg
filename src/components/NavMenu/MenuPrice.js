import React from "react";

export const MenuPrice = () => {
  return(<>
      <div class="wrap-table">
        <table class="birthdays__price price">
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Цена (руб.)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="price__subtitle">Анимационная программа (от 0 до 5 лет)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Праздник по сценарию (45 мин) 1 вед Любой персонаж</td>
              <td>2500</td>
              <td></td>
            </tr>
            <tr>
              <td>Мини поздравление + генератор мыльных пузырей (20 мин)</td>
              <td>2000</td>
              <td></td>
            </tr>
            <tr class="price__subtitle">
              <td>Квесты до 5 лет</td>
              <td>Будни</td>
              <td>Выходные</td>
            </tr>
            <tr>
              <td>
                Герои в Масках
                <br/>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Лол (Единорог, Королева пчёл)
                <br/>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Ми-Ми-Мишка
                <br/>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Три кота
                <br/>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                Щенячий Патруль
                <br/>
                1 час
              </td>
              <td>3200</td>
              <td>4000</td>
            </tr>
          </tbody>
        </table>
        <button id="close-prices-btn" class="modal__btn-close">
          <i class="far fa-window-close"></i>
        </button>
      </div>
    </>
  )
}