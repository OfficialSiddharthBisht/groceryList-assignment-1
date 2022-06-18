import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';


// array of object
const GroceryList = ({item}) =>{
  return(
    <>
      {item.map((i)=>(
        <h1 key={i.id}>{i.title}</h1>
      ))}
    </>
  )
}

const GroceryInput = ({handleAdd}) =>{
  const [title,setTitle] = React.useState('');
  return(
    <>
      {/* input box */}
      <input type="text" 
      placeholder="Add Item" 
      value = {title}
      onChange={(event)=>{setTitle(event.target.value)}}
     
      />
      {/* button onClick -> A new item should get added to data*/}
      <button onClick={()=> {
        handleAdd(title)
        setTitle('');
        }}>Add</button>
    </>
  )
}

// (id , title , status)
//Parent
const Grocery = () =>{
  const [item,setItem] = React.useState([]);
  const handleAdd = (title) =>{
    const groceryItem = {
      title:title,
      status:false,
      id : uuidv4()   
    }
    
    setItem([...item,groceryItem]);
  }
  // console.log(item);
  return(
    <>
      <GroceryInput handleAdd = {handleAdd}/>
      <GroceryList item={item}/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Grocery />
    </div>
  );
}

export default App;

/*
Create a grocery list management application in React.
maintain the list of grocery items in an array Follow the structure:
Grocery.jsx
GroceryInput.jsx
GroceryList.jsx
User should be able to add the item to list, and delete it from list
*/
