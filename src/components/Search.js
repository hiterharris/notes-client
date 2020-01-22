import React from 'react';
import '../App.css';

function Search(props) {
    return (
        <div className='AddNote'>
            <form>
                <input 
                    id="title"
                    name='title'
                    type='text'
                    value={props.search.title}
                    onChange={props.updateSearch}
                />
            </form>
        </div>
    );
}

export default Search;
