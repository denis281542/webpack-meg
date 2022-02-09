import React from "react"

export const Item = ({item}) => {
  return(<>
    <li className="item">
      <button className="item__link">
      <img className="item__img" width="460" height="auto" src={item.img} />
      <div className="item__description">
        <h4 className="item__title">{item.title}</h4>
        <time className="item__date">{item.datetime}</time>
      </div>
      </button>
    </li>
  </>)
}