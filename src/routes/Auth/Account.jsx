import React, {useState, useEffect} from 'react';
import './account.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser, setUser } from '../../store/slices/userSlice';
import {useAuth} from '../../hooks/useAuth';
import {store} from '../../store/index';
import { editPhone, editDate, editName } from '../../store/slices/userSlice';
import {Loader} from '../../components/Loader/Loader.jsx';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, update, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

export const Account = () => {
    const {isAuth, name, date, bonus, id, phone, userImg, email} = useAuth();
    const [nameEdit, setName] = useState(name);
    const [disabledName, setDisabledName] = useState(true);    
    const [phoneEdit, setPhoneEdit] = useState(phone);
    const [dateEdit, setDate] = useState(date);
    const [disabled, setDisabled] = useState(true);
    const [disabledDate, setDisabledDate] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const singOut = () => {
        dispatch(removeUser())
        navigate('/login')

        const auth = getAuth();
        auth.signOut()
    }

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(store.getState().user.email === null)
            }, 1000)
        }).then(response => {
            response ? navigate('/login') : null
        })
    }, []);   
    
    const edit = () => {
        dispatch(editPhone({
            phone: phoneEdit || phone
        }))
        setDisabled(true)
        updateUserData()
    }

    const editD = () => {
        dispatch(editDate({
            date: dateEdit || date
        }))
        setDisabledDate(true)
        updateUserData()
    }
    
    const editN = (e) => {
        dispatch(editName({
            name: nameEdit || name
        }))
        setDisabledName(true)
        updateUserData()
    }

    function updateUserData() {      
        const db = getDatabase();
        const updates = {};      

        updates[`users/${id}`]  = store.getState().user
        return update(ref(db), updates);
    }

    const downloadImg = (e) => {
        const storage = getStorage();
        const file = e.target.files[0]
        const name = 'user-avatar'
        const imagesRef = storageRef(storage, `users/${id}/images/${name}`);
        uploadBytes(imagesRef, file)
        getImg()
    }

    const getUserData = () => {
        const db = getDatabase();
        const starCountRef = ref(db, `users/${id}`);
        onValue(starCountRef, (snapshot) => {
            document.querySelectorAll('input')[1].value = snapshot.val().name
            document.querySelectorAll('input')[2].value = snapshot.val().date
            document.querySelectorAll('input')[3].value = +snapshot.val().phone
        });
    }
    getUserData()


    function getImg() {
        const storage = getStorage();
        const pathReference = storageRef(storage, `users/${id}/images/user-avatar`);
        getDownloadURL(pathReference).then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            var img = document.querySelector('.account__img');
            img.setAttribute('src', url);
          })
          .catch((error) => {
              console.log(error);
          });
    }
    getImg()

    return (
        <section className="account">
            {isAuth 
                ? (
                    <>
                        <div className="account__img-user">
                            <img className="account__img" src='https://sim-roulette.com/forum/download/file.php?avatar=g2_1603377996.png'/>

                            <label className="account__file-upload">
                                <input 
                                    name="userImg" 
                                    type="file"
                                    onChange={downloadImg}
                                />
                            </label>
                            
                        </div>
                        
                        <div style={{display: 'flex', alignItems: 'center'}}>

                            <input 
                                onChange={e => setName(e.target.value)}
                                type='text'
                                disabled={disabledName}
                                placeholder={name}
                                onBlur={editN}                                
                            />

                            <div className="account__btns-input">
                                <button type='button' 
                                    onClick={() => {
                                        document.querySelectorAll('input')[1].setAttribute('value', name)
                                        setDisabledName(false)
                                    }}
                                    // onBlur={editN}                                
                                >
                                    <i className="fas fa-edit"></i>
                                </button>     
                            </div>
                            
                        </div>

                        <div style={{display: 'flex', alignItems: 'center'}}>

                            <p>Дата рождения:
                                <input 
                                    onChange={e => setDate(e.target.value)}
                                    type='text'
                                    disabled={disabledDate}
                                    // placeholder={date.split('-').reverse().join('.') || 'не заполнено'} 
                                    onBlur={editD}                                   
                                />
                            </p>
                            <div className="account__btns-input">
                                <button type='button' onClick={() => {
                                        document.querySelectorAll('input')[2].setAttribute('type', 'date')
                                        document.querySelectorAll('input')[2].setAttribute('value', date)
                                        setDisabledDate(false)
                                    }}>
                                    <i className="fas fa-edit"></i>
                                </button>     
                            </div>
                            
                        </div>

                        <div style={{display: 'flex', alignItems: 'center'}}>

                            <p>Номер телефона:
                                <input 
                                    onChange={e => setPhoneEdit(e.target.value)}
                                    type='number'
                                    disabled={disabled}
                                    placeholder={phone}  
                                    onBlur={edit}                                  
                                />
                            </p>
                            <div className="account__btns-input">
                                <button type='button' onClick={() => {
                                        document.querySelectorAll('input')[3].setAttribute('value', phone)
                                        setDisabled(false)
                                    }}>
                                    <i className="fas fa-edit"></i>
                                </button>     
                            </div>
                            
                        </div>

                        <p>Бонусный счет: {bonus}</p>
                        <button onClick={singOut}>Выйти</button>
                    </>
                    )

                : <Loader />
            }
        </section>
    )
}