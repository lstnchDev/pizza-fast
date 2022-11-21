import { FC, useState } from 'react';
import styles from "./styles/sort.module.scss"


export const sortList = [
    { name: 'популярности' },
    { name: 'цене'},
    { name: 'алфавиту'},
  ];
  

const Sort: FC = ()=>{
    const [clickState, setClickState] = useState(false)

    const onClickCat = ()=> {
        setClickState(!clickState)
    }

    const sorts = sortList.map((sort)=><li >{sort.name}</li>)
    return (
        <div className={styles.sort}>
            <div className={styles.container}>
                <h4>Сортировка по: <span onClick={onClickCat}>{sortList[0].name}</span></h4>
                    {clickState && <ul className={styles.names}>
                            {sorts}
                        </ul>}
            </div>
        </div>
    )
}

export default Sort;