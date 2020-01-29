import React from 'react';
import Search from './Search';
import '../App.css';

import windowIcons from '../images/window-icons.png';
import sidebar from '../images/sidebar.png';
import icons from '../images/icons.png';
import trash from '../images/trash.png';
import newNote from '../images/new-note.png';
import check from '../images/check.png';
import lock from '../images/lock.png';

function Nav(props) {
  return (
    <div className='Nav'>
        <div className='window-icons'>
          <img src={windowIcons} alt='window icon'/>
        </div>
        <div className='action-container'>
          <div className='action-icon'>
            <img src={sidebar} />
          </div>
          <div className='action-icon'>
            <img src={icons} />
          </div>
          <div className='action-icon'>
            <img src={trash} />        
          </div>
          <div className='action-icon'>
            <img src={newNote} />
          </div>
          <div className='action-icon check'>
            <img src={check} />
          </div>
          <div className='action-icon lock'>
            <img src={lock} />
          </div>
        </div>
        <Search className='search-container' search={props.search} updateSearch={props.updateSearch} addNote={props.addNote} />
    </div>
  );
}

export default Nav;
