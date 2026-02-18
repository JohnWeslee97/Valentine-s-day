import React from 'react';
import { motion } from 'framer-motion';
import '../css/Last.css';
import man from "../assets/man.gif";
import pink from "../assets/pink.gif";

const Lastpage = ({stopMusic,playMusic}) => {

  // Generate multiple hearts
  const hearts = Array.from({ length: 20 });

  return (
    <div className='container'>
  {/* 💖 Floating Hearts */}
      <div className="hearts">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5;

          return (
            <span
              key={i}
              className="heart"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
      <h1 className='head' onClick={()=>{playMusic()}}>Happy Valentines Day</h1>

      <div className='imgcont'>
        <img src={man} alt="Man GIF" onClick={()=>{
          stopMusic()

        }} />
      </div>

      <footer>
        <img src={pink} alt="Pink GIF" className='pink'/>
        <h3 className='end'>The end...</h3>
      </footer>
    </div>
  );
};

export default Lastpage;
