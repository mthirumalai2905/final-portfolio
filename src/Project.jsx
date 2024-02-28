import React from 'react';
import './App.css';

const Project = () => {
  const redirectToProject = (projectUrl) => {
    // Use window.location.href to navigate to the project URL
    window.location.href = projectUrl;
  };

  return (
    <div>
      <div className='projects-container'>
        <h2 className='projects-headline'>Projects</h2>
        <div className='projects-wrapper'>
          {/* Use onClick to trigger redirection */}
          <div className='projects-card' onClick={() => redirectToProject('https://imdb-clone-react-app-gamma.vercel.app/')} target='_blank'>
            <div className='projects-card-gardient'></div>
            <div className='projects-card-links'></div>
            <h3 className='projects-card-name'>Imdb Clone</h3>
            <div className='projects-card-languages'><span>React</span><span>Firebase</span><span>API</span></div>
          </div>

          {/* Other project cards */}
          <div className='projects-card' onClick={() => redirectToProject('https://sketch-green.vercel.app')} target='_blank'>
            <div className='projects-card-gardient'></div>
            <div className='projects-card-links'></div>
            <h3 className='projects-card-name'>Sketch App</h3>
            <div className='projects-card-languages'><span>React</span><span>Rough.js</span></div>
          </div>

          <div className='projects-card' onClick={() => redirectToProject('https://github.com/mthirumalai2905/mern-blog-app')} target='_blank'>
            <div className='projects-card-gardient'></div>
            <div className='projects-card-links'></div>
            <h3 className='projects-card-name'>Blog App</h3>
            <div className='projects-card-languages'><span>React</span><span>Mongo DB</span><span>Express</span><span>Node.js</span></div>
          </div>

          <div className='projects-card' onClick={() => redirectToProject('https://weather-web-app-eight.vercel.app/')} target='_blank'>
            <div className='projects-card-gardient'></div>
            <div className='projects-card-links'></div>
            <h3 className='projects-card-name'>Weather ForeCast</h3>
            <div className='projects-card-languages'><span>HTML</span><span>CSS</span><span>Javascript</span><span>API</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
