import React, {useState} from "react";
import './modal.scss'
import { Btn } from "./Btn";
import { Modal } from "./Modal";
import { ModalContent } from "./ModalContent";


export const ModalWindow = modalBtn => {
  const [modal, setModal] = useState(false)
  const [activeClass, setActive] = useState(false)

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    setModal(true)
    setTimeout(() => {
      setActive(true)
    }, 0)
  }

  const closeModal = () => {
    document.body.style.overflow = 'visible'
    setActive(false)

    setTimeout(() => {
      setModal(false)

    }, 300)
  }

  return(<>
    <Btn 
      className={modalBtn.children.props.className}
      onClick={() => openModal()}
      text={modalBtn.children.props.text}
    />
    {modal 
      ? <Modal 
          closeModal={() => closeModal()}  
          modalInner="modal"
          modal={modal}
          activeClass={activeClass}
        >
          <ModalContent/>
        </Modal> 
      : null}
  </>
  )
}