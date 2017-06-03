import ActionTypes from './action.types'

const submitLoginValue = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SUBMIT_LOGIN,
      data: { email, password }
    })
  }
}


export default {
    submitLoginValue
}