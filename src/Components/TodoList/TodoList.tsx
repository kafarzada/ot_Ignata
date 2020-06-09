import React from 'react';

type TaskType = {
    id: number,
    todo: string,
    priority: string
}

type TodoListPropsType = {
    title:string,
    tasks:Array<TaskType>,
    toFilter: (value:string) => void,
    removeTask: (id: number) => void
}

function TodoList(props: TodoListPropsType) {

    let tskTaks = props.tasks.map(item => {
        return (
        <li key={item.id}>
            <span>{item.todo}. Приоритет: {item.priority}</span>
            <button onClick={() => { props.removeTask(item.id) }}><i className="fas fa-times"></i></button>
        </li>
        )
    })

    return (
           <div>
               <h3>{props.title}</h3>
               <ul>
                   {tskTaks}
               </ul>
               <button onClick={() => {props.toFilter("all")}}>all</button>
               <button onClick={() => {props.toFilter("high")}}>high</button>
               <button onClick={() => {props.toFilter("middle")}}>middle</button>
               <button onClick={() => {props.toFilter("low")}}>low</button>
           </div> 
    );
}

export default TodoList;