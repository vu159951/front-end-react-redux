import ActionTypes from '../actions/action.types'

const initState = {
    isLogin: false
}

export default (state = initState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SUBMIT_LOGIN:
        return {
            ...state,
            isLogin: true,
            email: action.data.email,
            password: action.data.password
        }
    default: return state
  }
}