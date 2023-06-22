import { useState } from 'react';
import ReactLogo from '../assets/react.svg'



function Header({ onSubmit, clearTasks }) {
    const [input, setInput] = useState('');

    function getInput(e) {
        setInput(e.target.value);    
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        onSubmit(input)
        setInput('')
      }
    
      

    return (
        <div className='header-container'>
     <div className='logo'>
        <img src={ReactLogo} alt="" />
     </div>
        <h1>todo App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input"></label>
          <input id='input' type="text" onChange={(e)=> getInput(e)} value={input} />
          <button>add task</button>
          <button onClick={(e)=>clearTasks(e)}>clear list</button>
        </form>        
     </div>
    )
}

export default Header