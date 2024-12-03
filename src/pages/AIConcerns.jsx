import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Public society has concerns that AI may have too much knowledge. Do you insist that AI is for the best of mankind?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/ai-banned"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      No, Ban AI
    </NavigationButton>
    <NavigationButton 
      to="/super-ai" 
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      This could only help humans, there is no reason they should be regulated.
    </NavigationButton>
  </span>
]

export default function AIConcerns() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
