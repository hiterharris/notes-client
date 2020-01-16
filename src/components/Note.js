import React from 'react';
import '../App.css';

function Note(props) {
  console.log(props.selectedNote);
  return (
    <div className='Note'>
        <textarea className='text-area' type="text" defaultValue={props.selectedNote.text} value={props.selectedNote} />
    </div>
  );
}

export default Note;
