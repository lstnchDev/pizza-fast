import { useSelector } from 'react-redux';
import { fetchAllPizza } from '../../redux/slices/allPizzaSlices';
import { RootState, useAppDispatch } from '../../redux/store';
import PizzaItem from './pizzaItems/PizzaItem';
import styles from './styles/pizza.module.scss'
import { useState, useEffect, FC } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import { loader } from '../../UI/Loader';



const Pizza: FC = ()=>{
    const dispatch = useAppDispatch()
  
    const fetch = ()=> dispatch(fetchAllPizza(2))
    useEffect(()=>{
        console.log(2)
        dispatch(fetchAllPizza(1))

    }, [])

    const pizzas = useSelector((state: RootState)=>{
        const searchSort = state.allPizzaSlices.searchSort.toLowerCase()
        const items = state.allPizzaSlices.items

        const sort = state.allPizzaSlices.sortItems
        if (sort.length>0) return items.filter((item)=> sort.some(category=> item.category === category)).filter(item => item.title.toLowerCase().includes(searchSort))
        else return items.filter(item => item.title.toLowerCase().includes(searchSort))
    })
    const item = pizzas.map((pizza)=><PizzaItem 
        key={pizza.id}
        id={pizza.id}
        imageUrl={pizza.imageUrl}
        title={pizza.title}
        price={pizza.price}
        rating={pizza.rating}
        sizes={pizza.sizes}
        types={pizza.types}
        category={pizza.category}
    
            />)
    console.log(item.length)
    return(
        <div className={styles.pizza}>
            <h1>Все пиццы:</h1>
            <ul >
                <InfiniteScroll
                    dataLength={19} //This is important field to render the next data
                    next={fetch}
                    hasMore={item.length !== 19}
                    loader={loader}
                    className={styles.items}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                    >
                    {item}
                </InfiniteScroll>

            </ul>
        </div>
    )
}

export default Pizza;