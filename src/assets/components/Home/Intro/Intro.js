import React from "react";
import './intro.scss'
import { Link } from "react-router-dom";

export const Intro = () => {
  return (<>
    <section className="intro">
      <div className="intro__wrapper"> 
        <div className="intro__container">
          <h2 className="intro__title">День рождения</h2>
          <p className="intro__price">от 2000 руб.</p>
          <p className="intro__description">любимые персонажи и сценарии для всех возрастов</p>

          <Link className="intro__btn" to="/order">Заказать!</Link>
          
        </div>
      </div>
    </section>
  </>)
}