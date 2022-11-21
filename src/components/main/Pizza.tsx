import { FC } from 'react';
import PizzaItem from './pizzaItems/PizzaItem';
import styles from './styles/pizza.module.scss'

const Pizza: FC = ()=>{
    const item = [...new Array(8)].map((_, index)=><PizzaItem key={index}/>)
    return(
        <div className={styles.pizza}>
            <h1>Все пиццы:</h1>
            <ul className={styles.items}>{item}</ul>
        </div>
    )
}

export default Pizza;