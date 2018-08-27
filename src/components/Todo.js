import React from 'react';
import uuid from 'uuid';
import App from '../containers/App.js';
import style from './TodoList.css';

const Todo = props => <li className={style.listItem} onClick = {() => props.remove(props.id)}>{props.text}</li>;

export default Todo;