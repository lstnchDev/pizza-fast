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
                <Link className={styles.logo} to='/'>
                    <img src={logoPizza} alt="" />
                        <div className={styles.text}>
                            <h1>PIZZA FAST</h1>
                            <p>пицца №1 во всем районе</p>
                        </div>
                    </Link>
                <Search />
                <Link className={styles.link} to='/cart'>
                    <CartButton />
                </Link>
            </div>
        </div>
    )
}

export default Header