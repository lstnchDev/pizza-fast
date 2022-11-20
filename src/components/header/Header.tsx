import { FC } from "react"
import Cart from "./Cart"
import styles from "./header.module.scss"
import Search from "./Search"

const Header: FC = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>PIZZA FAST</h1>
                    <p>пицца №1 во всем районе</p>
                </div>
                <Search />
                <Cart />
            </div>
        </div>
    )
}

export default Header