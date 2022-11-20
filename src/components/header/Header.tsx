import { FC } from "react"
import Cart from "./Cart"
import styles from "./header.module.scss"
import Search from "./Search"
import logoPizza from "./../../icons/logo-pizza.svg"

const Header: FC = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logoPizza} alt="" />
                    <div className={styles.text}>
                        <h1>PIZZA FAST</h1>
                        <p>пицца №1 во всем районе</p>
                    </div>
                </div>
                <Search />
                <Cart />
            </div>
        </div>
    )
}

export default Header