import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
 

  return (
    <div className='nav'>
      <div className='nav-links-filled'>
       <span className='nav-links-item'>Home</span>
       <span className='nav-links-item'>Experience</span>
       <span className='nav-links-item'>Project</span>
       <span className='nav-links-item'>Writting</span>
       <span className='nav-links-item'>Chat</span>
      </div>
    </div>
  );
};

export default Navbar;