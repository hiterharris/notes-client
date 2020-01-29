import React, {useState, useEffect} from 'react';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import axios from 'axios';
import './App.css';

const App = () => {

// Set notes from API request
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState();

// Setting notes, selectedNotes to server data
    useEffect(() => {
        axios.get('http://localhost:3001/notes')
            .then(response => {
                setNotes(response.data);
                setSelectedNote(response.data[1].text)
            })
    }, []);

//  Updating notes from search input
    const [search, setSearch] = useState('');
    const updateSearch = (event) => {
        setSearch(event.target.value);
     }
    let filteredNotes = notes.filter((note) => {
        return (note.title.indexOf(search) !== -1, note.text.indexOf(search) !== -1);
    });
    const filteredNotesList = filteredNotes.map(note => {
        return note;
    });

// Add new note to notes array
    const addNote = (e) => {
        e.preventDefault();
        const newNote = {
            id: Date.now(),
            title: e.target.title.value,
            text: '',
            date: 'January 22, 2020 at 11:11 AM'
        }
        setNotes([...notes, newNote]);
        setSelectedNote(newNote.text);
    }

// Remove note from List
    const removeNote = (item) => {
        const remove = notes.filter(note => note.id !== item.id);
        setNotes(remove);
    }

// Rendering App
    return (
        <div className='App'>
            <header>
                <Nav search={search} updateSearch={updateSearch.bind(this)} addNote={addNote} selectedNote={selectedNote} removeNote={removeNote} />
            </header>
            <div className="wrapper">
                <div className='list-container'>
                    <List
                        notes={notes}
                        setSelectedNote={setSelectedNote}
                        search={search}
                        filteredNotesList={filteredNotesList}
                        removeNote={removeNote}
                    />
                </div>
                <div className='note-container'>
                    <Note selectedNote={selectedNote} notes={notes} />
                </div>
            </div>
        </div>
    );
}

export default App;
