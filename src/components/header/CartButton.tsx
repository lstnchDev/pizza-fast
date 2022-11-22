import { FC } from "react"
import { Link } from "react-router-dom"
import cartIcon from "./../../icons/cart.svg"
import styles from "./cart.module.scss"

const CartButton: FC = ()=>{
    return (
        <div className={styles.cart}>
                <div className={styles.block}>
                    <div className={styles.price}>
                        4080 ₽
                    </div>
                    <div className={styles.count}>
                        <img src={cartIcon} alt="" />
                        <p>3</p>
                    </div>
                </div>      
        </div>
    )
}

export default CartButton;