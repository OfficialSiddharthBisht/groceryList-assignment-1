import React from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
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

export default Grocery;