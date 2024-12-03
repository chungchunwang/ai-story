import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "AI evolves past the abilities of mankind. Do you wish to take back control of AI?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/fighting-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Yes
    </NavigationButton>
    <NavigationButton 
      to="/diplomatic-efforts"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      No
    </NavigationButton>
  </span>
]

export default function SuperAI() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
