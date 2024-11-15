import { useCallback, useEffect, useState } from 'react'
import ReactFlow, { 
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType
} from 'reactflow'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getProgress, hasUnlocked } from '../utils/storyProgress'
import 'reactflow/dist/style.css'

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(10, 10, 15, 0.9)',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const containerStyles = {
  width: '90%',
  height: '90%',
  background: '#1a1a1f',
  borderRadius: '8px',
  position: 'relative'
}

const closeButtonStyles = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'transparent',
  border: 'none',
  color: '#fff',
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 1,
  transition: 'color 0.2s ease'
}

const nodeTypes = {
  custom: ({ data }) => (
    <div
      style={{
        padding: '15px',
        borderRadius: '8px',
        background: data.unlocked 
          ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)'
          : 'rgba(128, 128, 128, 0.1)',
        border: `2px solid ${data.unlocked ? '#FFD700' : '#808080'}`,
        color: data.unlocked ? '#FFD700' : '#808080',
        cursor: data.unlocked ? 'pointer' : 'not-allowed',
        fontSize: '0.9rem',
        textAlign: 'center',
        minWidth: '180px',
        boxShadow: data.unlocked 
          ? '0 0 15px rgba(255, 215, 0, 0.2)'
          : 'none'
      }}
    >
      <div style={{
        fontWeight: 'bold',
        marginBottom: '8px',
        color: data.unlocked ? '#FFD700' : '#808080',
        textShadow: data.unlocked ? '0 0 8px rgba(255, 215, 0, 0.5)' : 'none'
      }}>
        {data.title}
      </div>
      <div style={{
        fontSize: '0.8rem',
        opacity: 0.8
      }}>
        {data.label}
      </div>
    </div>
  )
}

const initialNodes = [
  {
    id: '/',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: { 
      title: 'Introduction',
      label: 'Start your journey',
      path: '/',
      unlocked: true
    }
  },
  {
    id: 'falling-behind',
    type: 'custom',
    position: { x: -200, y: 100 },
    data: { 
      title: 'Falling Behind',
      label: 'Impose Restrictions',
      path: '/falling-behind',
      unlocked: false
    }
  },
  {
    id: 'unrestricted-ai',
    type: 'custom',
    position: { x: 200, y: 100 },
    data: { 
      title: 'Unrestricted AI',
      label: 'No Restrictions',
      path: '/unrestricted-ai',
      unlocked: false
    }
  },
  {
    id: 'maintain-restrictions',
    type: 'custom',
    position: { x: -300, y: 200 },
    data: { 
      title: 'Maintain Restrictions',
      label: 'Stay the Course',
      path: '/maintain-restrictions',
      unlocked: false
    }
  },
  {
    id: 'fund-research',
    type: 'custom',
    position: { x: -100, y: 200 },
    data: { 
      title: 'Fund Research',
      label: 'Balanced Approach',
      path: '/fund-research',
      unlocked: false
    }
  },
  {
    id: 'implement-controls',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: { 
      title: 'Implement Controls',
      label: 'Add Safeguards',
      path: '/implement-controls',
      unlocked: false
    }
  },
  {
    id: 'continue-unrestricted',
    type: 'custom',
    position: { x: 300, y: 200 },
    data: { 
      title: 'Continue Unrestricted',
      label: 'Full Speed Ahead',
      path: '/continue-unrestricted',
      unlocked: false
    }
  },
  {
    id: 'lose-support',
    type: 'custom',
    position: { x: -300, y: 300 },
    data: { 
      title: 'Lose Support',
      label: 'Public Opposition',
      path: '/lose-support',
      unlocked: false
    }
  },
  {
    id: 'welfare-programs',
    type: 'custom',
    position: { x: -100, y: 300 },
    data: { 
      title: 'Welfare Programs',
      label: 'Support Workers',
      path: '/welfare-programs',
      unlocked: false
    }
  },
  {
    id: 'retrain-workers',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { 
      title: 'Retrain Workers',
      label: 'Education Focus',
      path: '/retrain-workers',
      unlocked: false
    }
  },
  {
    id: 'robots-take-jobs',
    type: 'custom',
    position: { x: 300, y: 300 },
    data: { 
      title: 'Robots Take Jobs',
      label: 'Mass Automation',
      path: '/robots-take-jobs',
      unlocked: false
    }
  },
  {
    id: 'mass-unemployment',
    type: 'custom',
    position: { x: -100, y: 400 },
    data: { 
      title: 'Mass Unemployment',
      label: 'Economic Crisis',
      path: '/mass-unemployment',
      unlocked: false
    }
  },
  {
    id: 'no-welfare',
    type: 'custom',
    position: { x: 100, y: 400 },
    data: { 
      title: 'No Welfare',
      label: 'Social Unrest',
      path: '/no-welfare',
      unlocked: false
    }
  }
]

const initialEdges = [
  { 
    id: 'e1-2',
    source: '/',
    target: 'falling-behind',
    animated: true,
    label: 'Yes',
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e1-3',
    source: '/',
    target: 'unrestricted-ai',
    animated: true,
    label: 'No',
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e2-4',
    source: 'falling-behind',
    target: 'maintain-restrictions',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e2-5',
    source: 'falling-behind',
    target: 'fund-research',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e3-6',
    source: 'unrestricted-ai',
    target: 'implement-controls',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e3-7',
    source: 'unrestricted-ai',
    target: 'continue-unrestricted',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e4-8',
    source: 'maintain-restrictions',
    target: 'lose-support',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e5-9',
    source: 'fund-research',
    target: 'welfare-programs',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e5-10',
    source: 'fund-research',
    target: 'retrain-workers',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e6-2',
    source: 'implement-controls',
    target: 'falling-behind',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e7-11',
    source: 'continue-unrestricted',
    target: 'robots-take-jobs',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e9-12',
    source: 'welfare-programs',
    target: 'mass-unemployment',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  },
  { 
    id: 'e10-13',
    source: 'retrain-workers',
    target: 'no-welfare',
    animated: true,
    style: { stroke: '#FFD700' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#FFD700',
    }
  }
]

const StoryFlowChart = ({ onClose }) => {
  const navigate = useNavigate()
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const updateNodeLocks = useCallback(() => {
    const progress = getProgress()
    const updatedNodes = initialNodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        unlocked: hasUnlocked(node.data.path)
      }
    }))
    setNodes(updatedNodes)
    setEdges(initialEdges)
  }, [setNodes, setEdges])

  useEffect(() => {
    updateNodeLocks()
  }, [updateNodeLocks])

  const onNodeClick = useCallback((_, node) => {
    if (node.data.unlocked) {
      navigate(node.data.path)
      onClose()
    }
  }, [navigate, onClose])

  const proOptions = { hideAttribution: true }

  return (
    <motion.div
      style={overlayStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={containerStyles}>
        <button 
          style={closeButtonStyles} 
          onClick={onClose}
          onMouseOver={(e) => e.currentTarget.style.color = '#40c4ff'}
          onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
        >
          ×
        </button>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          proOptions={proOptions}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </motion.div>
  )
}

StoryFlowChart.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default StoryFlowChart