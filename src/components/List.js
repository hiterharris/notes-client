import React from 'react';
import '../App.css';

function List({note, setSelectedNote}) {
  return (
      <div className='list-container'>
        {note.map( (item) => {
          return (
            <div key={item.id} className="list-item" onClick={() => setSelectedNote(item.text)}>
              <h2>{item.title}</h2>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
  );
}

export default List;
