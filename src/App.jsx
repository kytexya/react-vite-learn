import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'

const App = () => {
  
  const hoidanit = "baoo";
  const age = 25;
  const data = {
    address: 'hanoi',
    country: 'vietnam'
  }
  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
      />
      
      
      <div className='todo-image'></div>
      <img src={reactLogo} className='logo'/>
    </div>
  )
}
export default App
