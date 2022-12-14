import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cartPizzaSlices, { fetchCartPizza } from '../../../redux/slices/cartPizzaSlices';
import { RootState, useAppDispatch } from '../../../redux/store';
import Button from '../../../UI/Button';
import { loader } from '../../../UI/Loader';
import styles from './styles/item.module.scss';

type PizzaType = {
    imageUrl: string,
    title: string,
    id: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number

}

const dough = ['тонкое', 'традиционное']

const PizzaItem: FC <PizzaType> = ({imageUrl, id, title, price, sizes, types})=>{

    const [typeActive, setType] = useState(types[0])
    const [sizesActive, setSize] = useState(sizes[0])
    const [pizzaLoaderState, setLoader] = useState(false)
    const [pizzaState, setPizzaState] = useState({
        id: '17',
        imageUrl: imageUrl,
        title: title,
        types: typeActive,
        sizes: sizesActive,
        price: price,
        count: 0,
        itemId: '-1'
    })

    const dispatch = useAppDispatch()
    const cartPizza = useSelector((state: RootState)=> state.cartPizzaSlices)
    

    useEffect(()=>{
        const found = cartPizza.items.find(item => item.itemId === `${id}${typeActive}${sizesActive}`)
        if(found === undefined) setPizzaState({
            id: '17',
            imageUrl: imageUrl,
            title: title,
            types: typeActive,
            sizes: sizesActive,
            price: price,
            count: -1,
            itemId: '-1'
        })
        else {
            setPizzaState(found)

        }
        
    }, [cartPizza, sizesActive, typeActive])

    const onClickHandler = async ()=> {
        if(pizzaState.count > 0){
            const response = await fetch(
                `https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/${pizzaState.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "count": pizzaState.count+1,
                
                    })
                }    
            )
            dispatch(fetchCartPizza())        
        }
        else {
            const response = await fetch(
                'https://63891de6d94a7e5040ae7171.mockapi.io/pizzas/cart/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "itemId": `${id}${typeActive}${sizesActive}`,
                        "imageUrl": imageUrl,
                        "title": title,
                        "types": typeActive,
                        "sizes": sizesActive,
                        "price": price,
                        "count": 1,
                
                    })
                }
                
            )
            dispatch(fetchCartPizza())
        }
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)

        }, 500)
   
    }

    const pizzaTypes = types.map((type)=> <li className={(typeActive===type) ? styles.active : styles.unactive} onClick={()=>setType(type)}>{dough[type]}</li>) 
    const pizzaSizes = sizes.map((size)=> <li className={(sizesActive===size)? styles.active : styles.unactive} onClick={()=>setSize(size)}>{size}</li>) 

    return (
        
        <li className={styles.pizza}>
            <img className={styles.image} src={imageUrl} alt="" />
            <h3>{title}</h3>
            <div className={styles.category}>
                <ul className={styles.dough}>
                    {pizzaTypes}
                </ul>
                <ul className={styles.size}>
                    {pizzaSizes}
                </ul>
            </div>  

            <div className={styles.bottom}>
                <h4>от {price} ₽</h4>
                {pizzaLoaderState ? loader : <Button onClick={onClickHandler} title="Добавить"/>  }
            </div>
        </li>
    )
}

export default PizzaItem;