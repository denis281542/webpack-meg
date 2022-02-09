import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    name: null,
    phone: null,
    // userImg: null,
    date: null,
    bonus: null,
    token: null,
    id: null, 
    order: null
  },
  reducers: {
    setUser(state, action) {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.phone = action.payload.phone;
        // state.userImg = action.payload.userImg;
        state.date = action.payload.date;
        state.bonus = action.payload.bonus;
        state.token = action.payload.token;
        state.id = action.payload.id;
    },
    editPhone(state, action) {
      state.phone = action.payload.phone  
    },
    editDate(state, action) {
      state.date = action.payload.date    
    },
    editName(state, action) {
      state.name = action.payload.name      
    },
    createOrder(state, action) {
      state.order = action.payload.order
    },
    removeUser(state) {
        state.email = null;
        state.name = null;
        state.phone = null;
        // state.userImg = null;
        state.date = null;
        state.bonus = null;
        state.token = null;
        state.id = null;
        state.order = null;
    },
  }
})

export const { setUser, removeUser, editPhone, editDate, editName, createOrder } = userSlice.actions

export default userSlice.reducer
