import { FC, useState } from 'react';
import styles from "./styles/sort.module.scss"


export const sortList = [
    { name: 'популярности (DESC)' },
    { name: 'популярности (ASC)' },
    { name: 'цене (DESC)'},
    { name: 'цене (ASC)'},
    { name: 'алфавиту (DESC)'},
    { name: 'алфавиту (ASC)' },
  ];
  

const Sort: FC = ()=>{
    const [clickState, setClickState] = useState(false)

    const onClickCat = ()=> {
        setClickState(!clickState)
    }

    const sorts = sortList.map((sort)=><li>{sort.name}</li>)
    return (
        <div className={styles.sort}>
            <h3>Сортировка по: </h3>
                <span onClick={onClickCat}>{sortList[0].name}</span>
                {clickState && <ul>
                        {sorts}
                    </ul>}
        </div>
    )
}

export default Sort;