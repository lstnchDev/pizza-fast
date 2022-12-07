import { FC } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import PizzaCart from "./PizzaCart";
import styles from "./styles/item.module.scss"

const CartItem: FC = ()=>{


    const cartPizza = useSelector((state: RootState)=>{
        console.log(state.cartPizzaSlices)
        return state.cartPizzaSlices
    })

    
    const payCart = () => {
        window.alert("Заказ успешно оплачен и оформлен")
    }
    return(
         <div className={styles.cart}>
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
                    <span className={styles.btnBack}>Вернуться назад</span>
                </Link>
                <button className={styles.btnPay} onClick={payCart} >Оплатить сейчас</button>
            </div>
         </div>
    )
}

export default CartItem;