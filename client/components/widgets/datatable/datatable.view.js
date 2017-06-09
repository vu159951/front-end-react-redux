import React from 'react'
import { Glyphicon } from 'react-bootstrap'

export const DatatableWidgetView = () => {
  return (
    <div className="panel panel-default panel-primary">
      <div className="panel-heading">
          <div className="panel-title pull-left">
             Datatable Widget
          </div>
          <div className="panel-title pull-right">
             <Glyphicon glyph="cog"> </Glyphicon>
             <Glyphicon glyph="fullscreen"> </Glyphicon>
             <Glyphicon glyph="remove"></Glyphicon>
          </div>
        <div className="clearfix"></div>
      </div>
        <div className="panel-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
    </div>
  )
}
