import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
function Cart(){
    const cart = useContext(CartContext);
    return(
        <div>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item,index)=>{
                    return(
                        <div key={index}>
                            <li>{item.name} - {item.price}</li>
                            
                        </div>
                    )
                })
            }
            <h1>Total: {cart.items.reduce((acc,curr)=>acc+curr.price,0)}</h1>
        </div>
    )
}
export default Cart;