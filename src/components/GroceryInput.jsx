import React from 'react';

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
  
export default GroceryInput;