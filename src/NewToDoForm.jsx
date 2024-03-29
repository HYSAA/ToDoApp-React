import { useState } from "react"

export function NewToDoForm(props){
props.onSubmit
const [newItem, setNewItem] = useState("")



function handleSubmit(e)
{
  e.preventDefault() 

  if(newItem==="")return
  props.onSubmit(newItem)
  

setNewItem("")
}

{
  //will add new changes
    return ( <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row"> 
      <label htmlFor="item">New Item</label>
      <input 
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      type="text" id="item" />
      </div>
      <button className="btn">Add Task</button>
    </form>
)}
}