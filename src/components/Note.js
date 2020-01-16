import React from 'react';
import '../App.css';

function Note(props) {
  return (
    <div className='Note'>
        <div contentEditable="true">{props.selectedNote}</div>
    </div>
  );
}

export default Note;
