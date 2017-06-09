import { DashboardAction } from './dashboard.action'
const initState = {
    title: 'My dashboard title',
    isEdit: true,
    layoutColumn: 3,
    widgets: [
        {
            id: 1,
            title: 'widget 1',
            type: 'TEXT'
        },
        {
            id: 2,
            title: 'widget 2',
            type: 'TEXT'
        },
        {
            id: 3,
            title: 'widget 3',
            type: 'TEXT'
        }
    ]
}

export const dashboard = (state = initState, action) => {
  switch (action.type) {
    case DashboardAction.DASHBOARD_CHANGE_MODE:
      return {
        ...state,
        isEdit: action.mode === 'edit'
      }

    case DashboardAction.DASHBOARD_REMOVE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.id)
      }

    default:
      return state
  }
}
