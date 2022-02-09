import React, {useState} from 'react'
import { CloseBtn } from '../../Modal/CloseBtn'
import ListItem from './ListItem'

const ItemModal = ({closeModal, item}) => {
    return(
        <div className="item-modal__wrapper">
            <CloseBtn 
              onClick={() => closeModal()} 
              icon="far fa-window-close"
              className="modal__btn-close"
            />
            <div className="item-modal__window">
                <img src={item.img} alt="" loading="lazy" width="460" height="460"/>
                <div className="item-modal__description">
                    <h1 className="item-modal__title">
                    {item.title}
                    </h1>
                    <p>
                    В семейном парке развлечений «Мегалэнд» специально для вас пройдут выпускные.
                    </p>
                    <p>
                    Составь свою программу сам из нашего конструктора выпускного:
                    </p>
                    <ListItem
                        itemList={item.ul || []}
                    />
                    <p>
                    Цены действуют только на группу от 10 человек при заказе от двух позиций. Розничная продажа билетов на выпускные не осуществляется. Скидки по карте привилегий не действуют.
                    </p>
                    <p>
                    <strong>Предварительная бронь: <a href="tel:89025866228">8 (902) 586-62-28</a></strong> 
                    </p>
                    <small className="item__date">
                    <time dateTime="2021-02-09 11:50">
                        09.02.2021 11:50
                    </time>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default ItemModal
