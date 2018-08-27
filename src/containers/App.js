import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';
//import Todo from '../components/Todo.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            },
            {
                id: 4,
                text: 'go to the cinema'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(task) {
        const todo = {
            text: task,
            id: uuid.v4(),
        };
        const newdata = [...this.state.data, todo];
        this.setState({ data: newdata });
        console.log("Is it working?");
    }
    removeTodo(id) {
        console.log("it is not easy");
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="My awesome list of things to do" taskNumber={this.state.data.length} />
                <TodoList tasks={this.state.data} remove={this.removeTodo} />
                <TodoForm handleSubmit={task => this.addTodo(task)}/>
            </div>
        );
    }
}
export default hot(module)(App);