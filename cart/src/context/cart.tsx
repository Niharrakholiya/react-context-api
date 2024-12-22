import {useState} from 'react';
import {CartContext} from './CartContext';
export const CartProvider=(props)=>{
    const [items,setitems]= useState([]);
    return(
        <CartContext.Provider value={{items,setitems}}>
            {props.children}
        </CartContext.Provider>
    )
}