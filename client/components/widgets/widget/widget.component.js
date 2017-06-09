import React from 'react'
import { WidgetView } from './widget.view'
import { DashboardActionCreator } from '../../../pages/dashboard/dashboard.action'
import { connect } from 'react-redux'
@connect()

export class Widget extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'New title: ',
      id: 1,
      type: 'TEXT'
    }
    this.handleSettingClick = this.handleSettingClick.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
    this.handleExpandClick = this.handleExpandClick.bind(this)
    this.isEdit = this.isEdit.bind(this)
  }
    isEdit(e) {
      this.props.isEdit(e.target.value)
    }

    handleExpandClick () {
      console.log(this.state.id);
      this.props.dispatch(DashboardActionCreator.changeMode('view'))
    }

    handleSettingClick () {
      this.props.dispatch(DashboardActionCreator.changeMode('view'))
    }
    handleRemoveClick () {

      this.props.dispatch(DashboardActionCreator.removeWidget(this.state.id))
    }
    render() {
        return <WidgetView title='New hihi' isEdit={this.props.isEdit}
          onSetting={this.handleSettingClick}
          onExpand={this.handleExpandClick} onRemove={this.handleRemoveClick} child={this.props.children}>
        </WidgetView>
    }
}
