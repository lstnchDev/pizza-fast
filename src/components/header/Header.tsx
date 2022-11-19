import { FC } from "react"
import Cart from "./Cart"
import styles from "./header.module.scss"

const Header: FC = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>PIZZA FAST</h1>
                    <p>топ 1 пицца во всем районе</p>
                </div>
                <Cart />
            </div>
        </div>
    )
}

export default Header