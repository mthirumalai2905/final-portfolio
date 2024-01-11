import React from 'react';
import './App.css';

const App = () => {
    return (
      <div>
        <div className='navbar'>
          <nav>
            <ul className='nav-list'>
              <li className='nav-item'>Home</li>
              <li className='nav-item'>About</li>
              <li className='nav-item'>Project</li>
              <li className='nav-item'>Blog</li>
            </ul>
          </nav>
        </div>
  
        <div className='home'>
          <h1 className='hero'>
            <span className='first'>Hello. I'm Thirumalai.</span>
            <span className='second'>Your Digital Artisan.</span>
            <p>I'm passionate about creating experiences that are easy to use, accessible, and that meet the user's needs</p>
          </h1>
        </div>
  
        <div className='about-container'>
          <h1 className='about-title'>About</h1>
          <p className='about-description'>I'm a 20 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. I decided to drop out of high school and pursue a coding career, facing challenges along the way. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a fullstack developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.</p>
        </div>
  
        <div className='skills-container'>
          <h1 className='skills-title'>Skillset</h1>
          <div className='skills-wrapper'>
          <span>React</span>
          <span>Mongo DB</span>
          <span>MySql</span>
          <span>Firebase</span>
          <span>Express</span>
          <span>Node.js</span>
          <span>Bootstrap</span>
          <span>Tailwind CSS</span>
          <span>Material-UI</span>
          <span>Github</span>
          <span>Git</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Figma</span>
          <span>Framer</span>
          <span>Spline</span>
          <span>Web design</span>
          <span>PHP</span>
          <span>Data Structures</span>
          <span>Javascript</span>
          <span>Algorithms</span>
          <span>Java</span>
          <span>Linux</span>
          <span>Kali linux</span>
          <span>Postman</span>
          <span>Command Prompt</span>
          <span>Vulnerability Assesment</span>
          </div>
        </div>
  
        <div className='exp-container'>
          <h1 className='exp-title'>Experiences</h1>
          <div className='exp-item'>
            <div className='exp-dates'>2023 - present</div>
          </div>
          <div className='exp-1'>
            <h2 className='about-exp-title'>Salesine - Full Stack Developer</h2>
            <p className='description'>I'm a 20 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. I decided to drop out of high school and pursue a coding career, facing challenges along the way. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a fullstack developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.</p>
            <div className='skills-req'>
              <span>Nest.js</span>
              <span>Vue.js</span>
              <span>Docker</span>
              <span>Prisma</span>
              <span>Insomnia</span>
            </div>
          </div>
        </div>

        <div className='exp-container'>
        <h1 className='exp-title'></h1>
        <div className='exp-item'>
          <div className='exp-dates'>2023 - present</div>
        </div>
        <div className='exp-1'>
          <h2 className='about-exp-title'>Pixaflip - UI/UX Designer</h2>
          <p className='description'>I'm a 20 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. I decided to drop out of high school and pursue a coding career, facing challenges along the way. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a fullstack developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.</p>
          <div className='skills-req'>
            <span>Figma</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MySql</span>
            <span>Postman</span>
            <span>Mongoose</span>
          </div>
        </div>
      </div>

      <div className='exp-container'>
      <h1 className='exp-title'></h1>
      <div className='exp-item'>
        <div className='exp-dates'>2023 - present</div>
      </div>
      <div className='exp-1'>
        <h2 className='about-exp-title'>Ampex web - Web Developer</h2>
        <p className='description'>I'm a 20 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. I decided to drop out of high school and pursue a coding career, facing challenges along the way. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a fullstack developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.</p>
        <div className='skills-req'>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>PHP</span>
          <span>Postman</span>
          <span>Linux</span>
        </div>
      </div>
    </div>

    <div className='exp-container'>
      <h1 className='exp-title'></h1>
      <div className='exp-item'>
        <div className='exp-dates'>2023 - present</div>
      </div>
      <div className='exp-1'>
        <h2 className='about-exp-title'>Verzeo - CyberSecurity</h2>
        <p className='description'>I'm a 20 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. I decided to drop out of high school and pursue a coding career, facing challenges along the way. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a fullstack developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.</p>
        <div className='skills-req'>
          <span>Linux</span>
          <span>Kali Linux</span>
          <span>Command Prompt</span>
          <span>Vulnerability Assesment</span>
          <span>Network Scanning</span>
          <span>PHP</span>
        </div>
      </div>
    </div>

  
     
      </div>
    );
  }
  
  export default App;
