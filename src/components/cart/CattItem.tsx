import { FC } from "react"
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import PizzaCart from "./PizzaCart";
import styles from "./styles/item.module.scss"

const CartItem: FC = ()=>{
    return(
         <div className={styles.cart}>
            <div className={styles.top}>
                <h1>Корзина</h1>
                <p>Очистить корзину</p>
            </div>
            <div className={styles.main}>
                {[...new Array(3)].map((_, index)=> <PizzaCart/>)}
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