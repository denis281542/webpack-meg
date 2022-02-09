import React from "react";
import './items.scss'
import { Item } from './Item'

import {imgItem1, imgItem2, imgItem3, imgItem4, imgItem5, imgItem6, imgItem7} from '../../../images/img-prod/img'

const items = [
  {id: 1, title: 'Безлимит в Мегалэнде', img: imgItem1, datetime: "2021-04-15 11:00"},
  {id: 2, title: 'Отметь день рождения в кино!', img: imgItem2, datetime: "05.03.2021 16:35"},
  {id: 3, title: 'Выпускной в Мегаленде!', img: imgItem3, datetime: "09.02.2021 11:50"},
  {id: 4, title: 'Мегаленд полностью открыт!', img: imgItem4, datetime: "18.09.2020 11:26"},
  {id: 5, title: 'Пицца в подарок', img: imgItem5, datetime: "17.09.2020 17:52"},
  {id: 6, title: 'Игровые автоматы открыты!', img: imgItem6, datetime: "20.08.2020 11:00"},
  {id: 7, title: 'Бонусная система', img: imgItem7, datetime: "20.08.2020 10:59"},  
]

export const ItemsList = (props) => {
  return (<>
    <section className="items">
      <ul className="items-list">
        {items.map((item, id) => {
          return(
            <Item 
              item={item}
              key={id}
            />
          )
        })}
      </ul>
    </section>
  </>)
}