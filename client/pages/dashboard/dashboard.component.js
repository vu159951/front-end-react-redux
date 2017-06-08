import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect, Provider } from 'react-redux'
import { DashboardActionCreator } from './dashboard.action'
@connect(state => ({dashboard: state.dashboard}))

export class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.handleViewModeClick = this.handleViewModeClick.bind(this)
    this.handleEditModeClick = this.handleEditModeClick.bind(this)
  }

    handleViewModeClick () {
      this.props.dispatch(DashboardActionCreator.changeMode('view'))
    }
    handleEditModeClick () {
      this.props.dispatch(DashboardActionCreator.changeMode('edit'))
    }
    render() {
        return <DashboardView dashboard={this.props.dashboard}
          onViewMode={this.handleViewModeClick} onEditMode={this.handleEditModeClick}/>
    }
}
