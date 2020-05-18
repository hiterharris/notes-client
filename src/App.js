import React, {useState, useEffect} from 'react';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import axios from 'axios';
import './App.css';

import {connect} from 'react-redux';

const App = () => {

// Set notes from API request
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState([]);
    const [newNote, setNewNote] = useState(notes);
    
// Setting notes, selectedNotes to server data
    useEffect(() => {
        axios.get('http://localhost:3001/api/notes')
            .then(response => {
                console.log(response);
                setNotes(response.data);
                setSelectedNote(response.data.text)
            })
    }, [notes]);


//  Updating notes from search input
    const [search, setSearch] = useState([]);
    const updateSearch = (event) => {
        setSearch(event.target.value);
     }
    let filteredNotes = notes.filter((note) => {
            const titleResults = note.title.indexOf(search) !== -1;
            const textResults = note.text.indexOf(search) !== -1;
        return (titleResults + textResults);
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
            text: e.target.title.value,
            date: new Date().toISOString()
        }

        axios.post('http://localhost:3001/api/notes', newNote)
        .then(response => {
            setNewNote({
                ...response.data
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

// Remove note from List
    const removeNote = (item) => {
        axios.delete(`http://localhost:3001/api/notes/${item.id}`)
        .then(response => {
            console.log(response);
        })
    }

// Render App
    return (
        <div className='App'>
            <header>
                <Nav
                    search={search}
                    updateSearch={updateSearch.bind(this)}
                    addNote={addNote} selectedNote={selectedNote}
                    removeNote={removeNote}
                />
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
                    <Note selectedNote={selectedNote} setSelectedNote={setSelectedNote} notes={notes} setNotes={setNotes} filteredNotesList={filteredNotesList} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        defaultNotes: state.notes,
        defaultSelectedNote: state.selectedNote,
        defaultSearch: state.search,
    }
}

export default connect(
    mapStateToProps,
    {}
)(App);
