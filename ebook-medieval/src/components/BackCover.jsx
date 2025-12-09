import React from 'react';
import { motion } from 'framer-motion';
import './BackCover.css';

const BackCover = ({ author }) => {
  return (
    <div className="back-cover-container">
      <div className="back-cover-texture"></div>
      
      {/* Corner ornaments */}
      <div className="back-corner-ornament top-left"></div>
      <div className="back-corner-ornament top-right"></div>
      <div className="back-corner-ornament bottom-left"></div>
      <div className="back-corner-ornament bottom-right"></div>

      <motion.div 
        className="back-cover-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dragon/emblem */}
        <motion.div 
          className="back-emblem"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg viewBox="0 0 150 150" className="dragon-svg">
            {/* Decorative border */}
            <circle cx="75" cy="75" r="70" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="75" cy="75" r="65" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,3"/>
            
            {/* Dragon silhouette */}
            <path d="M75,25 
                     Q90,30 95,45 
                     Q100,35 110,40 
                     Q105,50 100,55 
                     Q110,60 115,75 
                     Q120,85 115,95 
                     Q125,100 120,115 
                     Q110,120 100,115 
                     Q95,125 85,125 
                     Q75,130 65,125 
                     Q55,125 50,115 
                     Q40,120 30,115 
                     Q25,100 35,95 
                     Q30,85 35,75 
                     Q40,60 50,55 
                     Q45,50 40,40 
                     Q50,35 55,45 
                     Q60,30 75,25" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"/>
            
            {/* Eye */}
            <circle cx="65" cy="55" r="4" fill="currentColor"/>
            <circle cx="85" cy="55" r="4" fill="currentColor"/>
            
            {/* Flames/breath */}
            <path d="M75,70 Q80,80 75,90 Q70,80 75,70" fill="currentColor" opacity="0.6"/>
          </svg>
        </motion.div>

        {/* Quote/message */}
        <motion.div 
          className="back-quote-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="quote-decoration">
            <span className="deco-line"></span>
            <span className="deco-symbol">✦</span>
            <span className="deco-line"></span>
          </div>
          
          <p className="back-quote">
            "Use AI to optimize your time, but never let it replace your intellect."
          </p>
          
          <div className="quote-decoration">
            <span className="deco-line"></span>
            <span className="deco-symbol">✦</span>
            <span className="deco-line"></span>
          </div>
        </motion.div>

        {/* Final text */}
        <motion.p 
          className="back-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Value the process, not just the result.
        </motion.p>

        {/* Bottom section */}
        <motion.div 
          className="back-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="back-divider">
            <svg viewBox="0 0 200 20" className="divider-svg">
              <line x1="0" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="1"/>
              <circle cx="100" cy="10" r="5" fill="currentColor"/>
              <line x1="120" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          <p className="back-author">{author}</p>
          <p className="back-year">MMXXV</p>
        </motion.div>

        {/* Thank you message */}
        <motion.p 
          className="thank-you"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Thank you for reading
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BackCover;
