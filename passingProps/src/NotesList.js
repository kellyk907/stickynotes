import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  /* props is the parameters*/
  /* renderNote passes the note and key props to the Note component */
  const renderNote = (note) => <Note note={note} key={note.id} />;
  /*result of mapping over array is noteElements */
  const noteElements = props.notes.map(renderNote);
  /* pass the noteElements var w/in the uL*/
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
