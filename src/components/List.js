import React from 'react';
import '../App.css';
import trash from '../images/trash.png';
import {useSelectedClass} from '../hooks/useSelectedClass';

function List({notes, selectedNote, setSelectedNote, search, filteredNotesList, removeNote}) {
  const [selected, setSelected] = useSelectedClass(selectedNote);

  const toggleSelected = () => {
    setSelected(!selected);
  }

  const handleClick = (item) => {
    setSelectedNote(item.text);
    // toggleSelected(item);
  }

  if(search.length > 0) {
    return (
      <div className='List'>
        {filteredNotesList.map( (item) => {
          return (
            <div
              key={item.id}
              className={selected ? 'list-item-selected' : 'list-item'}
              onClick={() => handleClick(item)}

              >
              <h2>{item.title}</h2>
              <p>{item.date}</p>
              <button className='delete' onClick={() => removeNote(item)}>
                  <img src={trash} />   
                </button>
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
                onClick={() => handleClick(item)}
              å>
                <div className='item-info'>
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                </div>
                <button className='delete' onClick={() => removeNote(item)}>
                  <img src={trash} />   
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}

export default List;
