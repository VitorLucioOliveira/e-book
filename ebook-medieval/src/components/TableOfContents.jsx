import React from 'react';
import { motion } from 'framer-motion';
import './TableOfContents.css';

const TableOfContents = ({ chapters, onChapterClick }) => {
  return (
    <div className="toc-container">
      <div className="toc-texture"></div>
      
      <div className="toc-content">
        <motion.div 
          className="toc-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="toc-ornament">
            <svg viewBox="0 0 100 30" className="toc-ornament-svg">
              <path d="M0,15 Q25,5 50,15 Q75,25 100,15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="50" cy="15" r="4" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="toc-title">Contents</h2>
          <div className="toc-ornament">
            <svg viewBox="0 0 100 30" className="toc-ornament-svg">
              <path d="M0,15 Q25,25 50,15 Q75,5 100,15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="50" cy="15" r="4" fill="currentColor"/>
            </svg>
          </div>
        </motion.div>

        <div className="toc-list">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              className="toc-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              onClick={() => onChapterClick(index)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="toc-item-number">
                <span className="roman-numeral">{getRomanNumeral(chapter.id)}</span>
              </div>
              <div className="toc-item-content">
                <span className="toc-item-title">{chapter.title}</span>
                <span className="toc-dots"></span>
              </div>
              <div className="toc-item-page">{chapter.id * 2 + 1}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="toc-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="footer-ornament">
            <svg viewBox="0 0 150 40" className="footer-svg">
              <path d="M0,20 L50,20 M100,20 L150,20" stroke="currentColor" strokeWidth="1"/>
              <polygon points="75,5 85,20 75,35 65,20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="75" cy="20" r="5" fill="currentColor"/>
            </svg>
          </div>
          <p className="footer-text">Click on any chapter to navigate</p>
        </motion.div>
      </div>
    </div>
  );
};

// Helper function to convert numbers to Roman numerals
function getRomanNumeral(num) {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  return romanNumerals[num - 1] || num;
}

export default TableOfContents;
