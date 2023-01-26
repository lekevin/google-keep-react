import "./styles/main.scss";
import React, { useState } from "react";
import AddNote from "./components/AddNote.jsx";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function filterNotes(e) {
    console.log(e + "-----" + JSON.stringify(notes));
  }

  function addNote(newNote) {
    setNotes((notes) => {
      return [...notes, newNote];
    });
  }

  function noteRemove(id) {
    setNotes((notes) => {
      return [...notes.filter((note, index) => index !== id)];
    });
  }

  return (
    <body>
      <Header onSearch={filterNotes} />
      <AddNote onCreate={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            className="nnnooo"
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={noteRemove}
          />
        );
      })}
    </body>
  );
}

export default App;
