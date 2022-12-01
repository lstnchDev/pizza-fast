import { useSelector } from 'react-redux';
import { fetchAllPizza } from '../../redux/slices/allPizzaSlices';
import { RootState, useAppDispatch } from '../../redux/store';
import PizzaItem from './pizzaItems/PizzaItem';
import styles from './styles/pizza.module.scss'
import { useState, useEffect, FC } from "react"

const Pizza: FC = ()=>{
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchAllPizza())

    }, [])

    const pizzas = useSelector((state: RootState)=>{
         return state.allPizzaSlices.items
    })
    const item = pizzas.map((pizza)=><PizzaItem 
        key={pizza.id}
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