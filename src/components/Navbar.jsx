import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const navbarStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: 'rgba(10, 10, 15, 0.8)',
  backdropFilter: 'blur(8px)'
}

const titleStyles = {
  fontSize: '1.5rem',
  color: '#40c4ff',
  margin: 0,
  fontFamily: 'Nova Square'
}

const buttonStyles = {
  background: 'transparent',
  border: '2px solid #40c4ff',
  color: '#40c4ff',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.2s ease',
  fontFamily: 'Nova Square'
}

const Navbar = ({ onFlowChartClick }) => {
  return (
    <nav style={navbarStyles}>
      <motion.h1 
        style={titleStyles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        AI: Beyond the Horizon
      </motion.h1>
      <motion.button
        style={buttonStyles}
        onClick={onFlowChartClick}
        whileHover={{ scale: 1.05, background: 'rgba(64, 196, 255, 0.1)' }}
        whileTap={{ scale: 0.95 }}
      >
        Story Map
      </motion.button>
    </nav>
  )
}

Navbar.propTypes = {
  onFlowChartClick: PropTypes.func.isRequired
}

export default Navbar 