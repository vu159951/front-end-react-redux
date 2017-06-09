export const DashboardAction = {
    'DASHBOARD_CREATION': 'DASHBOARD_CREATION',
    'DASHBOARD_CHANGE_MODE': 'DASHBOARD_CHANGE_MODE',
    'DASHBOARD_REMOVE_WIDGET': 'DASHBOARD_REMOVE_WIDGET'
}

export const DashboardActionCreator = {
    createDashboard: () => {
        return {
            type: DashboardAction.DASHBOARD_CREATION
        }
    },
    changeMode: (mode) => {
      return {
        type: DashboardAction.DASHBOARD_CHANGE_MODE,
        mode
      }
    },
    removeWidget: (id) => {
      return {
        type: DashboardAction.DASHBOARD_REMOVE_WIDGET,
        id
      }
    }
}
