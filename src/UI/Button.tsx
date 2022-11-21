import { FC } from 'react'
import styles from "./button.module.scss"
interface ButtonType{
    title: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonType> = ({title, onClick})=>{
    return (
        <button className={styles.button} onClick={onClick}>{title}</button>
    )
}

export default Button