import React from "react";
import "../styles/addnote.scss";

function AddNote() {
  return (
    <body>
      <form className="note-create">
        <input className="note-title" placeholder="Title"></input>
        <textarea
          className="note-content"
          placeholder="Take a note..."
          color="blue"
        ></textarea>
        <div className="note-close">Close</div>
      </form>
    </body>
  );
}

export default AddNote;
