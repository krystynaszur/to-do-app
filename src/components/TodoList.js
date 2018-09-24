import React from 'react';
import uuid from 'uuid';
import Todo from "./Todo.js";
import App from '../containers/App.js';
import style from './TodoList.css';

const TodoList = props => (
    <div className={style.TodoList}>
        {
            props.tasks.map((element) => (
                <Todo key = {element.id} id={element.id} text={element.text} remove={props.remove}/>
            ))
        }
    </div>
);

export default TodoList;