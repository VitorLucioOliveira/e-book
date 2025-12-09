import React from 'react';
import { motion } from 'framer-motion';
import './CoverPage.css';

const CoverPage = ({ title, subtitle, author }) => {
  return (
    <div className="cover-container">
      <div className="cover-texture"></div>
      
      {/* Decorative corners */}
      <div className="corner-ornament top-left"></div>
      <div className="corner-ornament top-right"></div>
      <div className="corner-ornament bottom-left"></div>
      <div className="corner-ornament bottom-right"></div>

      {/* Spine decoration */}
      <div className="spine-decoration"></div>

      {/* Main content */}
      <motion.div 
        className="cover-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Top ornament */}
        <div className="top-ornament">
          <svg viewBox="0 0 200 60" className="ornament-svg">
            <path d="M100,5 L110,20 L130,15 L120,30 L140,35 L120,40 L130,55 L110,45 L100,60 L90,45 L70,55 L80,40 L60,35 L80,30 L70,15 L90,20 Z" fill="currentColor"/>
            <circle cx="100" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="60" cy="32" r="3" fill="currentColor"/>
            <circle cx="140" cy="32" r="3" fill="currentColor"/>
            <line x1="10" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="150" y1="32" x2="190" y2="32" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Title area */}
        <div className="title-frame">
          <div className="title-frame-inner">
            <h1 className="book-title">
              {title.split(' ').map((word, index) => (
                <motion.span 
                  key={index}
                  className="title-word"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p 
          className="book-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {subtitle}
        </motion.p>

        {/* Center emblem */}
        <motion.div 
          className="center-emblem"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.8, type: "spring" }}
        >
          <svg viewBox="0 0 120 120" className="emblem-svg">
            <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="3"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="1"/>
            {/* AI brain pattern */}
            <path d="M40,50 Q45,35 60,40 Q75,35 80,50 Q85,65 70,75 Q60,85 50,75 Q35,65 40,50" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="45" cy="52" r="4" fill="currentColor"/>
            <circle cx="75" cy="52" r="4" fill="currentColor"/>
            <circle cx="60" cy="68" r="4" fill="currentColor"/>
            <line x1="45" y1="52" x2="60" y2="68" stroke="currentColor" strokeWidth="1"/>
            <line x1="75" y1="52" x2="60" y2="68" stroke="currentColor" strokeWidth="1"/>
            <line x1="45" y1="52" x2="75" y2="52" stroke="currentColor" strokeWidth="1"/>
            {/* Decorative rays */}
            <g stroke="currentColor" strokeWidth="1" opacity="0.6">
              <line x1="60" y1="5" x2="60" y2="15"/>
              <line x1="60" y1="105" x2="60" y2="115"/>
              <line x1="5" y1="60" x2="15" y2="60"/>
              <line x1="105" y1="60" x2="115" y2="60"/>
            </g>
          </svg>
        </motion.div>

        {/* Author */}
        <motion.div 
          className="author-section"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <div className="author-divider">
            <span className="divider-line"></span>
            <span className="divider-ornament">✦</span>
            <span className="divider-line"></span>
          </div>
          <p className="author-label">Written by</p>
          <p className="author-name">{author}</p>
        </motion.div>

        {/* Bottom ornament */}
        <div className="bottom-ornament">
          <svg viewBox="0 0 200 40" className="ornament-svg">
            <path d="M20,20 Q50,5 100,20 Q150,35 180,20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="100" cy="20" r="5" fill="currentColor"/>
            <circle cx="20" cy="20" r="3" fill="currentColor"/>
            <circle cx="180" cy="20" r="3" fill="currentColor"/>
          </svg>
        </div>
      </motion.div>

      {/* Instruction text */}
      <motion.p 
        className="cover-instruction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        Click or drag to turn the page →
      </motion.p>
    </div>
  );
};

export default CoverPage;
