import React, {useState, useEffect} from 'react';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import axios from 'axios';
import {useSelectedClass} from './hooks/useSelectedClass';
import './App.css';

const App = () => {
    // Set notes from API request
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/notes')
            .then(response => {
                console.log(response.data);
                setNotes(response.data);
                setSelectedNote(response.data[1].text)
            })
    }, []);

    // Toggle class to highlight selected note
    const [selected, setSelected] = useSelectedClass('list-item');
    const toggleSelected = e => {
      e.preventDefault();
      setSelected(!selected);
    }

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

    // Rendering App
    return (
        <div className='App'>
            <header>
                <Nav search={search} updateSearch={updateSearch.bind(this)} />
            </header>
            <div className="wrapper">
                <div className='list-container'>
                    <List
                        notes={notes}
                        setSelectedNote={setSelectedNote}
                        selected={selected}
                        toggleSelected={toggleSelected}
                        search={search}
                        filteredNotesList={filteredNotesList} />
                </div>
                <div className='note-container'>
                    <Note selectedNote={selectedNote} />
                </div>
            </div>
        </div>
    );
}

export default App;
