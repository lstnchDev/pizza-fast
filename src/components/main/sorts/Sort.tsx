import React, { FC, HtmlHTMLAttributes, useEffect, useState } from 'react';
import { fetchBySort } from '../../../redux/slices/allPizzaSlices';
import { useAppDispatch } from '../../../redux/store';
import styles from "./styles/sort.module.scss"


export const sortList = [
    { name: 'популярности, по возрастанию',  sortBy: 'rating', order: 'acs'},
    { name: 'популярности, по убыванию',  sortBy: 'rating', order: 'desc' },
    { name: 'цене, по возрастанию',  sortBy: 'price', order: 'acs'},
    { name: 'цене, по убыванию',  sortBy: 'price', order: 'desc' },

  ];
  

const Sort: FC = ()=>{
    const [clickState, setClickState] = useState(false)
    const [activeSort, setSort] = useState(0)

    const dispatch = useAppDispatch()
    const onClickCat = ()=> {
        setClickState(!clickState)
    }    

    useEffect(()=>{
        const sortBy = sortList[activeSort].sortBy
        const order = sortList[activeSort].order
        dispatch(fetchBySort({sortBy, order}))
    }, [activeSort])

    const onClickSorts = (event: React.MouseEvent<HTMLLIElement> )=> console.log(event)

    const sorts = sortList.map((sort)=><li onClick={()=> setSort(sortList.indexOf(sort))}>{sort.name}</li>)
    return (
        <div className={styles.sort}>
            <div className={styles.container}>
                <h4>Сортировка по: <span onClick={onClickCat}>{sortList[activeSort].name}</span></h4>
                    {clickState && <ul className={styles.names}>
                            {sorts}
                        </ul>}
            </div>
        </div>
    )
}

export default Sort;