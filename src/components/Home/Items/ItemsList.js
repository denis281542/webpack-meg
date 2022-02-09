import React from "react";
import './items.scss'
import { Item } from './Item'

import {imgItem1, imgItem2, imgItem3, imgItem4, imgItem5, imgItem6, imgItem7} from '../../../assets/images/img-prod/img'

const ListItem1 = [
  {id: 1, item: 'Батут Надувная Горка'},
  {id: 2, item: 'Батутный парк'},
  {id: 3, item: 'Лабиринт'},
  {id: 4, item: 'Детский сад'}, 
  {id: 5, item: 'Экстрим парк'}
]

const ListItem2 = [
  {id: 1, item: 'Просмотр фильма'},
  {id: 2, item: 'Попкорн и напиток каждому ребёнку'},
  {id: 3, item: 'Посещение аттракционов'},
  {id: 4, item: '1000 бонусов на игровую карту имениннику'}
]

const ListItem3 = [
  {id: 1, item: 'Игровая площадка на выбор, 2шт. по 40 мин., 200 руб.'},
  {id: 2, item: 'Игровая карта на выбор 1+1 (250 руб. или 300 руб.)'},
  {id: 3, item: 'Комбо (попкорн + напиток), 190 руб.'},
  {id: 4, item: 'Просмотр кино, 120 руб.'},
  {id: 5, item: 'Ланч, 190 руб.'},
]

let ListItem4, ListItem5, ListItem6, ListItem7 = []

const items = [
  {id: 1, title: 'Безлимит в Мегалэнде', img: imgItem1, datetime: "2021.04.15 11:00", ul: ListItem1},
  {id: 2, title: 'Отметь день рождения в кино!', img: imgItem2, datetime: "05.03.2021 16:35", ul: ListItem2},
  {id: 3, title: 'Выпускной в Мегаленде!', img: imgItem3, datetime: "09.02.2021 11:50", ul: ListItem3},
  {id: 4, title: 'Мегаленд полностью открыт!', img: imgItem4, datetime: "18.09.2020 11:26", ul: ListItem4},
  {id: 5, title: 'Пицца в подарок', img: imgItem5, datetime: "17.09.2020 17:52", ul: ListItem5},
  {id: 6, title: 'Игровые автоматы открыты!', img: imgItem6, datetime: "20.08.2020 11:00", ul: ListItem6},
  {id: 7, title: 'Бонусная система', img: imgItem7, datetime: "20.08.2020 10:59", ul: ListItem7},  
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