import React, { FC, useEffect, useState } from "react"
import { setSearchSort } from "../../redux/slices/allPizzaSlices"
import { useAppDispatch } from "../../redux/store"
import searchIcon from "./../../icons/search.svg"
import styles from "./search.module.scss"

const Search: FC = ()=>{

    const [searchVal, setSearch] = useState("")

    const dispatch = useAppDispatch()
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
    
    useEffect(()=>{
        const timeout = setTimeout(() => {
            dispatch(setSearchSort(searchVal))
        }, 1000);
        return () => clearTimeout(timeout)

    }, [searchVal])
    return (
        <div className={styles.search}>
            <img src={searchIcon} alt="" />
            <input onChange={onChangeHandler} placeholder="Найти пиццу..."/>
        </div>
    )
}

export default Search;