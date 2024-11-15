import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Introduction from './pages/Introduction'
import FallingBehind from './pages/FallingBehind'
import UnrestrictedAI from './pages/UnrestrictedAI'
import MaintainRestrictions from './pages/MaintainRestrictions'
import FundResearch from './pages/FundResearch'
import ImplementControls from './pages/ImplementControls'
import ContinueUnrestricted from './pages/ContinueUnrestricted'
import WelfarePrograms from './pages/WelfarePrograms'
import RetrainWorkers from './pages/RetrainWorkers'
import LoseSupport from './pages/LoseSupport'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import StoryFlowChart from './components/StoryFlowChart'
import NetworkBackground from './components/NetworkBackground'
import PageTransition from './components/shared/PageTransition'
import { saveProgress } from './utils/storyProgress'

function App() {
  const [isFlowChartOpen, setIsFlowChartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    saveProgress(location.pathname)
  }, [location.pathname])

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NetworkBackground />
      <Navbar onFlowChartClick={() => setIsFlowChartOpen(true)} />
      
      <main style={{
        position: 'relative',
        marginTop: '80px',
        width: '100vw'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '90%',
          margin: '0 auto',
          padding: '2rem',
          fontFamily: 'Nova Square, sans-serif',
          lineHeight: '1.5'
        }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Introduction /></PageTransition>} />
              <Route path="/falling-behind" element={<PageTransition><FallingBehind /></PageTransition>} />
              <Route path="/unrestricted-ai" element={<PageTransition><UnrestrictedAI /></PageTransition>} />
              <Route path="/maintain-restrictions" element={<PageTransition><MaintainRestrictions /></PageTransition>} />
              <Route path="/fund-research" element={<PageTransition><FundResearch /></PageTransition>} />
              <Route path="/implement-controls" element={<PageTransition><ImplementControls /></PageTransition>} />
              <Route path="/continue-unrestricted" element={<PageTransition><ContinueUnrestricted /></PageTransition>} />
              <Route path="/welfare-programs" element={<PageTransition><WelfarePrograms /></PageTransition>} />
              <Route path="/retrain-workers" element={<PageTransition><RetrainWorkers /></PageTransition>} />
              <Route path="/lose-support" element={<PageTransition><LoseSupport /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>

      {isFlowChartOpen && (
        <StoryFlowChart onClose={() => setIsFlowChartOpen(false)} />
      )}
    </div>
  )
}

export default App
