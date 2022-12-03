import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchCartPizza } from "../../redux/slices/cartPizzaSlices"
import { RootState, useAppDispatch } from "../../redux/store"
import cartIcon from "./../../icons/cart.svg"
import styles from "./cart.module.scss"

const CartButton: FC = ()=>{
    
    const dispatch = useAppDispatch()
    const cartPizza = useSelector((state: RootState)=>{
        return state.cartPizzaSlices
    })
    console.log(cartPizza)

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