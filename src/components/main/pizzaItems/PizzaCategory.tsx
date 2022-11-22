import { FC, useState } from 'react';
import styles from "./styles/categories.module.scss"

const dough = ['тонкое', 'традиционное']
const size = ['26', '30', '40']


const PizzaCategory: FC = ()=>{

    const [activeStateDough, setActiveDough] = useState(false)
    const [activeStateSize, setActiveSize] = useState(false)

    const doughHandler = ()=>setActiveDough(true)
    const sizeHandler = ()=>setActiveSize(true)

    const doughSelector = dough.map(item=> <li onClick={doughHandler} className={styles.active}>{item}</li>)
    const sizeSelector = size.map(item=> <li onClick={sizeHandler} className={styles.active}>{item}</li>)

    return(
        <div className={styles.category}>
            <ul className={styles.dough}>{doughSelector}</ul>
            <ul className={styles.size}>{sizeSelector}</ul>
        </div>  
    )
}

export default PizzaCategory;