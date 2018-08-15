import React from 'react';
import uuid from 'uuid';
import style from './Title.css';
import App from '../containers/App.js';

const Title = props => <div>    <h1 className={style.Title}>{props.title}</h1>
<p className={style.TaskNumber}>The number of tasks to be performed: {props.taskNumber}</p>
</div>

/*class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    
    render() {
        return (
            <div>
            <h1 className={style.Title}>
                Zadania do wykonania
            </h1>
            <p className={style.TaskNumber}>Liczba zadań do wykonania wynosi: {this.state.data.length}</p>
            </div>
        );
    }
}*/

export default Title;