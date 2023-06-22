import {v4 as uuid} from 'uuid'


function TaskList( {tasks, deleteTask, toggleDone} ) {
    
  return(
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
  )
}