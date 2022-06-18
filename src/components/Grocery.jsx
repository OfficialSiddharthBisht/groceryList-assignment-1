import React from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
import { v4 as uuidv4 } from 'uuid';
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

    const handleDelete = (id) =>{
      const updatedItem = item.filter(i=>i.id !== id);
      setItem(updatedItem);
    }
    return(
      <>
        <h1>Grocery List</h1>
        <GroceryInput handleAdd = {handleAdd}/>
        <GroceryList item={item} handleDelete = {handleDelete}/>
      </>
    )
  }

export default Grocery;