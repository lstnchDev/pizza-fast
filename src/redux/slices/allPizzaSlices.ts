import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import { Status } from '../../tools/constants';


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
    searchSort: string,
    status: Status
}

interface ISorts{
    sortBy: string,
    order: string
}
export const fetchAllPizza = createAsyncThunk('allPizza/fetchAllPuzza', async (params: number) => {
    const response = await axios.get(
        `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/item?page=${params}&limit=10`
    )
    return response.data as AllPizzasItem[]
})

export const fetchByCategory = createAsyncThunk('allPizza/fetchByCategory',async (params: number) => {
    console.log(params)
    const response = await axios.get(
        `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/item?category=${params}`
    )
    return response.data as AllPizzasItem[]
})
export const fetchBySort = createAsyncThunk('allPizza/fetchBySort',async (params: ISorts) => {
   
    const {sortBy, order} = params

    const response = await axios.get(
        `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/item?sortBy=${sortBy}&order=${order}&page=1&limit=10`
    )
    return response.data as AllPizzasItem[]
})

const initialState: IPizzas = {
    items: [],
    sortItems: [],
    searchSort: "",
    status: Status.LOADING
}

export const allPizzaSlices = createSlice({
    name: 'allPizza',
    initialState: initialState,
    reducers: {
        setSortsPizza: (state, action) => {
            if (action.payload === 0) state.sortItems = []
            else state.sortItems.push(action.payload)
        },
        deleteSorstPizza: (state, action) => {
            state.sortItems = state.sortItems.filter((item)=> item !== action.payload)
        },
        setSearchSort: (state, action) =>{
            state.searchSort = action.payload
        }
       
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchAllPizza.pending, (state, action) =>{
            state.status = Status.LOADING
        })
        builder.addCase(fetchAllPizza.fulfilled,(state, {payload}) =>{
            payload.map((item)=> state.items.push(item))

            state.status = Status.SUSCESS
        })
        builder.addCase(fetchAllPizza.rejected, (state, action) =>{
            state.status = Status.ERROR
        })

        builder.addCase(fetchByCategory.pending, (state, action) =>{
            state.status = Status.LOADING
        })
        builder.addCase(fetchBySort.fulfilled,(state, {payload}) =>{
            state.items = []
            payload.map((item)=> state.items.push(item))

            state.status = Status.SUSCESS
        })
        builder.addCase(fetchByCategory.rejected, (state, action) =>{
            state.status = Status.ERROR
        })
    }
})

export const {setSortsPizza, deleteSorstPizza, setSearchSort} = allPizzaSlices.actions
export default allPizzaSlices.reducer