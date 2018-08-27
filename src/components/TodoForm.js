import React, {Component} from 'react';
import App from '../containers/App.js';
import style from './TodoForm.css';

/*function TodoForm(props) {
    return (
        <form className={style.TodoForm} onSubmit={function (event) {
            event.preventDefault();
            console.log("It is hard");
        }}>
            <input type="submit" value="Submit" />
        </form>
    )
}*/

class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {task: ''};
    }
  
    handleSubmit(e) {
      e.preventDefault();
     this.props.handleSubmit(this.state.task);
    }
  
    handleChange(e) {
      this.setState({ task : e.target.value });
    }
  
    render() {
      return(
          <div>
          <p className={style.headline}>Add another task!</p>
        <form className={style.TodoForm} onSubmit={e => this.handleSubmit(e)}>
          <input
            placeholder='Write down the task and press enter'
            onChange={e => this.handleChange(e)}
            value={this.state.task}
          />
        </form>
        </div>
      );
    }
  }
/* /const TodoForm = props => (

    < form className = { style.TodoForm } onSubmit = {() => props.handleSubmit("Read")}>
        <input type="submit" value="Submit" />
    </form >
);*/

export default TodoForm;