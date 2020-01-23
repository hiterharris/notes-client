import React from 'react';
import '../App.css';

function List({notes, setSelectedNote, selected, search, filteredNotesList, removeNote}) {
  if(search.length > 0) {
    return (
      <div className='List'>
        {filteredNotesList.map( (item) => {
          return (
            <div
              key={item.id}
              className={selected ? 'list-item-selected' : 'list-item'}
              onClick={() => setSelectedNote(item.text)}
              >
              <h2>{item.title}</h2>
              <p>{item.date}</p>
              <button onClick={() => removeNote(item.id)}>X</button>
            </div>
          );
        })}
      </div>
    )
  } else {
    return (
        <div className='List'>
          {notes.map( (item) => {
            return (
              <div
                key={item.id}
                className={selected ? 'list-item-selected' : 'list-item'}
                onClick={() => (setSelectedNote(item.text))}
                >
                <h2>{item.title}</h2>
                <p>{item.date}</p>
                <button onClick={() => removeNote(item)}>X</button>
              </div>
            );
          })}
      </div>
    );
  }
}

export default List;
