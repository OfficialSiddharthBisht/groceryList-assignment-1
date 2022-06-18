
import React from "react"
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


export default GroceryList;