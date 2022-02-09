import {configureStore } from '@reduxjs/toolkit';
import userReduser from './slices/userSlice';
import createSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReduser,
        counter: createSlice
    }
})