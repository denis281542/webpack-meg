import React from "react"
import ReactDOM from "react-dom";
import './order.scss'
import { useNavigate } from 'react-router-dom';
import { ListOffers } from "./ListOffers";


export const Order = () => {
  let navigate = useNavigate();

  function handleSubmit() {
    navigate(-1);
  }

	return(<>
    <button onClick={() => handleSubmit()}>Назад</button>
    <section className="offers">
      <div className="container__offers">
        <h1 className="offers__title">Готовые предложения</h1>
        <p className="offers__description">
          мы ценим ваше время и собрали самые востребованные 
          наборы услуг, ознакомьтесь и воспользуйтесь кнопкой 
          заказа дня рождения, мы перезвоним для уточнения всех деталей
        </p>

        <ListOffers className="offers__list" />
        
      </div>
    </section>

    <section className="phone">
      <p className="phone__title">
        Для заказа дня рождения позвоните
      </p>
      <a href="tel:+7-800-600-33-92" className="phone__number">8-800-600-33-92</a>
      <p className="phone__order">
        или воспользуйтесь кнопкой для предзаказа
      </p>
      <button className="phone__btn btn">Заказать день рождения</button>
    </section>

    <section className="banquet">
      <div className="container__offers">
        <a className="banquet__linkr" target="_blank" 
          href="https://drive.google.com/file/d/1jxywurnnp0_zKAn4MjXN1kT8-UJRFdxT/view">
          <i className="far fa-file-pdf"></i>
          <span>Банкетное меню</span>
        </a>
      </div>
    </section>

    <section className="birthdays">
      <div className="container__offers">
        <h3 className="birthdays__title">
          Подробнее о Днях рождения
        </h3>
        <p className="birthdays__description">помимо готовых предложений вы можете скомбинировать любые из наших услуг, 
          воспользуйтесь кнопкой заказа дня рождения, мы перезвоним и обговорим все нюансы
        </p>

        <div className="birthdays__tabs">
          <div className="birthdays__bookmark">
            <button data-id="1" className="bookmark bookmark--active">
              <div id="btnBookmark"></div>
              до 5 лет</button>
            <button data-id="2" className="bookmark">старше 5 лет</button>
            <button data-id="3" className="bookmark">доп. услуги</button>
          </div>

          <p className="birthdays__item">
            Пригласите любимого героя на праздник и ваш ребенок сможет окунуться в
            увлекательный мир сказок. Интересные игры, конкурсы, отважные задания и
            хитрые головоломки никого не оставят равнодушными. Даже взрослые
            родители на мгновение смогут стать героями сказок вместе со своими детьми.
          </p>
        </div>
        <div className="birthdays__content">
          <div className="birthdays__tables"> </div>          
        </div>
      </div>
    </section>

    <section className="phone down">
      <p className="phone__title">
        Для заказа дня рождения позвоните
      </p>
      <a href="tel:+7-800-600-33-92" className="phone__number">8-800-600-33-92</a>
      <p className="phone__order">
        или воспользуйтесь кнопкой для предзаказа
      </p>
      <button className="phone__btn btn">Заказать день рождения</button>
    </section>
	</>)
}