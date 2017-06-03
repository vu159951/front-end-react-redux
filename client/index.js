require("./assets/styles/app.scss")
import React from 'react'
import { render } from "react-dom"
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
// import { createStore, compose, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { AppRoute } from './routes'
import { AppReducers } from './reducers'

const initState = window.__INITIAL_STATE__ || {}
const store = createStore(AppReducers, initState, applyMiddleware(ReduxThunk))

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={AppRoute} dispatch={store.dispatch} />
    </Provider>
    , document.getElementById('app')
)
