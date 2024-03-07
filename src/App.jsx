import React from 'react';
import './App.css';
import Blogs from './Blogs';
import Footer from './Footer';
import Header from './Header';
import Experience from './Experience';
import Navbar from './Navbar';
import Project from './Project';

const App = () => {
    return (
      <div>
       <Navbar />
       <Header />
       <Experience />
       <Project />
       <Blogs />
       <Footer />
  
     
      </div>
    );
  }
  
  export default App;
