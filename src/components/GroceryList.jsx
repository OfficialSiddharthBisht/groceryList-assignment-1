
import React from "react"
  import Grocery from "./Grocery"

// array of object
const GroceryList = ({item ,handleDelete}) =>{
    return(
      <>
        {item.map((i)=>(
          <>
          <h1 key={i.id}>{i.title}</h1>
          <button onClick={()=>{
            handleDelete(i.id);
          }}>Delete</button>
          </>
        ))}
      </>
    )
  }


export default GroceryList;