import React from 'react';
import '../App.css';

function List({notes, setSelectedNote}) {
  return (
      <div className='list-container'>
        {notes.map( (item) => {
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
