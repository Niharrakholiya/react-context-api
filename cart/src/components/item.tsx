import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
const Item=(props)=>{
    const cart = useContext(CartContext);
    console.log("cart",cart)

    return(
        <div>
            <h2>{props.item.name}</h2>
            <h3>{props.item.price} rs</h3> 
            <button onClick={()=>cart.setitems([...cart.items,{name:props.item.name,price:props.item.price},])}>Add to cart</button>
        </div>
    )
}
export default Item;