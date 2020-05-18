import React from 'react';
import '../App.css';
const Note = props => {

  const handleChange = e => {
    e.preventDefault();
    props.setSelectedNote(e.target.value);
  } 

  const handleSubmit = e => {
    e.preventDefault();
    props.setSelectedNote(e.target.value);
    console.log(props.selectedNote);
  };

  if(props.notes.length === 0) {
    return (
      <div className='Note'>
        <textarea value={props.selectedNote} onChange={handleChange} />
      </div>
    );
  } else {
      return(
        <div className='Note'>
          <form onSubmit={handleSubmit}>
            <textarea name='textarea' value={props.selectedNote} onChange={handleChange} />
            <button onSubmit={handleSubmit}>Save</button>
          </form>
        </div>
      );
  }
}

export default Note;
