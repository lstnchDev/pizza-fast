import { FC } from "react"
import searchIcon from "./../../icons/search.svg"
import styles from "./search.module.scss"

const Search: FC = ()=>{
    return (
        <div className={styles.search}>
            <img src={searchIcon} alt="" />
            <input placeholder="Найти пиццу..."/>
        </div>
    )
}

export default Search;