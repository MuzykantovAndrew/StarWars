import React from 'react'
import TodoListApp from '../containers/todoListApp'
import Header from './Header'
import Footer from './Footer'
import '../style/todoList.css'

function App() {
    return (
        <>
            <Header />
            <TodoListApp />
            <Footer />
        </>
    )
}

export default App;