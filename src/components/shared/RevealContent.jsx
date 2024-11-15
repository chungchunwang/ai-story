import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const RevealContent = ({ children, style }) => {
  const containerStyles = {
    background: 'rgba(64, 196, 255, 0.1)',
    border: '1px solid #40c4ff',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '2rem',
    ...style
  }

  return (
    <motion.div
      style={containerStyles}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

RevealContent.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default RevealContent 