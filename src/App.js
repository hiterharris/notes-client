import React, {useState, useEffect} from 'react';
import { notesData } from './data/notesData';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import axios from 'axios';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(notesData[1].text);

    useEffect(() => {
        axios.get('http://localhost:3333/notes')
            .then(response => {
                console.log(response.data);
                setNotes(response.data);
            })
    }, [0]);



    const addNote = title => {
        const newNote = {
            id: Date.now(),
            title: title,
            date: Date.now(),
            text: '',
        };
        setNotes([...notes, newNote]);
    }

    return (
        <div className='App'>
            <header>
                <Nav addNote={addNote} />
            </header>
            <div className="wrapper">
                <div className='List'>
                    <List notes={notes} setSelectedNote={setSelectedNote} />
                </div>
                <div className='Note'>
                    <Note selectedNote={selectedNote} />
                </div>
            </div>
        </div>
    );
}

export default App;
