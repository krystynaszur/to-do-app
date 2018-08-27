import React from 'react';
import App from '../containers/App.js';
import style from './TodoForm.css';

function TodoForm(props) {
    return (
        <form className={style.TodoForm} onSubmit={function (event) {
            event.preventDefault();
            console.log("It is hard");
        }}>
            <input type="submit" value="Submit" />
        </form>
    )
}

/* /const TodoForm = props => (

    < form className = { style.TodoForm } onSubmit = {() => props.handleSubmit("Read")}>
        <input type="submit" value="Submit" />
    </form >
);*/

export default TodoForm;