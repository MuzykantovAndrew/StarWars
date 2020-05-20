import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { add, remove, edit } from '../actions/actionsCreators'

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

function mapDispathToProps(dispath) {
    return {
        addItem: (newItem) => dispath(add(newItem)),
        removeItem: (id) => dispath(remove(id)),
        editItem: (data, id) => dispath(edit(data, id))
    }
}

const todoListApp = connect(mapStateToProps, mapDispathToProps)(TodoList)

export default todoListApp;