import {useSelector} from 'react-redux';
import {useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export const useAuth = () => {
    const {email, name, phone, bonus, date, token, id, userImg} = useSelector(state => state.user);
    const dispatch = useDispatch();

    console.log(email);

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(setUser({
              email: user.email,
              id: user.uid,
            }))
          } else {
            // User is signed out
            // ...
          }
          
          // return user.email
        });
    }, [])

    return {
        isAuth: !!email,
        email,
        token, 
        name,
        phone,
        bonus,
        date,
        id,
        userImg
    }
}