import { FC } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import Button from "../../UI/Button";
import PizzaCart from "./PizzaCart";
import styles from "./styles/item.module.scss"

const CartItem: FC = ()=>{

    const cartPizza = useSelector((state: RootState)=>{
        return state.cartPizzaSlices
    })

    return(
         <div className={styles.cart}>
            <div className={styles.top}>
                <h1>Корзина</h1>
                <Button onClick={()=>console.log('sdsds')} title="Очистить корзину"/>
            </div>
            <div className={styles.main}>

                {cartPizza.items.map((item)=> <PizzaCart 
                    key={item.id}
                    title={item.title}
                    count={item.count}
                    sizes={item.sizes}
                    types={item.types} 
                    imageUrl={item.imageUrl} 
                    price={item.price} 
                />)}
            </div>
            <div className={styles.bottom}>
                <p>Всего пицц: 3шт.</p>
                <p>Сумма заказа: 900 ₽</p>
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