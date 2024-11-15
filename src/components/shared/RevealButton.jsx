import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const RevealButton = ({ onClick, children, style }) => {
  const buttonStyles = {
    background: 'rgba(64, 196, 255, 0.1)',
    border: '1px solid #40c4ff',
    borderRadius: '8px',
    padding: '1rem 2rem',
    color: '#40c4ff',
    cursor: 'pointer',
    marginBottom: '1rem',
    fontFamily: 'Nova Square, sans-serif',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    ...style
  }

  return (
    <motion.button
      style={buttonStyles}
      onClick={onClick}
      whileHover={{ 
        background: 'rgba(64, 196, 255, 0.2)',
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

RevealButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default RevealButton 