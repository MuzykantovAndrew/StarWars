import React from 'react';
import { DATALIST } from '../dataList';
import TodoItem from './TodoItem';


class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: DATALIST
        }
        this.changeStatus = this.changeStatus.bind(this);
    }


    changeStatus(id) {
        let selItem = this.state.todos.find(item => item.id === id);
        selItem.completed = !selItem.completed;
        this.setState({
            todos: this.state.todos
        });
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} changeStatus={this.changeStatus} />);
        return (
            <div id="mainList" >
                {todoItems}
            </div>
        );
    }
}

export default TodoList;

