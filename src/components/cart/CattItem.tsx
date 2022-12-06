import axios from "axios";
import { FC, useEffect } from "react"
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCarts, deleteCartPizza, fetchCartPizza } from "../../redux/slices/cartPizzaSlices";
import { RootState, useAppDispatch } from "../../redux/store";
import Button from "../../UI/Button";
import PizzaCart from "./PizzaCart";
import styles from "./styles/item.module.scss"

const CartItem: FC = ()=>{

    const cartPizza = useSelector((state: RootState)=>{
        console.log(state.cartPizzaSlices)
        return state.cartPizzaSlices
    })

    const dispatch = useAppDispatch()
    
    const clearCart = ()=> console.log(21)
    return(
         <div className={styles.cart}>
            <div className={styles.top}>
                <h1>Корзина</h1>
                <Button onClick={(clearCart)} title="Очистить корзину"/>
            </div>
            <div className={styles.main}>

                {cartPizza.items.map((item)=> <PizzaCart 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    count={item.count}
                    sizes={item.sizes}
                    types={item.types} 
                    imageUrl={item.imageUrl} 
                    price={item.price} 
                />)}
            </div>
            <div className={styles.bottom}>
                <p>Всего пицц: {cartPizza.count} шт.</p>
                <p>Сумма заказа: {cartPizza.priceSum} ₽</p>
            </div>
            <div className={styles.buttons}>
                <Link to="/" >
                    <span className={styles.back}>Вернуться назад</span>
                </Link>
                <Button onClick={()=>console.log('Оплатить сейчас')} title="Оплатить сейчас"/>
            </div>
         </div>
    )
}

export default CartItem;