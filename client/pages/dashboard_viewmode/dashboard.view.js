import React from 'react'
import { TextWidget, TodoListWidget, SimpleChartWidget,
DatatableWidget, StockWidget, OrgChartWidget }
from '../../components/widgets'

export const DashboardViewModeView = () => {
  return (
    <div className="container-fluid">
        <h2>Dashboard title</h2>
        <div className="row">
            <div className="col col-md-4">
                <TextWidget />
            </div>
            <div className="col col-md-4">
                <TodoListWidget />
            </div>
            <div className="col col-md-4">
                <SimpleChartWidget />
            </div>
        </div>
        <div className="row">
            <div className="col col-md-4">
                <DatatableWidget />
            </div>
            <div className="col col-md-4">
                <StockWidget />
            </div>
            <div className="col col-md-4">
                <OrgChartWidget />
            </div>
        </div>
    </div>
  )
}
