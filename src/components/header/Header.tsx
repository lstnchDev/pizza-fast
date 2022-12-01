import { FC } from "react"
import styles from "./header.module.scss"
import Search from "./Search"
import logoPizza from "./../../icons/logo-pizza.svg"
import CartButton from "./CartButton"
import { Link } from "react-router-dom"

const Header: FC = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logoPizza} alt="" />
                    <Link className={styles.link} to='/'>
                        <div className={styles.text}>
                            <h1>PIZZA FAST</h1>
                            <p>пицца №1 во всем районе</p>
                        </div>
                    </Link>
                </div>
                <Search />
                <Link className={styles.link} to='/cart'>
                    <CartButton />
                </Link>
            </div>
        </div>
    )
}

export default Header