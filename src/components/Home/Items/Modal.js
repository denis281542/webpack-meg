import React, {useState} from 'react'
import './modal.scss'

const Modal = ({closeModal}) => {
    return(<div>
        <div className="modal__overlay"></div>

        <div className="modal__item">
            <div className="modal__inner">
                <img src="/src/assets/images/item3-1.webp" />
                <div className='modal__description'>
                    <h1>Отметь день рождения в кино!</h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal
