import React from 'react'
import cssModules from 'react-css-modules'
// import {Todos} from './components'
import style from './widget.style.scss'
import { Glyphicon } from 'react-bootstrap'

export const WidgetView = cssModules(({title, isEdit, onSetting, onRemove, onExpand, child}) => {
    return (
      <div className="panel panel-default panel-primary">
        <div className="panel-heading">
            <div className="panel-title pull-left">
               {title}
            </div>
            <div className="panel-title pull-right">
              <div>
                { isEdit ?
                    <div>
                      <Glyphicon onClick={() => onSetting()} glyph="cog"> </Glyphicon>
                      <Glyphicon onClick={() => onExpand()} glyph="fullscreen"> </Glyphicon>
                      <Glyphicon onClick={() => onRemove()} glyph="remove"></Glyphicon>
                   </div>
                   : <div>
                        <Glyphicon onClick={() => onExpand()} glyph="fullscreen"></Glyphicon>
                      </div>
                }
              </div>
            </div>
          <div className="clearfix"></div>
        </div>
          <div className="panel-body">
            {child}
         </div>
      </div>

    )
}, style, {errorWhenNotFound: false})
