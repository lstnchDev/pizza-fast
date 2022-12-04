import { FC } from "react";
import Button from "../../UI/Button";
import imagePizza from './../../icons/pizza.png'
import styles from './styles/pizzaCart.module.scss'


type CartPizza = {
    imageUrl: string,
    title: string,
    types: number,
    sizes: number,
    price: number,
    count: number,
}
const dough = ['тонкое', 'традиционное']

const PizzaCart: FC<CartPizza>= ({imageUrl, title, types, sizes, price, count})=>{
    console.log(imageUrl)
    
    return (
        <div className={styles.pizza}>
            <img src={imageUrl} alt="" />
            <div className={styles.titles}>
                <h2>{title}</h2>
                <p>{dough[types]} тесто, {sizes} см</p>
            </div>
            
            <div className={styles.counts}>
                <Button onClick={()=>console.log('-')} title="-"/>
                    <p>{count}</p>
                <Button onClick={()=>console.log('+')} title="+"/>
            </div>
            <p>{price} ₽</p>
            <Button onClick={()=>console.log('Х')} title="Х"/>
        </div>
    )
}

export default PizzaCart;