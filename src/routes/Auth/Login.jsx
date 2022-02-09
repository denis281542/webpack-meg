import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Btn } from "../Auth/Modal/Btn";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { setUser } from '../../store/slices/userSlice';
import { getDatabase, ref, onValue} from "firebase/database";
import {useAuth} from '../../hooks/useAuth';

export const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const center = {
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    // const user = useSelector(state => state.user)
    // const auth = getAuth();

    // useEffect(() => {
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.uid;
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //     console.log(
    //       user.email
    //     );
    //     dispatch(setUser({email: user.email}))
    //   });
    // }, [])






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
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
          });
      }

    return(
        <section style={center}>
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

            
            <Btn 
              type='button'
              className='modal__btn next-btn'
              text='Войти'
              onClick={handleLogin}
            />
        </section>
    )
}
