import { FC, useState, useEffect } from 'react';
import styles from "./styles/categories.module.scss"

const dough = ['тонкое', 'традиционное']
const size = ['26', '30', '40']


type PizzaType={
    type: number,

}

const PizzaCategory: FC<PizzaType> = ({type})=>{
    
    const [activeState, setActive] = useState(false)
    // const [activeStateSize, setActiveSize] = useState(false)


    useEffect(()=>{
        if (type===0) setActive(true)

        

    }, [])
    // const activeClass = activeState ? {styles.active} : ''

    const doughHandler = ()=>setActive(!activeState)
    // const sizeHandler = ()=>setActiveSize(true)


    // const doughSelector = types.map(item=> <li onClick={doughHandler} className={styles.active}>{dough[type]}</li>)
    // const sizeSelector = sizes.map(item=> <li onClick={sizeHandler} className={styles.active}>{item}</li>)

    return(
            <li onClick={doughHandler} className={activeState ? styles.active : styles.unactive}>{dough[type]}</li>
    )
}

export default PizzaCategory;