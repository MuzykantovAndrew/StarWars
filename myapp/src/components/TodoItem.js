import React from 'react'
import './css/toDoList.css'

function TodoItem(props) {
        return (
            <div className="task" >
                <label>
                    <input className="checkbox"
                        type="checkbox" checked={props.item.completed}
                        onChange={(event) => props.changeStatus(props.item.id)}
                    />

                    <span className="text">
                        {props.item.text}
                    </span>
                </label>
            </div>
        );
}

export default TodoItem;

