import React from 'react';
import '../App.css';

function Note(props) {
  return (
    <div className='Note'>
        <div contenteditable="true">{props.selectedNote}</div>
    </div>
  );
}

export default Note;
