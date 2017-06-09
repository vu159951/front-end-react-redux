import React from 'react'
import { Glyphicon} from 'react-bootstrap'

const Toolbox = ({ isEdit, onFullscreen, onDelete, onSetting }) => {
  if (isEdit) {
    return (
      <div>
        <Glyphicon onClick={() => onSetting()} glyph="cog"> </Glyphicon>
        <Glyphicon onClick={() => onFullscreen()} glyph="fullscreen"> </Glyphicon>
        <Glyphicon onClick={() => onDelete()} glyph="remove"></Glyphicon>
      </div>
    )
  }

  return (
    <div>
      <Glyphicon onClick={() => onFullscreen()} glyph="fullscreen"></Glyphicon>
    </div>
  )
}

export default Toolbox
