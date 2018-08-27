import React from 'react';
import uuid from 'uuid';
import Todo from "./Todo.js";
import App from '../containers/App.js';
import style from './TodoList.css';

const TodoList = props => (
    <div className={style.TodoList}>
        {
            props.tasks.map((element) => (
                <li className={style.listItem} onClick = {() => props.remove(element.id)}>
                    {element.text}
                </li>
            ))
        }
    </div>
);

export default TodoList;