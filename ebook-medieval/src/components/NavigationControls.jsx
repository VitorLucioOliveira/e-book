import React from 'react';
import { motion } from 'framer-motion';
import './NavigationControls.css';

const NavigationControls = ({ currentPage, totalPages, onNext, onPrev, onGoToPage }) => {
  return (
    <div className="navigation-controls">
      {/* Previous button */}
      <motion.button
        className="nav-button prev-button"
        onClick={onPrev}
        disabled={currentPage === 0}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 24 24" className="nav-icon">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="nav-label">Previous</span>
      </motion.button>

      {/* Page dots/indicators */}
      <div className="page-dots">
        {Array.from({ length: Math.min(totalPages, 10) }).map((_, index) => {
          const pageIndex = totalPages <= 10 ? index : Math.floor(index * totalPages / 10);
          const isActive = Math.abs(currentPage - pageIndex) < (totalPages / 10);
          
          return (
            <motion.button
              key={index}
              className={`page-dot ${isActive ? 'active' : ''}`}
              onClick={() => onGoToPage(pageIndex)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          );
        })}
      </div>

      {/* Next button */}
      <motion.button
        className="nav-button next-button"
        onClick={onNext}
        disabled={currentPage >= totalPages - 1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="nav-label">Next</span>
        <svg viewBox="0 0 24 24" className="nav-icon">
          <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default NavigationControls;
