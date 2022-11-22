import { FC } from "react";
import { Link } from "react-router-dom";
import empyCart from "./../../icons/emptyCart.svg"
import styles from "./styles/empty.module.scss"

const EmptyCart: FC = ()=>{
    return (
        <div className={styles.cart}>
            <h1>Корзина пустая</h1>
            <p>Перейдите на главную страницу, для того чтобы заказать пиццу</p>
            <img src={empyCart} alt="" />
            <div>
                <Link to="/" >
                    <span className={styles.cartBtn}>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart;