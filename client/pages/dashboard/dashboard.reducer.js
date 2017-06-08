import { DashboardAction } from './dashboard.action'
const initState = {
    title: 'My dashboard title',
    isEdit: true
}

export const dashboard = (state = initState, action) => {
  switch (action.type) {
    case DashboardAction.DASHBOARD_CHANGE_MODE:
      return {
        ...state,
        isEdit: action.mode === 'edit'
      }

    default:
      return state
  }
}
