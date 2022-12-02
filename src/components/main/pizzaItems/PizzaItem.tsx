import { FC, useState } from 'react';
import Button from '../../../UI/Button';
import styles from './styles/item.module.scss';

type PizzaType = {
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number

}

const dough = ['тонкое', 'традиционное']

const PizzaItem: FC <PizzaType> = ({imageUrl,title, price, rating, sizes, types, category})=>{

    const [typeActive, setType] = useState(types[0])
    const [sizesActive, setSize] = useState(sizes[0])

    const onClickHandler = ()=> console.log(12)

    const pizzaTypes = types.map((type)=> <li className={(typeActive===type) ? styles.active : styles.unactive} onClick={()=>setType(type)}>{dough[type]}</li>) 
    const pizzaSizes = sizes.map((size)=> <li className={(sizesActive===size)? styles.active : styles.unactive} onClick={()=>setSize(size)}>{size}</li>) 

    return (
        <li className={styles.pizza}>
            <img className={styles.image} src={imageUrl} alt="" />
            <h3>{title}</h3>
            <div className={styles.category}>
                <ul className={styles.dough}>
                    {pizzaTypes}
                </ul>
                <ul className={styles.size}>
                    {pizzaSizes}
                </ul>
            </div>  

            <div className={styles.bottom}>
                <h4>от {price} ₽</h4>
                <Button onClick={onClickHandler} title="Добавить"/>
            </div>
        </li>
    )
}

export default PizzaItem;