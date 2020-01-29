import React from 'react';
import '../App.css';

function Search(props) {
    const button = () => {
        if(props.search.length > 0) {
          return (
            <button className='add-button'>Add Note</button>
          );
      }
      }
    return (
        <div className='Search'>
            <form onSubmit={props.addNote} reset='true'>
                <input
                    type='text'
                    placeholder='Search'
                    name='title'
                    value={props.search.title}
                    onChange={props.updateSearch}
                />
                {button()}
            </form>
        </div>
    );
}

export default Search;
