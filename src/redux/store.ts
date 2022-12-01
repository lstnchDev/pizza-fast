import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import  allPizzaSlices  from './slices/allPizzaSlices';


export const store = configureStore({
    reducer: {
        allPizzaSlices
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: ()=> AppDispatch = useDispatch