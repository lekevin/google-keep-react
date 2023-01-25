import React from 'react'
import "../styles/note.scss";
import { AiOutlineDelete } from "react-icons/ai";

function Note(props) {
  
  return (
    <div className="notes-wrapper">
        <div className="notes-title">{props.title}</div>
        <div className="notes-content">{props.content}</div>
        <AiOutlineDelete size={22} className="delete button" onClick="delete"/>
    </div>
  )
}

export default Note