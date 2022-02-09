import React from "react"
import './Food.scss'
import {Button} from './Button'

export const FoodMenu = () => {
  return(<>
    <section className="cafe">
    <div className="cafe-bg">
      <div className="cafe-wrapper">
        <div>
          <h2 className="cafe-title">Кафе и пиццерия</h2>
          <div className="cafe-buttons">

            <Button
              className="cafe-btn"
              innerText="Основно меню"
              href="/main-food"
            />

            <Button
              className="pizza-btn"
              innerText="Пицца-меню"
              href="/pizza-food"
            />

          </div>
        </div>
      </div>
    </div>
    <div>
      <Button
        className="kids-btn"
        innerText="Детское меню"
        href="https://drive.google.com/file/d/1C5SXzUwDE304R88Tp09alRgxiHi_qV9D/view"
      />
    </div>
  </section>
  </>)
}