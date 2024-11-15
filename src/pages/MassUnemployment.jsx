import { useState } from 'react'
import TypewriterText from '../components/shared/TypewriterText'
import RevealButton from '../components/shared/RevealButton'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Mass unemployment has reached critical levels.",
  "Automation and AI have displaced millions of workers.",
  "Civil unrest grows as families struggle to make ends meet.",
  "Your advisors suggest implementing social welfare programs.",
  "Do you expand the social safety net?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton to="/welfare-programs">
      Implement Programs
    </NavigationButton>
    <NavigationButton to="/no-welfare">
      Maintain Status Quo
    </NavigationButton>
  </span>
]

export default function MassUnemployment() {
  const [showStory, setShowStory] = useState(false)

  return (
    <>
      <h1>Economic Crisis</h1>
      
      {!showStory && (
        <RevealButton onClick={() => setShowStory(true)}>
          View Employment Report
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