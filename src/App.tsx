import React, { useState } from 'react';
import './App.css';
import Username from "./Components/Username/Username"
import MessageBox from "./Components/MessageBox/MessageBox";
import TodoList from './Components/TodoList/TodoList';


type FilterType = {
  priority: "all" | "high" | "middle" | "low" 
}

function App() {

  let messages = [
    {name :"Иван", messageText:"Lorem ipsum dolor sit=lectus quidem quis quam corporis rem laborum. Dolore sed aveniet culpa nemo veritatis tempore!", date:"12:43"},
    {name :"Alex", messageText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem aspernatur cupiditate, qui alias neque iusto dolores voluptatem quas eveniet, ea minus delectus quidem quis quam corporis rem laborum. Dolore sed aspernatur numquam minus delectus eveniet culpa nemo veritatis tempore!", date:"23:00"},
  ]
  let messageElem = messages.map(item => {
    return <MessageBox name={item.name} messageText={item.messageText} date={item.date} />
  })

  let [todolist, setTodolist] = useState([
    {id: 1, todo: "Купить Молоко", priority: "middle"},
    {id: 2, todo: "Футбол в 21:00", priority: "high"},
    {id: 3, todo: "Починить Шкафчик", priority: "low"},
  ])
  

  let todolist2 = todolist;

  let [filter, setFilter] = useState("all");

  
  
  

  function toFilter(value: string) {
    setFilter(value)
  }

  function removeTask(id: number) {
    let f = todolist.filter(item => item.id !== id)
    setTodolist(f);
  }

  if(filter === 'all') {
    todolist2 = todolist;
  }

  if(filter === "higt") {
    todolist2 = todolist.filter(item => item.priority === "high");
  }

  if(filter === "middle") {
    todolist2 = todolist.filter(item => item.priority === "middle")
  }
  
  if(filter === "low") {
    todolist2 = todolist.filter(item => item.priority === "low");
  }

  return (
    <div className="App">
        <Username lastName={"Kafarzada"} firstName={"Vurgun"} patronymic={"Эльдар оглы"}/>
        {messageElem} 

       <TodoList title={"День 2"} tasks={todolist2} toFilter={toFilter} removeTask={removeTask}/> 

    </div>
  );


  
}

export default App;
