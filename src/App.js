import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import{TodoSearch} from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import{CreateTodoButton} from "./CreateTodoButton.js";
import { TodoItem } from './TodoItem';


//import './App.css';

const todos =[
  {text:'Cortar cebolla', completed:true},
  {text:'Tomar el curso de intro de React', completed:false},
  {text:'Llorar con la llorona', completed:false},
];

function App() {
  return (
   <React.Fragment>
    <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo =>(
            <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
