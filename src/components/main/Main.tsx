import { FC } from "react"
import Pizza from "./Pizza";
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