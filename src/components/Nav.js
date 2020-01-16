import React from 'react';
import AddNote from './AddNote';
import '../App.css';

function Nav(addNote) {
  return (
    <div className='Nav'>
        <AddNote addNote={addNote} />
    </div>
  );
}

export default Nav;
