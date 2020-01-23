import React from 'react';
import Search from './Search';
import '../App.css';
import red from '../images/red-icon.png';

function Nav(props) {
  return (
    <div className='Nav'>
        <div className='window-icons'>
          <img className='red' src={red} alt='window icon'/>
          <img className='red' src={red} alt='window icon'/>
          <img className='red' src={red} alt='window icon'  />
        </div>
        <div className='action-container'>
          <div className='action-icon'></div>
          <div className='action-icon'></div>
          <div className='action-icon'></div>
          <div className='action-icon'></div>
          <div className='action-icon'></div>
          <div className='action-icon'></div>
        </div>
        <Search search={props.search} updateSearch={props.updateSearch} addNote={props.addNote} />
    </div>
  );
}

export default Nav;
