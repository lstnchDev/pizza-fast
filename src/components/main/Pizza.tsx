import { useSelector } from 'react-redux';
import { fetchAllPizza } from '../../redux/slices/allPizzaSlices';
import { RootState, useAppDispatch } from '../../redux/store';
import PizzaItem from './pizzaItems/PizzaItem';
import styles from './styles/pizza.module.scss'
import { useEffect, FC } from "react"



const Pizza: FC = ()=>{
 
    const pizzas = useSelector((state: RootState)=>{
        const searchSort = state.allPizzaSlices.searchSort.toLowerCase()
        const items = state.allPizzaSlices.items

        const sort = state.allPizzaSlices.sortItems
        if (sort.length>0) return items.filter((item)=> sort.some(category=> item.category === category)).filter(item => item.title.toLowerCase().includes(searchSort))
        else return items.filter(item => item.title.toLowerCase().includes(searchSort))
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
            <ul className={styles.items}>
                {item}
            </ul>
        </div>
    )
}

export default Pizza;