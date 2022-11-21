import { FC } from 'react';
import pizzaImg from "../../../icons/pizza.png"
import Button from '../../../UI/Button';
import PizzaCategory from './PizzaCategory';

const PizzaItem: FC = ()=>{
    const onClickHandler = ()=> console.log('click')

    return (
        <li className="pizza">
            <img src={pizzaImg} alt="" />
            <h3>Чизбургер-пицца</h3>
            <PizzaCategory/>
            <h4>от 395 ₽</h4>
            <Button onClick={onClickHandler} title="Добавить"/>

        </li>
    )
}

export default PizzaItem;