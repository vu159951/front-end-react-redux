export const DashboardAction = {
    'DASHBOARD_CREATION': 'DASHBOARD_CREATION',
    'DASHBOARD_CHANGE_MODE': 'DASHBOARD_CHANGE_MODE'
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
    }
}
