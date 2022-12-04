import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"


enum Status{
    LOADING = 'loading',
    SUSCESS = 'suscess',
    ERROR = 'error'
}

type AllPizzasItem = {
    id: string,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number
}

interface IPizzas{
    items: AllPizzasItem[],
    sortItems: number[],
    status: Status
}

export const fetchAllPizza = createAsyncThunk('allPizza/fetchAllPuzza', async () => {
    const response = await axios.get(
        'https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/item'
    )
    return response.data as AllPizzasItem[]
})

const initialState: IPizzas = {
    items: [],
    sortItems: [],
    status: Status.LOADING
}

export const allPizzaSlices = createSlice({
    name: 'allPizza',
    initialState: initialState,
    reducers: {
        setSortsPizza: (state, action) => {
            state.sortItems.push(action.payload)
        },
        deleteSorstPizza: (state, action) => {
            state.sortItems = state.sortItems.filter((item)=> item !== action.payload)
        }
       
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchAllPizza.pending, (state, action) =>{
            state.status = Status.LOADING
        })
        builder.addCase(fetchAllPizza.fulfilled, (state, {payload}) =>{
            state.items = payload

            state.status = Status.SUSCESS
        })
        builder.addCase(fetchAllPizza.rejected, (state, action) =>{
            state.status = Status.ERROR
        })
    }
})

export const {setSortsPizza, deleteSorstPizza} = allPizzaSlices.actions
export default allPizzaSlices.reducer