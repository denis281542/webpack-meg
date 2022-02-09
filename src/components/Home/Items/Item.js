import React, {useState} from "react"
import ItemModal from "./ItemModal";

export const Item = ({item}) => {
  const [modal, setModal] = useState(false)

  // const modals = [
  //   {id: 1, title: "Безлимит в Мегалэнде", img: "/src/assets/images/item1-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"},
  //   {id: 2, title: "Отметь день рождения в кино!", img: "/src/assets/images/item2-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"},
  //   {id: 3, title: "Выпускной в Мегалэнде!", img: "/src/assets/images/item3-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"},
  //   {id: 4, title: "Безлимит в Мегалэнде", img: "/src/assets/images/item1-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"},
  //   {id: 5, title: "Безлимит в Мегалэнде", img: "/src/assets/images/item1-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"},
  //   {id: 6, title: "Безлимит в Мегалэнде", img: "/src/assets/images/item1-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"},
  //   {id: 7, title: "Безлимит в Мегалэнде", img: "/src/assets/images/item1-1.webp", ul: ul-1, subTitle: "*Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.", phone: '83435379797', datetime: "15.04.2021 11:10"}
  // ]

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    setModal(true)
  }

  const closeModal = () => {
    document.body.style.overflow = 'visible'
    setModal(false)
  }

  return(<>
    <li className="item">
      <button 
        className="item__link" 
        onClick={() => openModal()}
      >
      <img className="item__img" width="460" height="auto" src={item.img} />
      <div className="item__description">
        <h4 className="item__title">{item.title}</h4>
        <time className="item__date">{item.datetime}</time>
      </div>
      </button>
    </li>

    {modal 
      ? <ItemModal
          closeModal={closeModal}
          item={item}
        /> 
      : null
    }
  </>)
}