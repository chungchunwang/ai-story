import { useState } from 'react'
import TypewriterText from '../components/shared/TypewriterText'
import RevealButton from '../components/shared/RevealButton'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Robots powered by AI take over more and more jobs creating unseen levels of unemployment, but the economy has never been better.",
  "Manual jobs are also in danger as they exponentially become more human-like.",
  "What do you do?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton to="/ai-concerns">
      Address Unemployment
    </NavigationButton>
    <NavigationButton to="/embrace-automation">
      Nothing
    </NavigationButton>
  </span>
]

export default function RobotsTakeJobs() {
  const [showStory, setShowStory] = useState(false)

  return (
    <>
      <h1>The Rise of Automation</h1>
      
      {!showStory && (
        <RevealButton onClick={() => setShowStory(true)}>
          View Economic Report
        </RevealButton>
      )}

      {showStory && (
        <TypewriterText 
          lines={storyLines}
        />
      )}
    </>
  )
}