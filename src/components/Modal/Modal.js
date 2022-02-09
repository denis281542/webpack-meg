import React, {useState} from "react";
import { CloseBtn } from "./CloseBtn";

export const Modal = ({activeClass, closeModal, children, modalInner}) => {

  return(
    <div className={`modal__wrapper ${activeClass ? 'modal__wrapper--active' : ''}`} onClick={() => closeModal()}>
        <div className={modalInner}>
          <div className={`modal__form ${activeClass ? 'modal__form--active' : ''}`} onClick={e => e.stopPropagation()}>

            <CloseBtn 
              onClick={() => closeModal()} 
              icon="far fa-window-close"
              className="modal__btn-close"
            />  

            <div className="modal__content">
              {children}          
            </div>
        
          </div>
          
        </div>
    </div>
    )
}
