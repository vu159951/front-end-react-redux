import { combineReducers } from 'redux'
import LoginReducers from './login.reducers'
import { dashboard } from '../pages/dashboard/dashboard.reducer'
// import todos from '../components/widgets/todo-list/reducers/todos'
// import visibilityFilter from '../components/widgets/todo-list/reducers/visibilityFilter'
import { text } from '../components/widgets/text/text.reducer'

export const AppReducers = combineReducers({
    login: LoginReducers,
    text,
    dashboard
})
