import React from 'react';
import Authorization from './Authorization'
import TodoList from './ToDoList';

function Main() {
    return (
        <div>
            <Authorization />
            <TodoList />
        </div>
    )
}

export default Main;