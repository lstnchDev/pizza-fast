import axios from "axios"




export const pizzaDelete =async (id: string) => {
        const response = await axios.delete(
            `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${id}`
        )     
    }

export const pizzaAdd =async (id: string, count: number) => {
        const response = await axios.put(
            `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${id}`, {
                "count": count,
            }
        )     
    }

export const pizzaDec =async (id: string, count: number) => {
        const response = await axios.put(
            `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${id}`, {
                "count": count,
            }
        )     
    }