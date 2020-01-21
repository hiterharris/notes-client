import React from 'react';
import '../App.css';

function List({notes, setSelectedNote, selected, toggleSelected}) {
  return (
      <div className='List'>
        {notes.map( (item) => {
          return (
            <div
              key={item.id}
              className={selected ? 'list-item-selected' : 'list-item'}
              onClick={() => setSelectedNote(item.text)}
              onClick={toggleSelected}
              >
              <h2>{item.title}</h2>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
  );
}

export default List;
