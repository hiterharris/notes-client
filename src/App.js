import React, {useState, useEffect} from 'react';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import axios from 'axios';
import {useSelectedClass} from './hooks/useSelectedClass';
import './App.css';

const App = () => {
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

    const [selected, setSelected] = useSelectedClass('list-item');
    const toggleSelected = e => {
      e.preventDefault();
      setSelected(!selected);
      // TODO: update class on single list item
    }

    const [search, setSearch] = useState('');
    const updateSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
     }

    return (
        <div className='App'>
            <header>
                <Nav search={search} updateSearch={updateSearch.bind(this)} />
            </header>
            <div className="wrapper">
                <div className='list-container'>
                    <List notes={notes} setSelectedNote={setSelectedNote} selected={selected} toggleSelected={toggleSelected} />
                </div>
                <div className='note-container'>
                    <Note selectedNote={selectedNote} />
                </div>
            </div>
        </div>
    );
}

export default App;
