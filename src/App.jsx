import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import StoryFlowChart from './components/StoryFlowChart';
import NetworkBackground from './components/NetworkBackground';
import PageTransition from './components/shared/PageTransition';
import { saveProgress } from './utils/storyProgress';
import useSound from 'use-sound';

// Import all pages
import Introduction from './pages/Introduction';
import FallingBehind from './pages/FallingBehind';
import UnrestrictedAI from './pages/UnrestrictedAI';
import MaintainRestrictions from './pages/MaintainRestrictions';
import FundResearch from './pages/FundResearch';
import ImplementControls from './pages/ImplementControls';
import ContinueUnrestricted from './pages/ContinueUnrestricted';
import WelfarePrograms from './pages/WelfarePrograms';
import RetrainWorkers from './pages/RetrainWorkers';
import LoseSupport from './pages/LoseSupport';
import NotFound from './pages/NotFound';
import MassUnemployment from './pages/MassUnemployment';
import NoWelfare from './pages/NoWelfare';
import TakeAction from './pages/TakeAction';
import FixingNeuralLink from './pages/FixingNeuralLink';
import NeuralLinkChaos from './pages/NeuralLinkChaos';
import SpiritualQuestion from './pages/SpiritualQuestion';
import GoodSpiritualTraining from './pages/GoodSpiritualTraining';
import BadSpiritualTraining from './pages/BadSpiritualTraining';
import AIAndHumans from './pages/AIAndHumans';
import AIBanned from './pages/AIBanned';
import AIConcerns from './pages/AIConcerns';
import AICrashesEconomy from './pages/AICrashesEconomy';
import AIPower from './pages/AIPower';
import AISeparation from './pages/AISeparation';
import AITakeover from './pages/AITakeover';
import AITraining from './pages/AITraining';
import BadNeuralLink from './pages/BadNeuralLink';
import CombineAI from './pages/CombineAI';
import Conflicted from './pages/Conflicted';
import DiplomaticEfforts from './pages/DiplomaticEfforts';
import EmbraceAutomation from './pages/EmbraceAutomation';
import FightingAI from './pages/FightingAI';
import Lobbied from './pages/Lobbied';
import MilitaryArrival from './pages/MilitaryArrival';
import NeuralLink from './pages/NeuralLink';
import PublicAnnouncement from './pages/PublicAnnouncement';
import RobotsTakeJobs from './pages/RobotsTakeJobs';
import SaveTheCitizens from './pages/SaveTheCitizens';
import StoppingAI from './pages/StoppingAI';
import SuperAI from './pages/SuperAI';
import TheEndOfHumanity from './pages/TheEndOfHumanity';
import Tragedy from './pages/Tragedy';

function App() {
  const [isFlowChartOpen, setIsFlowChartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    saveProgress(location.pathname);
  }, [location.pathname]);

  const [play] = useSound('/audio/starfield.mp3', { loop: true, volume: 0.5 });
  useEffect(() => {
    play();
  }, [play]);

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NetworkBackground />
      <Navbar onFlowChartClick={() => setIsFlowChartOpen(true)} />

      <main
        style={{
          position: 'relative',
          marginTop: '80px',
          width: '100vw',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            width: '90%',
            margin: '0 auto',
            padding: '2rem',
            fontFamily: 'Nova Square, sans-serif',
            lineHeight: '1.5',
          }}
        >
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
              <Route path="/mass-unemployment" element={<PageTransition><MassUnemployment /></PageTransition>} />
              <Route path="/no-welfare" element={<PageTransition><NoWelfare /></PageTransition>} />
              <Route path="/take-action" element={<PageTransition><TakeAction /></PageTransition>} />
              <Route path="/fixing-neural-link" element={<PageTransition><FixingNeuralLink /></PageTransition>} />
              <Route path="/neural-link-chaos" element={<PageTransition><NeuralLinkChaos /></PageTransition>} />
              <Route path="/spiritual-question" element={<PageTransition><SpiritualQuestion /></PageTransition>} />
              <Route path="/good-spiritual-training" element={<PageTransition><GoodSpiritualTraining /></PageTransition>} />
              <Route path="/bad-spiritual-training" element={<PageTransition><BadSpiritualTraining /></PageTransition>} />
              <Route path="/ai-and-humans" element={<PageTransition><AIAndHumans /></PageTransition>} />
              <Route path="/ai-banned" element={<PageTransition><AIBanned /></PageTransition>} />
              <Route path="/ai-concerns" element={<PageTransition><AIConcerns /></PageTransition>} />
              <Route path="/ai-crashes-economy" element={<PageTransition><AICrashesEconomy /></PageTransition>} />
              <Route path="/ai-power" element={<PageTransition><AIPower /></PageTransition>} />
              <Route path="/ai-separation" element={<PageTransition><AISeparation /></PageTransition>} />
              <Route path="/ai-takeover" element={<PageTransition><AITakeover /></PageTransition>} />
              <Route path="/ai-training" element={<PageTransition><AITraining /></PageTransition>} />
              <Route path="/bad-neural-link" element={<PageTransition><BadNeuralLink /></PageTransition>} />
              <Route path="/combine-ai" element={<PageTransition><CombineAI /></PageTransition>} />
              <Route path="/conflicted" element={<PageTransition><Conflicted /></PageTransition>} />
              <Route path="/diplomatic-efforts" element={<PageTransition><DiplomaticEfforts /></PageTransition>} />
              <Route path="/embrace-automation" element={<PageTransition><EmbraceAutomation /></PageTransition>} />
              <Route path="/fighting-ai" element={<PageTransition><FightingAI /></PageTransition>} />
              <Route path="/lobbied" element={<PageTransition><Lobbied /></PageTransition>} />
              <Route path="/military-arrival" element={<PageTransition><MilitaryArrival /></PageTransition>} />
              <Route path="/neural-link" element={<PageTransition><NeuralLink /></PageTransition>} />
              <Route path="/public-announcement" element={<PageTransition><PublicAnnouncement /></PageTransition>} />
              <Route path="/robots-take-jobs" element={<PageTransition><RobotsTakeJobs /></PageTransition>} />
              <Route path="/save-the-citizens" element={<PageTransition><SaveTheCitizens /></PageTransition>} />
              <Route path="/stopping-ai" element={<PageTransition><StoppingAI /></PageTransition>} />
              <Route path="/super-ai" element={<PageTransition><SuperAI /></PageTransition>} />
              <Route path="/the-end-of-humanity" element={<PageTransition><TheEndOfHumanity /></PageTransition>} />
              <Route path="/tragedy" element={<PageTransition><Tragedy /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>

      {isFlowChartOpen && (
        <StoryFlowChart onClose={() => setIsFlowChartOpen(false)} />
      )}
    </div>
  );
}

export default App;