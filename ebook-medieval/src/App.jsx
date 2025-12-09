import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Book from './components/Book'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* Background decoration */}
      <div className="background-pattern"></div>
      <div className="vignette"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-content">
              <motion.div 
                className="loader-book"
                animate={{ 
                  rotateY: [0, 180, 360],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 100 80" className="loader-svg">
                  <path d="M10,10 L10,70 Q50,60 50,70 L50,10 Q50,20 10,10" fill="currentColor" opacity="0.8"/>
                  <path d="M90,10 L90,70 Q50,60 50,70 L50,10 Q50,20 90,10" fill="currentColor" opacity="0.6"/>
                  <rect x="48" y="8" width="4" height="65" fill="currentColor"/>
                </svg>
              </motion.div>
              <motion.p 
                className="loader-text"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Opening the ancient tome...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="book"
            className="book-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <header className="app-header">
              <motion.h1 
                className="app-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                The AI Survival Kit
              </motion.h1>
              <motion.p 
                className="app-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                An Interactive Medieval Manuscript
              </motion.p>
            </header>

            <Book />

            <footer className="app-footer">
              <p>Drag the page corners or use the navigation buttons to turn pages</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
