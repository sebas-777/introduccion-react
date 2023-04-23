import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import{TodoSearch} from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import{CreateTodoButton} from "./CreateTodoButton.js";
import { TodoItem } from './TodoItem';


//import './App.css';

const defaultTodos =[
  {text:'Cortar cebolla', completed:true},
  {text:'Tomar el curso de intro de React', completed:true},
  {text:'Llorar con la llorona', completed:false},
];

function App() { 
 
  const[todos,setTodos] = React.useState(defaultTodos);
  const[searchValue,setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
      searchedTodos = todos;
  }else{ 

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText =  searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

    
  }

  return (
   <React.Fragment>
    <TodoCounter 
      total = {totalTodos}
      completed={completedTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
            <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
