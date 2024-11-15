import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const TypewriterText = ({ lines, onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState([])
  const [waitingForInput, setWaitingForInput] = useState(false)

  const nextLine = useCallback(() => {
    if (currentLineIndex < lines.length) {
      setDisplayedLines(prev => [...prev, lines[currentLineIndex]])
      setCurrentLineIndex(prev => prev + 1)
      setWaitingForInput(false)
      if (currentLineIndex === lines.length - 1 && onComplete) {
        onComplete()
      }
    }
  }, [currentLineIndex, lines, onComplete])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && waitingForInput) {
        nextLine()
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [currentLineIndex, lines, waitingForInput, onComplete, nextLine])

  useEffect(() => {
    if (currentLineIndex < lines.length && !waitingForInput) {
      const timer = setTimeout(() => {
        setWaitingForInput(true)
      }, 300) // Wait 1 second after displaying line before accepting next input
      
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, lines.length, waitingForInput])

  return (
    <div style={{ textAlign: 'left' }}>
      {displayedLines.map((line, index) => (
        <p 
          key={index}
          style={{
            margin: '1rem 0',
            opacity: 1,
            transform: 'translateY(0)',
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          {line}
        </p>
      ))}
      {waitingForInput && currentLineIndex < lines.length && (
        <motion.div style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'rgba(64, 196, 255, 0.1)',
          border: '1px solid #40c4ff',
          borderRadius: '4px',
          color: '#40c4ff',
          fontSize: '0.8rem',
          marginTop: '1rem'
        }} 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={nextLine}>
          Press Enter to continue...
        </motion.div>
      )}
    </div>
  )
}

TypewriterText.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  onComplete: PropTypes.func
}

export default TypewriterText 