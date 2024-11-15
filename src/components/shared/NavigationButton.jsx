import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavigationButton = ({ to, children, style, delay = 0 }) => {
  const buttonStyles = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
    border: '2px solid #FFD700',
    color: '#FFD700',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontFamily: 'Nova Square, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    textShadow: '0 0 8px rgba(255, 215, 0, 0.5)',
    ...style
  }

  const glowStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
    opacity: 0,
    pointerEvents: 'none',
    mixBlendMode: 'screen'
  }

  const electricStyles = {
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'linear-gradient(45deg, transparent 0%, rgba(255, 215, 0, 0.6) 50%, transparent 100%)',
    backgroundSize: '200% 200%',
    opacity: 0,
    pointerEvents: 'none',
    borderRadius: '8px'
  }

  const arrowStyles = {
    marginLeft: '0.5rem',
    display: 'inline-block',
    color: '#FFD700',
    textShadow: '0 0 8px rgba(255, 215, 0, 0.5)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
    >
      <Link to={to}>
        <motion.div
          style={buttonStyles}
          whileHover={{ 
            scale: 1.02,
            boxShadow: [
              '0 0 20px rgba(255, 215, 0, 0.3)',
              '0 0 35px rgba(255, 215, 0, 0.2)',
              '0 0 50px rgba(255, 215, 0, 0.1)'
            ]
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            style={electricStyles}
            animate={{
              opacity: [0, 0.5, 0],
              backgroundPosition: ['200% 200%', '0% 0%', '-200% -200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.div
            style={glowStyles}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          {children}
          <motion.span
            style={arrowStyles}
            initial={{ x: 0 }}
            whileHover={{ x: 5, textShadow: '0 0 12px rgba(255, 215, 0, 0.8)' }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  )
}

NavigationButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  delay: PropTypes.number
}

export default NavigationButton 