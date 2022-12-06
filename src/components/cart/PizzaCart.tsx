import axios from "axios";
import { FC, useState } from "react";
import { deleteCartPizza, fetchCartPizza } from "../../redux/slices/cartPizzaSlices";
import { useAppDispatch } from "../../redux/store";
import Button from "../../UI/Button";
import imagePizza from './../../icons/pizza.png'
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
    console.log(imageUrl)
    const [clickState, setState] = useState(false)

    const dispatch = useAppDispatch()
    const onDeleteHandler = async ()=> {
        const response = await axios.delete(
            `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${id}`
        )     
        dispatch(fetchCartPizza())
    }
    const onAddHandler = async ()=> {
        const response = await axios.put(
            `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${id}`,{
                "count": count+1,
            }
        )     
        dispatch(fetchCartPizza())
    }
    const onDecHandler = async ()=> {
        const response = await axios.put(
            `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${id}`, {
                "count": count-1,
            }
        )     
        dispatch(fetchCartPizza())
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