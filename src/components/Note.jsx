import React from 'react'
import "../styles/note.scss";
import { AiOutlineDelete } from "react-icons/ai";

function Note(props, deleteNote, id) {

  return (
    <div className="notes-wrapper note-template" id={props.id}>
        <div className="notes-title title">{props.title}</div>
        <div className="notes-content content">{props.content}</div>
        <AiOutlineDelete size={22} className="delete button" type="button" onClick={() => props.deleteNote(props.id)}/>
    </div>
  )
}

export default Note