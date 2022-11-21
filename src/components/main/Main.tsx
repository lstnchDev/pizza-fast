import { FC } from "react"
import Category from "./sorts/Category";
import Pizza from "./Pizza";
import Sort from "./sorts/Sort";
import styles from "./styles/main.module.scss"
import Sorts from "./sorts/Sorts";


const Main: FC = ()=>{
    return(
        <div className={styles.main}>
            <Sorts />
            <Pizza />
        </div>
    )
}

export default Main;