import React from 'react';
import AddNote from './AddNote';
import '../App.css';

function Nav(addNote, handleChanges) {
  return (
    <div className='Nav'>
        <AddNote addNote={addNote} />
    </div>
  );
}

export default Nav;
