import React from 'react'
import TextWidget from './text-widget'

export class DashboardViewMode extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Dashboard title</h2>
                <div className="row">
                    <div className="col col-md-4">
                        <TextWidget />
                    </div>
                </div>
            </div>
        )
    }
}
