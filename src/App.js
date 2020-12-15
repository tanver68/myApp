import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar','jabbar','sarif']
  const products = [
    {name:'Photoshop',price:'$90.4'},
    {name:'illustator',price:'$60.5'},
    {name:'pdf-reader',price:'$5.89'}

  ]

  const friends  = [
    {name:'abdul',age:'24'},
    {name:'karim',age:'50'},
    {name:'jabbar',age:'80'},
    {name:'sahin',age:'30'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Users></Users>

       {
         friends.map(fd =><Friend friend={fd}></Friend>)
       }
        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
        <Person name={nayoks[0]} ></Person>
        <Person name={nayoks[1]} ></Person>
        <Person></Person>
        <Person></Person>
     

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}
             //AKHANE COUNTER ER KAJ KORA HOYCE increment and decrement er kajo kora hoyce:
function Counter(){
  const [count,setCount] = useState(0);
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount)
  };
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  };
  return(
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
             //HOW TO DATA LOAD IN REACT 

function Users (){
  const [users, setUsers]= useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Uses : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} + {user.email} + {user.phone}</li>)
        }
      </ul>
    </div>
  )
}



                     // AKHANE DYNAMICALY FREIND LIST TOYRE KORA HOYCE MAP USE KORE


function Friend(props){
  const friendStyle={
    height:'200px',
    width:'200px',
    border: '1px solid gray',
    borderRadius:'5px',
    float:'left',
    backgroundColor:'lightgray',
    margin:'10px'
  }
  return (
    <div style={friendStyle} >
      <h3>{props.friend.name}</h3>
      <h4>{props.friend.age}</h4>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    margin:'20px',
    float:'left'
  }
  return (
      <div style={productStyle} >
      <h3>{props.product.name}</h3>
      <h5>Price: {props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
  
}


function Person(props){
  const personStyle = {
    border:'2px solid red',
    backgroundColor: 'black',
    color: 'yellow',
    margin:'5px'
  }
  return <div style={personStyle}>
  
 <h1>jdhjhfhjkfhjk + {props.name}</h1> 
 <p>dgfhhjfhhjhfjhjh</p>

  </div>
}



export default App;
