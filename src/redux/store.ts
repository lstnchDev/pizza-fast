import  cartPizzaSlices  from './slices/cartPizzaSlices';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import  allPizzaSlices  from './slices/allPizzaSlices';


export const store = configureStore({
    reducer: {
        allPizzaSlices,
        cartPizzaSlices
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: ()=> AppDispatch = useDispatch