import { useState } from 'react'
import TypewriterText from '../components/shared/TypewriterText'
import RevealButton from '../components/shared/RevealButton'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Robots powered by AI take over more and more jobs creating unseen levels of unemployment.",
  "The economy has never been better as automation drives unprecedented growth.",
  "Manual jobs are also in danger as robots become increasingly human-like.",
  "Your advisors are split on how to handle this transition.",
  "What path will you choose?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton to="/mass-unemployment">
      Address Unemployment
    </NavigationButton>
    <NavigationButton to="/embrace-automation">
      Embrace Progress
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