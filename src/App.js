import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
//import './App.css';

const todos =[
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de intro de React', completed:false},
  {text:'Llorar con la llorona', completed:false},
];

function App() {
  return (
   <React.Fragment>
    <TodoCounter/>
   <h2>Has completados 2 de 3 TODOS</h2>
   <TodoSearch/> 
   <input placeholder="Cebolla"/>
   <TodoList>
      {todos.map(todo =>(
        <TodoItem/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    <button>+</button>
   </React.Fragment>
  );
}

export default App;
