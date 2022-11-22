import { FC, useState } from "react";
import CartItem from "./CattItem";
import EmptyCart from "./EmptyCart";
import styles from "./styles/cart.module.scss"
const Cart: FC = ()=>{
    const [cartState, setCart] = useState(false)
    return (
       <div className={styles.cart}>
            {cartState ? <EmptyCart /> : <CartItem/>}
       </div> 
    )
}

export default Cart;