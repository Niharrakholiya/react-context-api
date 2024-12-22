import Item from "./components/item"
import Cart from "./components/cart"
function App() {
  return(
    <div>
      <Item item={{name: "apple", price: 200}}/>
      <Item item={{name: "banana", price: 30}}/>
      <Item item={{name: "orange", price: 100}}/>
      <Cart />
    </div>
  )
}

export default App
