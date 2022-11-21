import { FC } from 'react';
import Button from '../../../UI/Button';

const dough = ['тонкое', 'традиционное']
const size = ['26', '30', '40']
const PizzaCategory: FC = ()=>{
    
    const doughSelector = dough.map(item=> <li className=''>{item}</li>)
    const sizeSelector = size.map(item=> <li>{item}</li>)

    return(
        <div className="category">
            <ul>{doughSelector}</ul>
            <ul>{sizeSelector}</ul>
        </div>  
    )
}

export default PizzaCategory;