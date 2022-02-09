import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue} from "firebase/database";
import { setUser } from '../../../store/slices/userSlice';
import './modal.scss'
import { Btn } from "./Btn";
import { Modal } from "./Modal";
import {useAuth} from '../../../hooks/useAuth';
// import { setUser } from "../../../store/slices/userSlice";

export const ModalLogin = props => {
  const [modal, setModal] = useState(false)
  const [activeClass, setActive] = useState(false)
//   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [password2, setPassword2] = useState('')
//   const [isDisabled, setDisabled] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth()

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
  
  const handleLogin = () => {    
    setEmail('')
    setPassword('')

    const auth = getAuth();
    const db = getDatabase();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onValue(ref(db, '/users/' + userCredential.user.uid), snapshot => { 
            dispatch(setUser({
              email: email,
              id: userCredential.user.uid,
              name: snapshot.val().name,
              userImg: snapshot.val().img,
              date: snapshot.val().date,
              bonus: snapshot.val().bonus,
              token: userCredential.user.accessToken,
              phone: snapshot.val().phone,
          }))
        });
        
        navigate("/account")
        props.closeMenu()
        closeModal()
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      });
  }

  return(<>
    <Btn 
      className={props.children.props.className}
      onClick={() => openModal()}
      text={props.children.props.text}
    />
    {modal 
      ? <Modal 
          closeModal={() => closeModal()}  
          modalInner="modal"
          modal={modal}
          activeClass={activeClass}
        >
          <h1>{props.title}</h1>
          

          <div className="modal__field">
            <label htmlFor='email'>Email</label>
            <input 
              // onFocus={() => setDitry(false)}
              // onBlur={onBlur}
              onChange={e => setEmail(e.target.value)}
              // value={input.value}
              type='email'
              name='email'
              placeholder="Ведите email"
              value={email}
            />
            <small>Неверный email</small>
          </div>

          <div className="modal__field">
            <label htmlFor='password'>Пароль</label>
            <input 
              // onFocus={() => setDitry(false)}
              // onBlur={onBlur}
              onChange={e => setPassword(e.target.value)}
              // value={input.value}
              type='password'
              name='password'
              placeholder="Ведите пароль"
              value={password}
            />
            <small>Неверный пароль</small>
          </div>

         <Link 
            to='/register'
            onClick={() => {
                closeModal()
                props.closeMenu()}
            }
         > Зарегистрироваться</Link>          

          <Btn 
            type='button'
            className='modal__btn next-btn'
            text='Войти'
            onClick={handleLogin}
          />

        </Modal> 
      : null}
  </>
  )
}