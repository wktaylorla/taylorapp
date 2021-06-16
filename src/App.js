import React, {useState} from 'react'
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList'

const App = () => {
  const [todoLists, setTodo] = useState([
    {
      id : 1,
      text : 'test 1',
      checked : true
    },
    {
      id : 2,
      text : 'test 2',
      checked : false
    },
    {
      id : 3,
      text : 'test 3',
      checked : true
    }
  ]);
  return (
    <Template>
      <TodoList todoS = {todoLists}/>
    </Template>
  )
}
export default App;
