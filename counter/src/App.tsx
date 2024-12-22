import Counter from './Counter'
import './App.css'
import { counterContext } from './CounterContext'
import { useContext } from 'react'
function App() {
  const counterState = useContext(counterContext)
  return (
      <>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <br/>
      <Counter />
      <br/>
      <Counter />
      <br/>
      <Counter />
      </>    
  )
}

export default App
