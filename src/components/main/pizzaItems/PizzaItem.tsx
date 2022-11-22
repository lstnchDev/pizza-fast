import { FC } from 'react';
import pizzaImg from "../../../icons/pizza.png"
import Button from '../../../UI/Button';
import PizzaCategory from './PizzaCategory';
import styles from './styles/item.module.scss';

const PizzaItem: FC = ()=>{
    const onClickHandler = ()=> console.log('click')

    return (
        <li className={styles.pizza}>
            <img className={styles.image} src={pizzaImg} alt="" />
            <h3>Чизбургер-пицца</h3>
            <PizzaCategory/>
            <div className={styles.bottom}>
                <h4>от 395 ₽</h4>
                <Button onClick={onClickHandler} title="Добавить"/>
            </div>
        </li>
    )
}

export default PizzaItem;