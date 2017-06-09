import React from 'react'
import WidgetPanel from '../../widgetpanel/widgetpanel.component'
import TextEditor from './components/texteditor/texteditor.component'
import { Widget } from '../widget/widget.component'

export const TextWidgetView = ({isEdit}) => {
  return (
        <div>
          <Widget isEdit='true'>
            <TextEditor/>
          </Widget>
        </div>
  )
}
