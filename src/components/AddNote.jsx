import React, { useState } from "react";
import "../styles/addnote.scss";

function AddNote({ onCreate}) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  function closeButton(event) {
    if (note.title || note.content) {
      onCreate(note);
      setNote({
        title:"",
        content:""
      });
    }
    event.preventDefault();
  }

  return (
      <form className="note-create" id="note-create">
          <input 
            value={note.title}
            className="note-title" 
            placeholder="Title"
            onChange={handleChange}
            name="title"
            type="text"></input>
          <textarea
            name="content"
            value={note.content}
            className="note-content"
            id="note-content"
            placeholder="Take a note..."
            onChange={handleChange}
          ></textarea>
          <div className="note-close" onClick={closeButton}>Close</div>
      </form>
  );
}

export default AddNote;