import { FC } from "react"
import Category from "./Category";
import Sort from "./Sort";
import styles from "./styles/main.module.scss"

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Main: FC = ()=>{
    return(
        <div className={styles.main}>
            <ul>
                {categories.map((cat)=> <Category title={cat}/>)}
            </ul>
            <Sort />
        </div>
    )
}

export default Main;