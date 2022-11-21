import { FC, useState } from "react"
import styles from "./styles/category.module.scss"

interface CategiryName{
    title: string
}

const Category: FC<CategiryName> = ({title})=>{
   const [clickState, setClickState] = useState(false)
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