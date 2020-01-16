import React, {useState} from 'react';
import { notesData } from './data/notesData';
import List from './components/List';
import Note from './components/Note';
import './App.css';

const App = () => {
    const [note] = useState(notesData);
    const [selectedNote, setSelectedNote] = useState(notesData[1].text)
    return (
        <div className='App'>
            <div className='List'>
                <List note={note} setSelectedNote={setSelectedNote} />
            </div>
            <div className='Note'>
                <Note selectedNote={selectedNote} />
            </div>
        </div>
    );
}

export default App;
