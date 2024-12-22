    import { useState} from 'react';
    import { counterContext } from './CounterContext';
    export const ContextProvider = (props)=>{
        const [count,setcount] = useState(0);
        return(
        <counterContext.Provider value={{count,setcount}}>
            {props.children}
        </counterContext.Provider>
        )
    }

