import React from 'react'
import "../styles/note.scss";

function Note(props) {
  return (
    <div className="notes-wrapper">
        <div className="notes-title">{props.title}</div>
        <div className="notes-content">{props.content}</div>
    </div>
  )
}

export default Note