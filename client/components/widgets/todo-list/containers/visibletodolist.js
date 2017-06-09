import {
	connect
} from 'react-redux'
import {
	toggleTodo
} from '../todo.action'
import TodoList from '../components/todolist'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
	case 'SHOW_ALL':
		return todos
	case 'SHOW_COMPLETED':
		return todos.filter(t => t.completed)
	case 'SHOW_ACTIVE':
		return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter),
		loading: state.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList
