import {useContext} from 'react'
import  {counterContext} from './CounterContext'
 const Counter=()=>{
    const counterContext1 = useContext(counterContext);
    return(
        <>
        <button onClick={()=>counterContext1.setcount(counterContext1.count+1)}>Increment</button>
        <button onClick={()=>counterContext1.setcount(counterContext1.count-1)}>Decrement</button>
        </>
    )
}
export default Counter;