import React from 'react';
import classes from './TodoList.module.css';


type TaskType = {
    id: string,
    todo: string,
    priority: string
}

type TodoListPropsType = {
    title:string,
    tasks:Array<TaskType>,
    toFilter: (value:string) => void,
    removeTask: (id: string) => void
}

function TodoList(props: TodoListPropsType) {

    let tskTaks = props.tasks.map(item => {
        return (
        <div className={classes.todoItem} key={item.id}>
            <div className={classes.todo}>{item.todo}</div>
            <div className={classes.todo__priority}>{item.priority}</div>
            <div className={classes.btnClose} onClick={() => { props.removeTask(item.id) }}><i className="fas fa-times"></i></div>
        </div>
        )
    })

    return (
           <div>
               <h3>{props.title}</h3>
               <div className={classes.todoItems}>
                   {tskTaks}
               </div>
               <div className={classes.btns}>
                    <button className={`${classes.btn} ${classes.btn_all}`} onClick={() => {props.toFilter("all")}}>all</button>
                    <button className={`${classes.btn} ${classes.btn_high}`} onClick={() => {props.toFilter("high")}}>high</button>
                    <button className={`${classes.btn} ${classes.btn_middle}`} onClick={() => {props.toFilter("middle")}}>middle</button>
                    <button className={`${classes.btn} ${classes.btn_low}`} onClick={() => {props.toFilter("low")}}>low</button>
               </div>
           </div> 
    );
}

export default TodoList;