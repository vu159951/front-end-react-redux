import React from 'react'
import { TextWidgetView } from './text.view'
import { connect } from 'react-redux'

@connect(state => ({
  text: state.text,
  dashboard: state.dashboard
}))
export class TextWidget extends React.Component {
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
      console.log('handleTextWidgetFullscreen')
      this.setState({
        isFullscreen: true
      })
    }
    handleDelete() {
      console.log('handleTextWidgetDelete')
      this.setState({
        isDelete: true
      })
    }
    handleSetting() {
      console.log('handleTextWidgetSetting')
      this.setState({
        isSetting: true
      })
    }
    render() {
        return (
            <TextWidgetView title={this.props.text.title}
              content={this.props.text.content} dashboard={this.props.dashboard}
              fullscreen={this.handleFullscreen} deletewidget={this.handleDelete} isDeleted={this.props.isDelete}
             setting={this.handleSetting}/>
        )
    }

}
