import axios from "axios"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IPizza{
    items: CartPizza[],
    count: number,
    priceSum: number

}

type CartPizza = {
    imageUrl: string,
    title: string,
    types: number,
    sizes: number,
    price: number,
    count: number,
    itemId: string,
    id: string
}

export const fetchCartPizza = createAsyncThunk('cartPizza/fetchCartPizza',async () => {
    const response = await axios.get(
        'https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart'
    )
    return response.data as CartPizza[]
})

const initialState: IPizza = {
    items: [],
    count: 0,
    priceSum: 0,

}

export const cartPizzaSlices = createSlice({
    name: 'cartPizza',
    initialState: initialState,
    reducers: {
        getPizza: (state)=>{

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartPizza.pending, (state, action) =>{
        })
        builder.addCase(fetchCartPizza.fulfilled, (state, {payload}) =>{
            state.items = payload
            console.log(payload)
            let priceSum = 0
            let count = 0

            payload.map((item)=> priceSum+= item.price)
            payload.map((item)=> count+= item.count)
            
            state.priceSum = priceSum
            state.count = count

        })
        builder.addCase(fetchCartPizza.rejected, (state, action) =>{
        })
    },

})


export const {getPizza} = cartPizzaSlices.actions
export default cartPizzaSlices.reducer