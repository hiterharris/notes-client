import React, {useState} from 'react';
import '../App.css';

const Note = props => {
  const [text, setText] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
  } 

  // Need to update notes.text onSubmit
  const handleSubmit = e => {
    e.preventDefault();
    console.log(text);
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
