import { FC, useState } from 'react';


type Categiries={
    types: number[],
    sizes: number[],

}


const CategortItem: FC<Categiries> = ()=>{
    const [activeStateDough, setActiveDough] = useState(false)
    const [activeStateSize, setActiveSize] = useState(false)

    const doughHandler = ()=>setActiveDough(true)
    const sizeHandler = ()=>setActiveSize(true)

    return (
        <div>
            {/* <li onClick={doughHandler} className={styles.active}>{dough[item]}</li> */}
        </div>
    )
}

export default CategortItem