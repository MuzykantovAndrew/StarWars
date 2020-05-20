import React from 'react'
import TodoListApp from '../conteiners/todoListApp'
import Header from './Header'
import '../style/todoList.css'

function App() {
    return (
        <>
            <Header />
            <TodoListApp />
        </>
    )
}

export default App;