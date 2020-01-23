import React from 'react';
import '../App.css';

function Search(props) {
    const button = () => {
        if(props.search.length > 0) {
          return (
            <button>Add Note</button>
          );
      }
      }
    return (
        <div className='AddNote'>
            <form onSubmit={props.addNote} reset='true'>
                <input 
                    id="title"
                    name='title'
                    type='text'
                    value={props.search.title}
                    onChange={props.updateSearch}
                />
                {button()}
            </form>
        </div>
    );
}

export default Search;
