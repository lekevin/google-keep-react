import "./styles/main.scss";
import React, { useState } from "react";
import AddNote from "./components/AddNote.jsx";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";

function App() {
  const [notes, setNotes] = useState([]);
  let [updatedNotes, setUpdatedNotes] = useState(notes);

  function filterNotes(e) {
    if (e === "") {
      setUpdatedNotes(notes.slice());
      console.log("notes: " + notes);
      return notes;
    } else {
      let filteredNotes = notes.filter(
        (note) => note.title.includes(e) || note.content.includes(e)
      );
      setUpdatedNotes(filteredNotes);
      console.log("updatedNotes: " + updatedNotes);
      return updatedNotes;
    }
  }

  function addNote(newNote) {
    setNotes((notes) => {
      setUpdatedNotes([...notes, newNote]);
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
      {updatedNotes.map((note, index) => {
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
