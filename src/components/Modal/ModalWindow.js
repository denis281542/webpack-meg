import React, {useState} from "react";
import './modal.scss'
import { Btn } from "./Btn";
import { Modal } from "./Modal";
import { ModalContent } from "./ModalContent";
import { useAuth } from "../../hooks/useAuth";
import { LoginInner } from "../../routes/Auth/Modal/LoginInner";
import {createOrder} from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export const ModalWindow = modalBtn => {
  const [modal, setModal] = useState(false)
  const [activeClass, setActive] = useState(false)
  const {isAuth} = useAuth();
  const dispatch = useDispatch();

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    setModal(true)
    setTimeout(() => {
      setActive(true)
    }, 0)

    dispatch(createOrder({
      order: {
        description: modalBtn.children.props.text,
      }
    }))
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
          {isAuth 
            ? <ModalContent /> 
            : <LoginInner />}
        </Modal> 
      : null}
  </>
  )
}