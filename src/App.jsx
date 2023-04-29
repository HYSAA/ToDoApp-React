import { useState } from "react"
import "./styles.css"
import { NewToDoForm } from "./NewToDoForm"

export default function App()
{
  const [todos, setTodos] = useState([])


    
//     setTodos(currentTodos =>{
//       return [
//         ...currentTodos,
//         {id: crypto.randomUUID(), title: newItem,completed:false}
//       ]
//     } )
// setNewItem("")
//   
  function addToDo(title)
  {
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title,completed:false}
      ]
    } )
  }

function toggleToDo(id,completed){
  setTodos(currentTodos => {
    return currentTodos.map (todo=>{
      if (todo.id === id){
        return {...todo,completed}
      }
      return todo 
    })
   
  })  
}
function deleteToDo(id){
setTodos(currentTodos =>{
return currentTodos.filter(todo => todo.id !== id)

})

}
  
  return (  
  <> 
 <NewToDoForm onSubmit={addToDo}/>
  <h1 className="header">To Do List</h1>
  <ul className="list">
    {todos.length ===0 && "No Tasks"}
    {todos.map  
    (todo =>{
      return (
      <li key={todo.id}>
      <label> 
       <input type="checkbox" checked = {todo.completed}
       onChange={e => toggleToDo(todo.id,e.target.checked)}/>
   {todo.title}
      </label>
      <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger">Delete</button>
    </li> )
    })  }
   
    
  </ul>
  </>
  )
}
