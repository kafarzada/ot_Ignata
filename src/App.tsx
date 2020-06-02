import React from 'react';
import './App.css';
import Username from "./Components/Username/Username"
import MessageBox from "./Components/MessageBox/MessageBox";

function App() {

  

  return (
    <div className="App">
        <Username lastName={"Kafarzada"} firstName={"Vurgun"} patronymic={"Эльдар оглы"}/>
        <MessageBox name={"Иван"} messageText={"Lorem ipsum dolor sit=lectus quidem quis quam corporis rem laborum. Dolore sed aveniet culpa nemo veritatis tempore!"} date={"12:43"} />
        <MessageBox name={"Alex"} messageText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem aspernatur cupiditate, qui alias neque iusto dolores voluptatem quas eveniet, ea minus delectus quidem quis quam corporis rem laborum. Dolore sed aspernatur numquam minus delectus eveniet culpa nemo veritatis tempore!"} date={"12:43"} />
       
    </div>
  );
}

export default App;
