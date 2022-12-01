import { FC } from 'react';
import pizzaImg from "../../../icons/pizza.png"
import Button from '../../../UI/Button';
import PizzaCategory from './PizzaCategory';
import styles from './styles/item.module.scss';

type PizzaItem = {
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number

}

const PizzaItem: FC<PizzaItem> = ({imageUrl,title, price, rating, sizes, types, category})=>{
    const onClickHandler = ()=> console.log('click')

    return (
        <li className={styles.pizza}>
            <img className={styles.image} src={imageUrl} alt="" />
            <h3>{title}</h3>
            <PizzaCategory/>
            <div className={styles.bottom}>
                <h4>от {price} ₽</h4>
                <Button onClick={onClickHandler} title="Добавить"/>
            </div>
        </li>
    )
}

export default PizzaItem;