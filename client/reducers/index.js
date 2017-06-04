import { combineReducers } from 'redux'
import LoginReducers from './login.reducers'
import { dashboard } from '../pages/dashboard/dashboard.reducer'

export const AppReducers = combineReducers({
    login: LoginReducers,
    dashboard
})
