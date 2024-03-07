import React, { useEffect } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  useEffect(() => {
    // Function to handle smooth scrolling when clicking on anchor links
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    // Attach event listeners to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup function to remove event listeners
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

 
    

  return (
    

    <div className='nav'>
      <div className='nav-links-filled'>
       <li><a href='#Home'>Home</a></li>
       <li><a href='#Experience'>Experience</a></li>
       <li><a href='#Work'>Work</a></li>
       <li><a href='#Blog'>Blog</a></li>
       <li><a href='#Connect'>Connect</a></li>
      </div>
    </div>
  );
};

export default Navbar;