import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import {v4 as uuid} from 'uuid'



function App() {
 
  const [tasks, setTasks] = useState([]);
  
  function addTask(title) {
    setTasks(tasks => {
      return [...tasks, 
              {id: uuid(), title, done: false}
      ]
    })    
  }
  

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))    
    return [...tasks]
  }

  function toggleDone(id, done) {
    setTasks(tasks => {
      return tasks.map(task => {
        if(task.id === id){
          return {...task, done:!done}
        } else {
          return task
        }
      })
    })
  }

  function clearTasks(e) {
    e.preventDefault()
    setTasks([])
  }

  return (
    <>    
     <Header onSubmit={addTask} clearTasks={clearTasks} />
     <div className='tasks-container'>
      <h2>todo list</h2>
      <ol>
          {tasks.map(task => <li key={task.id} style={task.done ? {color: 'rgb(32, 72, 41)', textDecoration: 'line-through'} : null}>
                                  {task.title}
                                  <button className='del-btn'onClick={()=>deleteTask(task.id)}>delete</button> 
                                  <button onClick={()=>toggleDone(task.id, task.done)} >done</button>
                             </li>)}
      </ol>
      
     </div>
    </>
  )
}

export default App
