import React from "react";
import Note from "./Note.js";
/*updated where the array of notes was mapped over so that, instead of mapping over all of the notes that were passed in via props, only the notes that matched the search are mapped over.*/

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNote = (note) => <Note note={note} key={note.id} />;
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
