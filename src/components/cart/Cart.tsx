import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CattItem";
import EmptyCart from "./EmptyCart";
import styles from "./styles/cart.module.scss"
import { useEffect } from 'react';

const Cart: FC = ()=>{
    const [cartState, setCart] = useState(false)

    const cartCount = useSelector((state: RootState) => state.cartPizzaSlices.count)
    
    useEffect(()=>{
        if(cartCount>0) setCart(true)
        else setCart(false)
    }, [cartCount])
    
    return (
       <div className={styles.cart}>
            {cartState  ? <CartItem/> : <EmptyCart />}
       </div> 
    )
}

export default Cart;