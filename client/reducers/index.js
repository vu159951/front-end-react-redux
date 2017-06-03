import { combineReducers } from 'redux'
import LoginReducers from './login.reducers'

export const AppReducers = combineReducers({
    login: LoginReducers
})
