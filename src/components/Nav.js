import React from 'react';
import Search from './Search';
import '../App.css';

function Nav(props) {
  return (
    <div className='Nav'>
        <Search search={props.search} updateSearch={props.updateSearch} addNote={props.addNote} />
    </div>
  );
}

export default Nav;
