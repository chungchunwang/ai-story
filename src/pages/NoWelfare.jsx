import { useState } from 'react'
import TypewriterText from '../components/shared/TypewriterText'
import RevealButton from '../components/shared/RevealButton'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You maintain your stance against welfare programs.",
  "While corporate donors continue their support,",
  "Civil unrest reaches a breaking point.",
  "Protests turn violent as desperate citizens demand change.",
  "In the next election, you're overwhelmingly voted out of office.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton to="/">
      Start Over
    </NavigationButton>
  </span>
]

export default function NoWelfare() {
  const [showStory, setShowStory] = useState(false)

  return (
    <>
      <h1>Political Fallout</h1>
      
      {!showStory && (
        <RevealButton onClick={() => setShowStory(true)}>
          View Final Report
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