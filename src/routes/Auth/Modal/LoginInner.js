import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue} from "firebase/database";
import { setUser } from '../../../store/slices/userSlice';
import './modal.scss'
import { Btn } from "./Btn";


export const LoginInner = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPage = () => {        
        if(location.pathname === 'login') {
            navigate("/account")
        };
    }

    const handleLogin = () => {   
        const auth = getAuth();
        const db = getDatabase();

        setEmail('')
        setPassword('')

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
            
                redirectPage()
                props.closeMenu()
                closeModal()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return(<>
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
        </>
    )
}