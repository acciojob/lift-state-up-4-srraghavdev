
import React,{useState} from "react";
import './../styles/App.css';
import Child from './Child'

const App = () => {
  let [cartItems,SetcartItems]= useState([{name:'Item 1', price:'10'},{name:'Item 2', price:'20'},{name:'Item 3', price:'35'},{name:'Item 4', price:'40'}])
  function additem(){
    let c={}
    c.name=document.getElementById('itemName').value
    c.price=document.getElementById('itemPrice').value
    console.log('1')
    document.getElementById('itemName').value=''
    document.getElementById('itemPrice').value=''
    SetcartItems([...cartItems,c])
  }
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <label>Item Name:</label>
      <input type='text' id='itemName'></input>
      <label>Item Price:</label>
      <input type='number' id='itemPrice'></input>
      <button onClick={additem}>Add Item</button>
        {<Child  set={SetcartItems} items={cartItems}/>}
    </div>
  )
}

export default App
