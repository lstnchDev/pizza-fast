import axios from "axios";
import { FC } from "react";
import { fetchCartPizza } from "../../redux/slices/cartPizzaSlices";
import { useAppDispatch } from "../../redux/store";
import { pizzaAdd, pizzaDec, pizzaDelete } from "../../tools/fetchsPizzas";
import Button from "../../UI/Button";
import styles from './styles/pizzaCart.module.scss'


type CartPizza = {
    imageUrl: string,
    id: string,
    title: string,
    types: number,
    sizes: number,
    price: number,
    count: number,
}
const dough = ['тонкое', 'традиционное']

const PizzaCart: FC<CartPizza>= ({imageUrl, id, title, types, sizes, price, count})=>{
    const dispatch = useAppDispatch()
    const onDeleteHandler = async ()=> {
        pizzaDelete(id)
        setTimeout(()=>{
            dispatch(fetchCartPizza())
        }, 1000)
    }
    const onAddHandler = async ()=> {
        pizzaAdd(id, count+1)
   
        setTimeout(()=>{
            dispatch(fetchCartPizza())
        }, 1000)
    }
    const onDecHandler = async ()=> {
        pizzaDec(id, count-1)
        setTimeout(()=>{
            dispatch(fetchCartPizza())
        }, 1000)   
    }
    return (
        <div className={styles.pizza}>
            <img src={imageUrl} alt="" />
            <div className={styles.titles}>
                <h2>{title}</h2>
                <p>{dough[types]} тесто, {sizes} см</p>
                <p>Цена: {price} ₽</p>

            </div>
            
            <div className={styles.counts}>
                <Button onClick={count === 1 ? onDeleteHandler : onDecHandler} title="-"/>
                    <p>{count}</p>
                <Button onClick={onAddHandler} title="+"/>
            </div>
            <p>{price*count} ₽</p>
            <Button onClick={onDeleteHandler} title="Х"/>
        </div>
    )
}

export default PizzaCart;