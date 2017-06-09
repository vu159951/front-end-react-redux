import React from 'react'
import { TodoListWidgetView } from './todo.view'
import { connect } from 'react-redux'

@connect(state => ({
  dashboard: state.dashboard
}))
export class TodoListWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFullscreen: false,
      isDelete: false,
      isSetting: false
    }
    this.handleFullscreen = this.handleFullscreen.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSetting = this.handleSetting.bind(this)
  }

  handleFullscreen() {
    console.log('handleFullscreen')
    this.setState({
      isFullscreen: true
    })
  }
  handleDelete() {
    console.log('handleDelete')
    this.setState({
      isDelete: true
    })
  }
  handleSetting() {
    console.log('handleSetting')
    this.setState({
      isSetting: true
    })
  }

  render() {
      return (
          <TodoListWidgetView dashboard={this.props.dashboard} fullscreen={this.handleFullscreen} deletewidget={this.handleDelete}
           setting={this.handleSetting}/>
      )
  }
}
