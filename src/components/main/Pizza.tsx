import { useSelector } from 'react-redux';
import { fetchAllPizza } from '../../redux/slices/allPizzaSlices';
import { RootState, useAppDispatch } from '../../redux/store';
import PizzaItem from './pizzaItems/PizzaItem';
import styles from './styles/pizza.module.scss'
import { useState, useEffect, FC } from "react"
import axios from 'axios';
import { fetchCartPizza } from '../../redux/slices/cartPizzaSlices';


const obj = {
    "id": "0",
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    "title": "Пепперони Фреш с перцем",
    "types": 0,
    "sizes": 26,
    "price": 803,
    "count": 1,

    }

const Pizza: FC = ()=>{
    const dispatch = useAppDispatch()
  

    useEffect(()=>{
        // const putData = async () => {
        //     const response = await fetch(
        //         'https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(obj)
        //         }
        //     )    
        //     console.log(response)
        // }
        // putData()

        // const delData =async () => {
        //     const response = await fetch(
        //         'https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/2', {
        //             method: 'DELETE',        
        //         }
        //     )
        //     console.log(response)
        // }
        // delData()
        dispatch(fetchAllPizza())
        dispatch(fetchCartPizza())

    }, [])

    const pizzas = useSelector((state: RootState)=>{
         return state.allPizzaSlices.items
    })
    const item = pizzas.map((pizza)=><PizzaItem 
        key={pizza.id}
        id={pizza.id}
        imageUrl={pizza.imageUrl}
        title={pizza.title}
        price={pizza.price}
        rating={pizza.rating}
        sizes={pizza.sizes}
        types={pizza.types}
        category={pizza.category}
    
            />)
    return(
        <div className={styles.pizza}>
            <h1>Все пиццы:</h1>
            <ul className={styles.items}>{item}</ul>
        </div>
    )
}

export default Pizza;