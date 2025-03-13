import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React"},
    { id: 2, name: "Watching youtube"}
    
  ])
  
  const hoidanit = "baoo";
  const age = 25;
  const data = {
    address: 'hanoi',
    country: 'vietnam'
  }

  const addNewTodo = (name) => {
    alert('call me') 
  }
  
  addNewTodo()
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo} />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}
        
      />
      
      
      <div className='todo-image'></div>
      <img src={reactLogo} className='logo'/>
    </div>
  )
}
export default App
