import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Btn } from "../Auth/Modal/Btn";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/slices/userSlice';

export const Register = () => { 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const center = {
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const handleRegister = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          const user = userCredential.user;

          
          setEmail('')
          setName('')
          setPassword('')
          setPassword2('')
          
          navigate("/account")
          
          
          writeUserData(user.uid, name, email)


          dispatch(setUser({
            name: name,
            phone: phone,
            email: email,
            date: date,
            bonus: '0 бонусов'

            // id: userCredential.user.uid,
            // name: snapshot.val().name,
            // userImg: snapshot.val().img,
            // date: snapshot.val().date,
            // bonus: snapshot.val().bonus,
            // token: userCredential.user.accessToken,
            // phone: snapshot.val().phone,
          }))


          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
          });
    }

    function writeUserData(uid, name, email) {
      const db = getDatabase();
      set(ref(db, 'users/' + uid), {
        name: name,
        email: email,
        phone: phone,
        date: date,
        id: uid,
        bonus: '0 бонусов'
      });
    }

    return(
        <section style={center}>
            <h1>Регистрация</h1>
            <div className="modal__field">
              <label htmlFor='name'>Имя</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setName(e.target.value)}
                // value={input.value}
                type='name'
                name='name'
                placeholder="Ведите имя"
                value={name}
              />
              <small>Ведите имя</small>
            </div>
            <div className="modal__field">
              <label htmlFor='phone'>Телефон</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setPhone(e.target.value)}
                // value={input.value}
                type='phone'
                name='phone'
                placeholder="Ведите номер телефона"
                value={phone}
              />
              <small>Ведите номер телефона</small>
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
                placeholder="Ведите email"
                value={email}
              />
              <small>Неверный email</small>
            </div>
            <div className="modal__field">
              <label htmlFor='date'>Дата рождения</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setDate(e.target.value)}
                // value={input.value}
                type='date'
                name='date'
                placeholder="Ведите дату рождения"
                value={date}
              />
              <small>Неправильная дата рождения</small>
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

            <div className="modal__field">
              <label htmlFor='password2'>Подтвердите пароль</label>
              <input 
                // onFocus={() => setDitry(false)}
                // onBlur={onBlur}
                onChange={e => setPassword2(e.target.value)}
                // value={input.value}
                type='password'
                name='password2'
                placeholder="Подтвердите пароль"
                value={password2}
              />
              <small>Неверный пароль</small>
            </div>

            <Btn 
              type='button'
              className='modal__btn next-btn'
              text='Зарегистрироваться'
              onClick={handleRegister}
            />
        </section>
    )
}
