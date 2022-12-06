import { FC, useState, useEffect } from "react"
import { deleteSorstPizza, setSortsPizza } from "../../../redux/slices/allPizzaSlices"
import { useAppDispatch } from "../../../redux/store"
import styles from "./styles/category.module.scss"

interface CategiryName{
    title: string,
    index: number
}

const Category: FC<CategiryName> = ({title, index})=>{
   const [clickState, setClickState] = useState(false)

   const dispatch = useAppDispatch()

   useEffect(()=>{
     if (clickState) dispatch(setSortsPizza(index))
     else dispatch(deleteSorstPizza(index))
   }, [clickState])
    const onClickCat = ()=> {
        setClickState(!clickState)
    }
    return (
         <li onClick={onClickCat} className={`${styles.categories}  ${clickState ? styles.active : ''}`}>
            {title}
         </li>   
    )
}

export default Category;