import "./styles/main.scss";
import React, { useState } from "react";
import AddNote from "./components/AddNote.jsx";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  return (
    <body>
      <Header />
      <AddNote onCreate={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </body>
  );
}

export default App;
