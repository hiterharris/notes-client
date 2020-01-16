import React, {useState} from 'react';
import '../App.css';

function AddNote(note, handleChanges, handleSubmit, addNote) {
    const [newNote, setNewNote] = useState({
        title: ''
    });

    handleChanges = e => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value,
        });
        console.log(newNote);
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     addNote(newNote);
    //     setNewNote({
    //         title: ''
    //     });
    // }

    return (
        <div className='AddNote'>
            <form onSubmit={handleSubmit}>
                <input 
                    id="title"
                    name='title'
                    type='text'
                    onChange={handleChanges}
                    value={note.title}
                />
            </form>
        </div>
    );
}

export default AddNote;
