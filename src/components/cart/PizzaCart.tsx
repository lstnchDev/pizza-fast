import { FC } from "react";
import Button from "../../UI/Button";
import imagePizza from './../../icons/pizza.png'
import styles from './styles/pizzaCart.module.scss'

const PizzaCart: FC= ()=>{
    return (
        <div className={styles.pizza}>
            <img src={imagePizza} alt="" />
            <div className={styles.titles}>
                <h3>Сырный цыпленок</h3>
                <p>тонкое тесто, 26 см</p>
            </div>
            <div className={styles.counts}>
                <Button onClick={()=>console.log('-')} title="-"/>2<Button onClick={()=>console.log('+')} title="+"/>
            </div>
            <p>700 ₽</p>
            <Button onClick={()=>console.log('Х')} title="Х"/>
        </div>
    )
}

export default PizzaCart;