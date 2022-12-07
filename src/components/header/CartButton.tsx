import { FC, useEffect } from "react"
import {  useSelector } from "react-redux"
import { fetchCartPizza } from "../../redux/slices/cartPizzaSlices"
import { RootState, useAppDispatch } from "../../redux/store"
import cartIcon from "./../../icons/cart.svg"
import styles from "./cart.module.scss"

const CartButton: FC = ()=>{
    
    const dispatch = useAppDispatch()
    const cartPizza = useSelector((state: RootState)=> state.cartPizzaSlices)

    useEffect(()=>{
        dispatch(fetchCartPizza())
    }, [])

    return (
        <div className={styles.cart}>
                <div className={styles.block}>
                    <div className={styles.price}>
                        {cartPizza.priceSum} ₽
                    </div>
                    <div className={styles.count}>
                        <img src={cartIcon} alt="" />
                        <p>{cartPizza.count}</p>
                    </div>
                </div>      
        </div>
    )
}

export default CartButton;