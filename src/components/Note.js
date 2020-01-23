import React from 'react';
import '../App.css';

function Note(props) {
  if(props.notes.length === 0) {
    return (
      <div className='Note'>
        <div contentEditable="true" suppressContentEditableWarning={true}>{props.notes.text}</div>
      </div>
    );
  } else {
      return(
        <div className='Note'>
          <div contentEditable="true" suppressContentEditableWarning={true}>{props.selectedNote}</div>
        </div>
      );
  }
}

export default Note;
