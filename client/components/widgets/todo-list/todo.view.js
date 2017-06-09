import React from 'react'
import { Glyphicon} from 'react-bootstrap'
import WidgetPanel from '../../widgetpanel/widgetpanel.component'

export const TodoListWidgetView = ({ dashboard, fullscreen, deletewidget, setting }) => {
  return (
    <div className="panel panel-default panel-primary">
      <div className="panel-heading">
          <div className="panel-title pull-left">
             Todo List Widget
          </div>
          <div className="panel-title pull-right">
           <WidgetPanel
             isEdit={dashboard.isEdit}
             onFullscreen={fullscreen}
             onDelete={deletewidget}
             onSetting={setting}
           />
          </div>
        <div className="clearfix"></div>
      </div>
        <div className="panel-body">
          <div>
            todo container
          </div>
        </div>
    </div>
  )
}
