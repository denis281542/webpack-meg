  import React, {useState} from "react";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import './modal.scss'
  import { Btn } from "./Btn";
  import { Modal } from "./Modal";
  import { setUser } from "../../../store/slices/userSlice";

  export const ModalRegister = props => {
    const [modal, setModal] = useState(false)
    const [activeClass, setActive] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [isDisabled, setDisabled] = useState(false)

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
    
    const handleRegister = () => {
      const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         
            setName('')
            setEmail('')
            setPassword('')
            setPassword2('')
          
            dispatch(setUser({
              email: user.email,
              name: user.name,
              toket: user.accsesToken,
              id: user.uid,
            })) 

            const user = userCredential.user;  
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
              <label htmlFor='name'>??????</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setName(e.target.value)}
                // value={input.value}
                type='email'
                name='name'
                placeholder="???????????? ??????"
                value={name}
              />
              <small>???????????????? email</small>
            </div>

            <div className="modal__field">
              <label htmlFor='email'>Email</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setEmail(e.target.value)}
                // value={input.value}
                type='email'
                name='email'
                placeholder="???????????? email"
                value={email}
              />
              <small>???????????????? email</small>
            </div>

            <div className="modal__field">
              <label htmlFor='password'>????????????</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setPassword(e.target.value)}
                // value={input.value}
                type='password'
                name='password'
                placeholder="???????????? ????????????"
                value={password}
              />
              <small>???????????????? ????????????</small>
            </div>

            <div className="modal__field">
              <label htmlFor='password2'>?????????????????????? ????????????</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setPassword2(e.target.value)}
                // value={input.value}
                type='password'
                name='password2'
                placeholder="?????????????????????? ????????????"
                value={password2}
              />
              <small>???????????????? ????????????</small>
            </div>

            <Btn 
              type='button'
              className='modal__btn next-btn'
              text='????????????????????????????????????'
              onClick={handleRegister}
              disabled={isDisabled}
            />

          </Modal> 
        : null}
    </>
    )
  }