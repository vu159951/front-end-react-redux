import React from 'react'
import {AppView} from './app.view'

export class AppLayout extends React.Component {
    render() {
        return <AppView page={this.props.children}/>
    }
}
