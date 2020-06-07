import React, { useState } from 'react';
import './App.css';
import Username from "./Components/Username/Username"
import MessageBox from "./Components/MessageBox/MessageBox";
import TodoList from './Components/TodoList/TodoList';
import Hello from './Components/Hello/Hello';

type user = {
  id: number,
  name:string
}
export let names:Array<user> = [] 

function App() {
  console.log("App rendered")

  let messages = [ //данные к 1 дз (MessageBox)
    {name :"Иван", messageText:"Lorem ipsum dolor sit=lectus quidem quis quam corporis rem laborum. Dolore sed aveniet culpa nemo veritatis tempore!", date:"12:43"},
    {name :"Alex", messageText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem aspernatur cupiditate, qui alias neque iusto dolores voluptatem quas eveniet, ea minus delectus quidem quis quam corporis rem laborum. Dolore sed aspernatur numquam minus delectus eveniet culpa nemo veritatis tempore!", date:"23:00"},
  ]
  let messageElem = messages.map(item => {
    return <MessageBox name={item.name} messageText={item.messageText} date={item.date} />
  })

  let [todolist, setTodolist] = useState([ // данные к 2 дз (Список дел)
    {id: 1, todo: "Купить Молоко", priority: "middle"},
    {id: 2, todo: "Футбол в 21:00", priority: "high"},
    {id: 3, todo: "Починить Шкафчик", priority: "low"},
  ])
  let todolist2 = todolist;

  let [filter, setFilter] = useState("all");

  


  // =====/==============ДЗ 2 (Begin) =======================

  function toFilter(value: string) {  
    setFilter(value)
  }

  function removeTask(id: number) { // метод удаления
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

  // \\\\\\\\\\\\\\\\\\\====ДЗ 2 (end)======\\\\\\\\\\\\\\\\\\\





  /*  ====================   ДЗ 3  BEGIN    ====================*/
  
let id = 0;
function hello(name: string) { // здоровается с именем
    if(name !== "") {
      names.push({id: id, name: name});
      alert(`Hello ${name}`);
      id++;
      console.log(names);
      
    }
}

  






  /*  ====================   ДЗ 3  ENG    ====================*/

  return (
    <div className="App">
        <Username lastName={"Kafarzada"} firstName={"Vurgun"} patronymic={"Эльдар оглы"}/>
        {messageElem} 
       <TodoList title={"День 2"} tasks={todolist2} toFilter={toFilter} removeTask={removeTask}/> 


        {/*  ===  =================   ДЗ 3  BEGIN    ====================*/}

          <Hello hello={hello}/>
          
        {/*  ====================   ДЗ 3  ENG    ====================*/}

    </div>
  );


  
}

export default App;
