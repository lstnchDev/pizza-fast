import Category from "./Category";
import Sort from "./Sort";
import styles from "./styles/sorts.module.scss"


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Sorts = ()=>{
    return (
        <div className={styles.sorts}>
            <ul className={styles.categories}>
                {categories.map((cat)=> <Category title={cat}/>)}
            </ul>
            <Sort />

        </div>
    )
}

export default Sorts;