import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const products = [
    {name : 'Photoshop',price :'$99'},
    {name : 'Illustrator',price :'$59'},
    {name : 'PdfReader',price :'$29'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  //32.9 CREATE MULTIPLE COMPONENTS FROM AN ARRAY OF OBJECTS
  const nayoks = ['razzak', 'jasim', 'alamgir','sakib','salman'];
  return (
    <div className="App">
      <header className="App-header">

      <Users></Users>
      <Counter></Counter>

        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
        </ul>
        
        <Person></Person> 

        <Person1 name = "John Wick" food= "fuchka"></Person1>
        <Person1 name = "Tohn Wick" food= "Tuchka"></Person1>

        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
      </header>
    </div>
  );
}
//32.6 component declare and using component
function Person(){ 
  return (
  <div style={{border: "2px solid red"}}>
    <h1>This is a component</h1>
    <h2>Shakib </h2>
  </div>)
}
//32.7  passing data to components [IMPORTANT]
function Person1(props){
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>food : {props.food}</h2>
    </div>)
}
//32.8 Pass object to components and access object
function Product(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left'

  }

  return(
  <div style={productStyle}>
    <h2>Name : {props.name}</h2>
    <h5>Price : {props.price}</h5>
    <button>Buy Now</button>
  </div>
  )
}
//state change and evenet handler
//32.10 INTRODUCTION TO COMPONENT STATE
//32.11 COMPONENT STATE HOOK AND SET STATE METHOD
function Counter(){
  //32.10 
  const [count, setCount] = useState(10);
  //32.11
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () =>{
    const newCount = count - 1;
    setCount(newCount); 
  }
  return(
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
    )
}
//32.12 LOAD DYNAMIC DATA, API CALL USEEFFECT INTEGRATE STATE
function Users(){
  const [users, setUsers] = useState([]); //state hook declare
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.phone}</li>)
        }
      </ul>
    </div>
  )
}
export default App;

//32.13 MODULE SUMMARY REACT CORE CONCEPTS
/**
 * component
 * props
 * state
 * dynamic data load,useEffect
 */

/**
 * Notes : 
 * 32.5 :
 * component : 4 types
 * 1.similar in look different in data
 * 2.container component
 * 3.single unit component/header
 * 4.large unit for breakdwon
 */
